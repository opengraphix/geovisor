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
   
   /* Se inicializar las capas*/
	
	var gsm = 	new OpenLayers.Layer.Google(
		"Google Streets", // the default
		{numZoomLevels: 30}
    );
              	
  	var traza = new OpenLayers.Layer.WMS(
      "Traza Urbana Tlalpan",
      "http://132.248.26.87:8080/geoserver/wms", {
        layers: "topp:traza_urbana_tlalpan", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  	);
  	
  	var riesgos = new OpenLayers.Layer.WMS(
  		"Riesgos",
        "http://132.248.26.87:8080/geoserver/wms", {
        layers: [
           "topp:calc",
           "topp:cam",
           "topp:cetis",
           "topp:imss"
        ],
        transparent: true,
        format: "image/png"}, {isBaseLayer: false, buffer: 0, visibility: false}
	);
  	
   /* Pinta las capas del mapa*/
    map.addLayers([gsm,traza,riesgos]);

   /* Fin  de inicio de capas*/ 
    /*map.addControl(new OpenLayers.Control.LayerSwitcher());*/
   /* map.zoomToMaxExtent();*/

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
        zoom: 13,
        center: [-99.183056, 19.283056],
        /*Barra de zoom Slider*/
        items: [{
            xtype: "gx_zoomslider",
            vertical: true,
            height: 200,
            x: 10,
            y: 200,
            plugins: new GeoExt.ZoomSliderTip()
        }]
    });
/* Fin de llamar panel del mapa*/
    
/* Popup*/
var featureInfo = new OpenLayers.Control.WMSGetFeatureInfo();
featureInfo.events.on({
    getfeatureinfo: function(e) {
        new GeoExt.Popup({
            title: "Informacion",
            width: 700,
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

/* Crea un directorio de las capas*/

var layerList = new GeoExt.tree.LayerContainer({
      text: 'Todas las capas',
      layerStore: mapPanel.layers /*map.Layers*/,
      leaf: false,
      expanded: true,
  });
  

  
/* Inicio de panel de arbol*/


var tree = new Ext.tree.TreePanel({
    title: "Capas del mapa",
    expanded: true,
    region: "west",
    useArrows: true,
    width: 180,
    animate: true,
    frame: true,
    split: true,
    collapsible: true,
    collapseMode: "mini",
    autoScroll: true,
    lines: false,
    root: layerList,

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
        height: 600,
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