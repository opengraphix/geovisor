/*********************************
*   Autor: Luis Ramirez
*   Instituto de Geografía, UNAM
*   Licencia: GPL
*   Descripciòn: Archivo que contiene la configuración de capas y comportamiento de GeoEXT
*********************************/

Ext.BLANK_IMAGE_URL = "./js/ext-3.3.0/resources/images/default/s.gif";
Ext.onReady(function() {
/* se manda llamar el panel del mapa*/
    var map = new OpenLayers.Map({allOverlays: true});
    
    var root = new Ext.tree.AsyncTreeNode({
        text: 'Capas disponibles',
        loader: new GeoExt.tree.WMSCapabilitiesLoader({
            url: 'http://132.248.26.130:8080/geoserver/ows?service=wms&version=1.1.1&request=GetCapabilities',
            layerOptions: {buffer: 0, singleTile: true, ratio: 1},
            layerParams: {'TRANSPARENT': 'TRUE'},
            // customize the createNode method to add a checkbox to nodes
            createNode: function(attr) {
                attr.checked = attr.leaf ? false : undefined;
                return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
            }
        }), expanded: true
     });
   
   /* Se inicializar las capas*/
   
        
   /* Pinta las capas del mapa*/
   

   /* Fin  de inicio de capas*/ 
   
   /*Escala en el mapa*/
    var scaleCombo = new Ext.form.ComboBox({
        width: 130,
        mode: "local",
        emptyText: "Scale",
        triggerAction: "all",
        displayField: "scale",
        store: new GeoExt.data.ScaleStore({
          map: map
          }),
        listeners: {
          select: function(combo, record) {
            map.zoomTo(record.get("level"));
            }
         }
    });
    map.events.register("zoomend", this, function() {
      scaleCombo.setValue(map.getScale());
      });
   /*Fin de escala*/
   
   /*Inicia la sección del panel de mapa*/   
    var mapPanel = new GeoExt.MapPanel({
        title: "Mapa",
        border: true,
        region: "center",
        map: map,
        bbar:[{
          xtype: "label",
          text: "Escala = 1 : "
          }, scaleCombo],
        zoom: 7,
        center: [-93.1333, 16.7500],
        /*Barra de zoom Slider*/
        items: [{
            xtype: "gx_zoomslider",
            vertical: true,
            height: 100,
            x: 10,
            y: 200,
            plugins: new GeoExt.ZoomSliderTip()
        }],
        layers: [
            new OpenLayers.Layer.WMS("Global Imagery",
                "http://maps.opengeo.org/geowebcache/service/wms", 
                {layers: "bluemarble"},
                {buffer: 0}
            )
        ]
    });
/* Fin de llamar panel del mapa*/
    
/* Popup*/
var featureInfo = new OpenLayers.Control.WMSGetFeatureInfo();
featureInfo.events.on({
    getfeatureinfo: function(e) {
        new GeoExt.Popup({
            title: "Informacion",
            width: 200,
            height: 150,
            autoScroll: true,
            map: map,
            lonlat: map.getLonLatFromPixel(e.xy),
            html: e.text
        }).show();
    }
});
map.addControl(featureInfo);
featureInfo.activate();
/* fin de popup*/

tree = new Ext.tree.TreePanel({
        root: root,
        region: 'west',
        width: 250,
        useArrows: true,
        animate: true,
        frame: true,
        /*split: true,*/
        collapsible: true,
        collapseMode: "mini",
        autoScroll: true,
        enableDD: true,
        lines: false,
        bbar: [{
          text: "Eliminar del mapa",
          handler: function() {
              var node = tree.getSelectionModel().getSelectedNode();
              if(node) {
                  map.removeLayer(node.layer);
              }
           }
        }],
        listeners: {
            // Add layers to the map when ckecked, remove when unchecked.
            // Note that this does not take care of maintaining the layer
            // order on the map.
            'checkchange': function(node, checked) { 
                if (checked === true) {
                    mapPanel.map.addLayer(node.attributes.layer); 
                } else {
                    mapPanel.map.removeLayer(node.attributes.layer);
                }
            }
        }
    });
/*Fin de panel de arbol*/

/* Leyendas*/
var legend = new GeoExt.LegendPanel({
    region: "east",
    title: "Etiquetas",
    width: 200,
    split: true,
    collapsible: true,
    collapseMode: "mini",
    autoScroll: true,
    layers: mapPanel.layers
});
/* fin de leyendas*/

/* Formacion de los paneles en el html*/
    new Ext.Panel({
        /*renderTo: document.body,*/ /*Esto hace que se ponga el mapa en el cuerpo del html sin llamar un div*/
        renderTo: gxmap,
        width: 958,
        height: 500,
        layout: "border",
        items: [mapPanel, tree, legend]
    });
    
    // Crea una barra de zoom 
   var slider = new GeoExt.ZoomSlider({
        map: panel.map,
        aggressive: true,                                                                                                                                                   
        width: 200,
        plugins: new GeoExt.ZoomSliderTip({
            template: "<div>Zoom Level: {zoom}</div>"
        }),
        renderTo: document.body
    });
});