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
  	 var gpm =new OpenLayers.Layer.Google(
                "Google Physical",
                {type: G_PHYSICAL_MAP}, {isBaseLayer: false, visibility: false}
            );
			
		var gsm = 	new OpenLayers.Layer.Google(
                "Google Streets", // the default
                {numZoomLevels: 30}
            );
        
    var otro_equipo_2 = new OpenLayers.Layer.WMS(
      "Otros equipos",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:otro_equipo_2", 
        transparent: "true", 
        format: "image/png",
            styleMap: new OpenLayers.StyleMap({
                'default' :  new OpenLayers.Style({
                    externalGraphic : 'http://132.248.14.226/atlasdf/images/city-48x48.png'
                    ,pointRadius : 17
                }),            
                'select' : new OpenLayers.Style({
                    externalGraphic : 'images/city-48x48.png'
                    ,pointRadius : 27
                })            
	        })    
		 }, {isBaseLayer: false, visibility: false}
  );
  
   var mesa = new OpenLayers.Layer.WMS(
      "Mesa",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:mesa", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
   var otro = new OpenLayers.Layer.WMS(
      "Otros",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:otro", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var gim_abierto = new OpenLayers.Layer.WMS(
      "Otros",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:gim_abierto", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
var rampa_2 = new OpenLayers.Layer.WMS(
      "Rampas",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:rampa_2", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var biciestacion = new OpenLayers.Layer.WMS(
      "Biciestacion",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:biciestacion", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var metrobus = new OpenLayers.Layer.WMS(
      "Metrobus",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:metrobus", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var otro_equipo = new OpenLayers.Layer.WMS(
      "Otros equipos",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:otro_equipo", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var sanitarios = new OpenLayers.Layer.WMS(
      "Sanitarios",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:sanitarios", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var edif_admitivo = new OpenLayers.Layer.WMS(
      "Edificios administrativos",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:edif_admitivo", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var banca = new OpenLayers.Layer.WMS(
      "Bancas",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:banca", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
    
var otro = new OpenLayers.Layer.WMS(
      "Otros",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:otro", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  var areas = new OpenLayers.Layer.WMS(
      "Areas",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:areas", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var metro = new OpenLayers.Layer.WMS(
      "Metro",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:metro", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var otro = new OpenLayers.Layer.WMS(
      "Otros",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:otro", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );	
  
  var museo = new OpenLayers.Layer.WMS(
      "Museo",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:museo", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var rampa = new OpenLayers.Layer.WMS(
      "Rampa",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:rampa", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var sitio_taxi = new OpenLayers.Layer.WMS(
      "Sitio de taxis",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:sitio_taxi", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var areas_total = new OpenLayers.Layer.WMS(
      "Areas total",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:areas_total", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var tienda_especializada_2 = new OpenLayers.Layer.WMS(
      "Tiendas especializadas",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:tienda_especializada_2", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var bolardo_2 = new OpenLayers.Layer.WMS(
      "Bolardo",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:bolardo_2", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var taller_educativo = new OpenLayers.Layer.WMS(
      "Taller educativo",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:taller_educativo", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var gim_cerrado = new OpenLayers.Layer.WMS(
      "Gimnacios cerrados",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:gim_cerrado", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var para_bus_2 = new OpenLayers.Layer.WMS(
      "Parabus",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:para_bus_2", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var otro_servicios_2 = new OpenLayers.Layer.WMS(
      "Otros servicios",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:otro_servicios_2", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var otro_2 = new OpenLayers.Layer.WMS(
      "Otros",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:otro_2", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var biciestacion_2 = new OpenLayers.Layer.WMS(
      "Biciestacion 2",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:biciestacion_2", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var sanitarios_2 = new OpenLayers.Layer.WMS(
      "Sanitarios 2",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:sanitarios_2", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var banca_2 = new OpenLayers.Layer.WMS(
      "Bancas 2",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:banca_2", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var luminaria_2 = new OpenLayers.Layer.WMS(
      "Luminarias",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:luminaria_2", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var viveros = new OpenLayers.Layer.WMS(
      "Viveros",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:viveros", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  var pista_skate = new OpenLayers.Layer.WMS(
      "Pista skate",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:pista_skate", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  var juegos_inf_2 = new OpenLayers.Layer.WMS(
      "Juegos infantiles",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:juegos_inf_2", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var pergola = new OpenLayers.Layer.WMS(
      "Pergola",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:pergola", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var botes_basura = new OpenLayers.Layer.WMS(
      "Botes basura",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:botes_basura", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var campo_fut = new OpenLayers.Layer.WMS(
      "Campos Futbol",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:campo_fut", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var tienda_especializada = new OpenLayers.Layer.WMS(
      "Tienda especializada",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:tienda_especializada", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var bolardo = new OpenLayers.Layer.WMS(
      "Bolardo",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:bolardo", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
  
  var luminaria = new OpenLayers.Layer.WMS(
      "luminaria",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:luminaria", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
	
var otros_servicios = new OpenLayers.Layer.WMS(
      "Otros servicios",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:otros_servicios", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );	  
  
  var parada_micro = new OpenLayers.Layer.WMS(
      "Parada microbus",
      "http://132.248.14.226:8080/geoserver/wms", {
        layers: "aepdf:parada_micro", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  );
    
   /* Pinta las capas del mapa*/
    map.addLayers([gpm,gsm,otro_equipo_2,mesa,otro,gim_abierto, rampa_2, biciestacion,metrobus,otro_equipo, sanitarios, edif_admitivo, banca,areas,
	metro,museo,sitio_taxi,areas_total,tienda_especializada_2, bolardo_2,taller_educativo,gim_cerrado, para_bus_2,otro_servicios_2,otro_2,biciestacion_2,sanitarios_2,
	banca_2,luminaria_2,pista_skate, juegos_inf_2,pergola,botes_basura,campo_fut,tienda_especializada,bolardo,luminaria,otros_servicios,parada_micro]);
    /*map.addControl(new OpenLayers.Control.LayerSwitcher());*/
   /* map.zoomToMaxExtent();*/
/* new OpenLayers.Control.Navigation(),
new OpenLayers.Control.PanPanel(),
new OpenLayers.Control.ZoomPanel()*/

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
        center: [-99.169549942, 19.4115746403],
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


/* Crea un directorio de las capas*/


/* Inicio de panel de arbol*/

var tree = new Ext.tree.TreePanel({
    title: "Capas del mapa",
    region: "west",
    useArrows: true,
    width: 180,
    animate: true,
    frame: true,
    split: true,
    collapsible: true,
    collapseMode: "mini",
    autoScroll: true,
    enableDD: true,
    lines: false,
   /* root: layerList*/
  root: new GeoExt.tree.LayerContainer({
      text: 'Todas las capas',
      layerStore:mapPanel.layers /*map.Layers*/,
      leaf: false,
      expanded: false
  }),
  root: new GeoExt.tree.LayerContainer({
      text: '2',
      layerStore:mapPanel.layers /*map.Layers*/,
      leaf: false,
      expanded: false
  }),

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
        height: 800,
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