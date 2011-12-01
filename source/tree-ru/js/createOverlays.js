function createOverlays(mapObject){

    var WFSLayerList,
        defaultWFSProperty = {
            url: "http://map.rostmuseum.ru/scripts/tinyows/tinyows.cgi?",
            featureNS: "http://nextgis.org/sf",
            geometryName: "wkb_geometry"
        },
        JsonFormat = new OpenLayers.Format.JSON();
        

    OpenLayers.Request.GET({
        url: defaultWFSProperty.url+'SERVICE=WFS&REQUEST=GetCapabilities',
        async: false,
        success: function(e) {
            WFSLayerList = new OpenLayers.Format.WFSCapabilities().read(e.responseText);
        }
    });
   
    WFSLayerList.featureTypeList.featureTypes.forEach(function(l) {
        window[l.name] = new OpenLayers.Layer.Vector(l.abstract, {
            strategies: [new OpenLayers.Strategy.Fixed(), new OpenLayers.Strategy.Save()],
            visibility: false,
            protocol: new OpenLayers.Protocol.WFS(OpenLayers.Util.applyDefaults({featureType: l.name}, defaultWFSProperty))
        });
        mapObject.addLayer(window[l.name]);
    });
    
    //Styling
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++= */
    var defaultIcon = '../images/main/default-layer-icon.gif'
    
    OpenLayers.Request.POST({
        url: '../layer-symbology-get.php',
        async: false,
        success: function(response) {
            var icon,
                result = JsonFormat.read(response.responseText);
            result.forEach(function(item) {
                if (item.icon instanceof Object) { // catch empty icon
                    icon = defaultIcon;
                } else {
                    icon = item.icon;
                }
                if      (item.text == 'border')   window[item.text].styleMap = borderStyleMap
                else if (item.text == 'oblasts')  window[item.text].styleMap = oblastsStyleMap
                else if (item.text == 'selsovet') window[item.text].styleMap = selsovetStyleMap
                else if (item.text == 'rayons')   window[item.text].styleMap = rayonStyleMap
                else {
                    window[item.text].styleMap = new OpenLayers.StyleMap({
                        "default": new OpenLayers.Style({graphicOpacity:1, graphicTitle:"${name}", graphicWidth:32, graphicHeight:32, externalGraphic: icon}),
                        "select" : new OpenLayers.Style({graphicWidth:45, graphicHeight:52})
                    });
                }
            });
        },
        failure : function(){
            Ext.Msg.alert('Ошибка','Невозможно загрузить информацию о стилях')
        }
    });
    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
}
