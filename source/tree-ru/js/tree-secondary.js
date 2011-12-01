var map,
    mapPanel,
    tree,
    geographic = new OpenLayers.Projection("EPSG:4326"),
    rectangle = new OpenLayers.Projection("EPSG:900913"),
    isiPad = /(iphone|ipad|android)/.test(navigator.userAgent.toLowerCase());

Ext.onReady(function() {
    
    Ext.BLANK_IMAGE_URL = '../libs/ext-3.4.0/resources/images/default/s.gif';
    Ext.QuickTips.init();

    var config,
        treeConfig,
        flag = false,
        logo = '<a href="http://nextgis.ru" target="_blank"><img src="http://nextgis.ru/img/nextgis.png" alt="NextGIS: открытые геотехнологии" width="100" height="33" /></a>',
        loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:OpenLayers.i18n("Загрузка...")}),
        center = new OpenLayers.LonLat(39.3141,57.1901).transform(geographic,rectangle),
        Y_map  = new OpenLayers.Layer.Yandex("Яndex",{sphericalMercator: true}),
        G_mapH = new OpenLayers.Layer.Google("Google (гибрид)",{type: G_HYBRID_MAP, sphericalMercator: true}),
        G_map  = new OpenLayers.Layer.Google("Google",{type: G_NORMAL_MAP, sphericalMercator: true}),
        Y_mapH = new OpenLayers.Layer.Yandex("Яndex (гибрид)",{type:YMaps.MapType.HYBRID, sphericalMercator: true}),
        mapnik = new OpenLayers.Layer.OSM();

    function childrenList(arr) {
        var list = [];
        function getLeaf(item) {
            if (item.children.length !== 0) item.children.forEach(getLeaf)
            else if (!item.group) list.push(item);
        }
        arr.forEach(getLeaf);
        return list;
    }

    function makeGroupCheckboxes(obj) {
        if (obj.group) obj.checked = false;
        obj.children.forEach(function(item) {
            if ((item.children.length !== 0) && (item.group)) {
                item.checked = false;
                item.children.forEach(makeGroupCheckboxes);
            }
        });
    }
    
    /*
    -= Map =-
    */
    OpenLayers.ImgPath = "http://js.mapbox.com/theme/dark/";
    
    map = new OpenLayers.Map({
        units: "m",
        numZoomLevels:18,
        maxResolution: 156543.0339,
        maxExtent: new OpenLayers.Bounds(4262803.01,7576268.3855,4505488.92,7944022.4645)
    });
    map.addLayers([mapnik,Y_map,Y_mapH,G_map,G_mapH]);
    createOverlays(map);
    
    /*
    -= Adding LoadMask & Unbind FeatureStore=-
    */
    map.layers.forEach(function(arr){
        arr.events.on({'loadstart': function(){loadingMask.show()},
                       'loadend': function(){loadingMask.hide()},
                       'visibilitychanged': function(){
                            if ((!arr.visibility) && (store.layer == arr)){
                                store.unbind();
                                store.removeAll();
                                gridPanel.getSelectionModel().unbind();
                                gridPanel.setTitle('Список объектов');
                                gridPanel.collapse();
                            }
                        }});
    });
    
    /*
    -= Adding NextGIS banner =-
    */
    var container = map.viewPortDiv;
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.zIndex = "1100";
    div.style.right = "1px";
    div.style.top = "1px";
    div.innerHTML = logo;
    container.appendChild(div);
    
    /*
    -= Controls =-
    */
    var select = new OpenLayers.Control.SelectFeature(map.getLayersByClass('OpenLayers.Layer.Vector'),
        {hover:true,
            callbacks:{
                click: function(feat) {
                    createPopup(feat);
                }
            }
        });
        
    var touch = new OpenLayers.Control.TouchNavigation({autoActivate: false});
    map.addControls([select, touch]);
    select.handlers.feature.stopDown = false;
    select.activate();
    if (isiPad) touch.activate();

    /*
    -= Popup =-
    */

    function createPopup(feature) {

        popup = new GeoExt.Popup({
            title: feature.attributes["name"],
            location: feature,
            width: 400,
            maximizable: false,
            collapsible: false,
            resizable: false,
            autoScroll: true
        });
        
        popup.add({
            xtype: 'tabpanel',
            activeTab: 0,
            height: 250,
            width: 386,
            closable:true,
            draggable: true,
            enableTabScroll: true,
            defaults:{autoScroll: true},
            items: [{
                title: "Инфо",
                autoLoad: {
                    url: "getdesc-features.php",
                    method: "POST",
                    params: {
                        layer: feature.layer.protocol.featureType,
                        id: feature.fid.split(".")[1]
                    }
                }
            },
            {
                title: "Фотографии",
                autoLoad: {
                    url: "getimages.php",
                    method: "POST",
                    params: {
                        layer: feature.layer.protocol.featureType,
                        id: feature.fid.split(".")[1]
                    }
                }
            }]
        });
        popup.show();
    }

    var LayerNodeUI = Ext.extend(GeoExt.tree.LayerNodeUI, new GeoExt.tree.TreeNodeUIEventMixin());

    /*
    -= Layer tree =-
    */
    
    OpenLayers.Request.POST({
        url: './load-tree-config.php',
        data: OpenLayers.Util.getParameterString({config_type: "secondary"}),
        async: false,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        callback: function(response) {
            var layer,
                icon;
            config = Ext.decode(response.responseText)[0];
            
            //Apply layers icons to the TOC items
            childrenList(config.children).forEach(function(item) {
                if (map.getLayersByName(item.layer).length !== 0) {
                    layer = map.getLayersByName(item.layer)[0];
                    icon = layer.styleMap.styles["default"].defaultStyle.externalGraphic
                    if (icon) item.icon = icon;
                    delete item.checked;
                }
            });
            
            //Make checkboxes for group nodes and set them to unchecked state
            makeGroupCheckboxes(config);

            treeConfig = [config,
                             {
                                 expanded: false,
                                 nodeType: "gx_baselayercontainer",
                                 text: "Базовые карты"
                             }
                         ];
        }
    });

    tree = new Ext.tree.TreePanel({
        border: true,
        region: "center",
        title: "Слои",
        width: 350,
        autoScroll: true,
        loader: new Ext.tree.TreeLoader({
            applyLoader: false,
            uiProviders: {
                "layernodeui": LayerNodeUI
            }
        }),
        contextMenu: new Ext.menu.Menu({
            id:'feeds-ctx',
            height: 55,
            width: 210,
            items: [{
                id: 'feature-grid',
                text: 'Показать список объектов',
                icon: '../images/main/list.png'
            },
            {
                id: 'layer-info',
                text: 'О слое',
                icon: '../images/main/info.gif'
            }],
            listeners: {
                itemclick: function(item){
                    switch (item.id){
                        case 'feature-grid':
                            if (!item.parentMenu.contextNode.ui.isChecked()){
                                item.parentMenu.contextNode.ui.toggleCheck(true);
                            }
                            if (gridPanel.collapsed){
                                gridPanel.expand(true);
                            }
                            if (item.parentMenu.contextNode.layer !== store.layer){
                                store.unbind();
                                store.removeAll();
                                store.bind(item.parentMenu.contextNode.layer);
                                gridPanel.getSelectionModel().unbind();
                                gridPanel.getSelectionModel().bind(item.parentMenu.contextNode.layer);
                                gridPanel.getSelectionModel().selectControl.handlers.feature.stopClick = false;
                                gridPanel.getSelectionModel().selectControl.handlers.feature.stopDown = false;
                                gridPanel.setTitle(item.parentMenu.contextNode.layer.name);
                            }
                            break;
                        case 'layer-info':
                            if ((item.parentMenu.contextNode.layer !== undefined) && (item.parentMenu.contextNode.attributes.checkedGroup!== "baselayer")) {
                                test = new Ext.Window({
                                    modal: true,
                                    title: item.parentMenu.contextNode.text,
                                    height: 232,
                                    width: 600,
                                    autoScroll: true,
                                    layout:"fit",
                                    bodyStyle:{"background-color": "#FFFFFF"},
                                    autoLoad: {
                                        url: "getdesc.php",
                                        method: "POST",
                                        params: {layer: item.parentMenu.contextNode.layer.protocol.featureType}
                                   }
                                });
                                test.show();
                            }
                            break;
                    }
                }
            }
        }),
        listeners: {
            contextmenu: function(node, e) {
                if ((node.layer !== undefined) && !node.layer.isBaseLayer){
                    node.select();
                    var c = node.getOwnerTree().contextMenu;
                    c.contextNode = node;
                    c.showAt(e.getXY());
                }
            },
            checkchange: function(node, checked){
                //Check all childs if parent is checked
                if ((node.attributes.group) && (!flag)){
                    checked ? node.expand() : node.collapse();
                    node.eachChild(function(child){
                        child.ui.toggleCheck(checked);
                    })
                }

                //Uncheck parent
                if ((!checked) && (node.parentNode.attributes.group)) {
                    var n = node.parentNode.firstChild;
                    flag = true;
                    while (n) {
                        if (n.ui.isChecked()) flag = false;
                        n = n.nextSibling;
                    }
                    if (flag) {
                        node.parentNode.ui.toggleCheck(checked);
                        flag = false;
                    }
                }

                //Check parent
                if ((checked) && (node.parentNode.attributes.group)) {
                    flag = true;
                    node.parentNode.ui.toggleCheck(checked);
                    flag = false;
                }
            }
        },
        root: {
            nodeType: "async",
            children: treeConfig
        },
        rootVisible: false,
        lines: true
    });
    
    var info = new Ext.Panel({
        title: "Справка",
        border: true,
        region: "south",
        height: 120,
        collapseMode: "mini",
        split: true,
        autoScroll: true,
        cls: 'info-panel',
        html: '<ul><li>Для показа слоя на карте включите его в списке.</li>\
                   <li>Для вызова меню нажмите правой кнопкой мыши на имени слоя.</li>\
                   <li>Для просмотра информации об объекте нажмите на него на карте.</li>\
               </ul>'
        
    });
    
    var westPanel = new Ext.Panel({
        id: "westPanel",
        border: false,
        layout: "border",
        region: "west",
        width: 380,
        split: true,
        collapseMode: "mini",
        items: [tree, info]
    });


    /*
    -= Feature Grid =-
    */
    
    store = new GeoExt.data.FeatureStore({
        fields: [
            {name: "name", type: "string"},
        ]
    });

    gridPanel = new Ext.grid.GridPanel({
        title: "Список объектов",
        region: "east",
        store: store,
        collapsible: true,
        collapseMode: 'mini',
        collapsed: true,
        width: 260,
        split: true,
        colModel: new Ext.grid.ColumnModel({
            defaults: {
                width: 235,
                sortable: true
            },
            columns: [{
                header: "Name",
                dataIndex: "name"
            }]}),
        sm: new GeoExt.grid.FeatureSelectionModel({layerFromStore: false}) 
    });

    /*
    -= Viewport =-
    */
    vp = new Ext.Viewport({
        layout: "fit",
        hideBorders: true,
        items: {
            layout: "border",
            deferredRender: false,
            items: [
            {
                region: "center",
                id: "mappanel",
                title: "Карта",
                xtype: "gx_mappanel",
                map: map,
                center: center,
                zoom: 9,
                split: true
            },
            westPanel,gridPanel]
        }
    });
});
