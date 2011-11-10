/*********************************
*   Autor: Luis Ramirez
*   Licencia: GPL
*   Descripciòn: Archivo que contiene la configuración de capas y comportamiento de GeoEXT
*********************************/

Ext.BLANK_IMAGE_URL = "./js/ext-3.3.0/resources/images/default/s.gif";
Ext.onReady(function() {
/* se manda llamar el panel del mapa*/
    var map = new OpenLayers.Map({allOverlays: true});
   
   /* Se inicializar las capas*/
  	
  	 var gpm = new OpenLayers.Layer.Google(
                "Google Physical",
                {type: G_PHYSICAL_MAP}, {isBaseLayer: false, visibility: false}
            );
			
	var gsm = new OpenLayers.Layer.Google(
                "Google Streets", // the default
                {numZoomLevels: 30}
            );
	var gsat = new OpenLayers.Layer.Google(
		        "Google Satellite",
		        {type: G_SATELLITE_MAP}, {isBaseLayer: false, visibility: false}
		    );
		    
	var glim = new OpenLayers.Layer.WMS(
		"Global Imagery",
        "http://maps.opengeo.org/geowebcache/service/wms", {
        	layers: "bluemarble",
        	format: "image/png" }, {isBaseLayer: false, visibility: false} 
    );   
        
    var estados = new OpenLayers.Layer.WMS(
      "Estados",
      "http://132.248.26.13:8080/geoserver/wms", {
        layers: "unigeo:estados", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  	);
  
  var vegetacion = new OpenLayers.Layer.WMS(
      "Vegetación",
      "http://132.248.26.13:8080/geoserver/wms", {
        layers: "unigeo:vegetacion_densa", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  	);
  
  var precipitacion = new OpenLayers.Layer.WMS(
      "Precipitación media",
      "http://132.248.26.13:8080/geoserver/wms", {
        layers: "unigeo:precipitacion_media_anual", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  	);
  
    var localidadurbana = new OpenLayers.Layer.WMS(
      "Localidad urbana",
      "http://132.248.26.13:8080/geoserver/wms", {
        layers: "unigeo:localidadurbana", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  	);
  	
  	var traza = new OpenLayers.Layer.WMS(
      "Traza Urbana Tlalpan",
      "http://132.248.26.87:8080/geoserver/wms", {
        layers: "topp:09014_TrazaUrbanaTlalpan", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  	);
  	
  	var bancos = new OpenLayers.Layer.WMS(
      "Bancos",
      "http://132.248.26.87:8080/geoserver/wms", {
        layers: "topp:09014_Bancos", 
        transparent: "true", 
        format: "image/png" }, {isBaseLayer: false, visibility: false}
  	);
  
 	var vector = new OpenLayers.Layer.Vector("Vector");
  
    
   /* Pinta las capas del mapa*/
    map.addLayers([gpm,gsm,gsat,glim,estados,vegetacion,precipitacion,localidadurbana,traza,bancos,vector]);

   /* Fin  de inicio de capas*/ 
  
  /*-- Vector --*/
 
 var ctrl, toolbarItems = [], action, actions = {};

    // ZoomToMaxExtent control, a "button" control
    action = new GeoExt.Action({
        control: new OpenLayers.Control.ZoomToMaxExtent(),
        map: map,
        text: "maximizar extent",
        tooltip: "Maximiza el extent"
    });
    actions["max_extent"] = action;
    toolbarItems.push(action);
    toolbarItems.push("-");

    // Navigation control and DrawFeature controls
    // in the same toggle group
    action = new GeoExt.Action({
        text: "navegar",
        control: new OpenLayers.Control.Navigation(),
        map: map,
        // button options
        toggleGroup: "draw",
        allowDepress: false,
        pressed: true,
        tooltip: "navegar",
        // check item options
        group: "draw",
        checked: true
    });
    actions["nav"] = action;
    toolbarItems.push(action);

    action = new GeoExt.Action({
        text: "dibujar polígono",
        control: new OpenLayers.Control.DrawFeature(
            vector, OpenLayers.Handler.Polygon
        ),
        map: map,
        // button options
        toggleGroup: "draw",
        allowDepress: false,
        tooltip: "dibujar polígono",
        // check item options
        group: "draw"
    });
    actions["draw_poly"] = action;
    toolbarItems.push(action);

    action = new GeoExt.Action({
        text: "dibujar línea",
        control: new OpenLayers.Control.DrawFeature(
            vector, OpenLayers.Handler.Path
        ),
        map: map,
        // button options
        toggleGroup: "draw",
        allowDepress: false,
        tooltip: "dibujar línea",
        // check item options
        group: "draw"
    });
    actions["draw_line"] = action;
    toolbarItems.push(action);
    toolbarItems.push("-");

    // SelectFeature control, a "toggle" control
    action = new GeoExt.Action({
        text: "seleccionar",
        control: new OpenLayers.Control.SelectFeature(vector, {
            type: OpenLayers.Control.TYPE_TOGGLE,
            hover: true
        }),
        map: map,
        // button options
        enableToggle: true,
        tooltip: "seleccionar características"
    });
    actions["select"] = action;
    toolbarItems.push(action);
    toolbarItems.push("-");

    // Navigation history - two "button" controls
    ctrl = new OpenLayers.Control.NavigationHistory();
    map.addControl(ctrl);

    action = new GeoExt.Action({
        text: "previo",
        control: ctrl.previous,
        disabled: true,
        tooltip: "previous in history"
    });
    actions["previous"] = action;
    toolbarItems.push(action);

    action = new GeoExt.Action({
        text: "siguiente",
        control: ctrl.next,
        disabled: true,
        tooltip: "next in history"
    });
    actions["next"] = action;
    toolbarItems.push(action);
    toolbarItems.push("->");

    // Reuse the GeoExt.Action objects created above
    // as menu items
    toolbarItems.push({
        text: "menu",
        menu: new Ext.menu.Menu({
            items: [
                // ZoomToMaxExtent
                actions["max_extent"],
                // Nav
                new Ext.menu.CheckItem(actions["nav"]),
                // Draw poly
                new Ext.menu.CheckItem(actions["draw_poly"]),
                // Draw line
                new Ext.menu.CheckItem(actions["draw_line"]),
                // Select control
                new Ext.menu.CheckItem(actions["select"]),
                // Navigation history control
                actions["previous"],
                actions["next"]
            ]
        })
    });

 
 /*-- Fin Vector --*/
   
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
        tbar: toolbarItems,
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
      layerStore:mapPanel.layers /*map.Layers*/,
      leaf: false,
      expanded: true
  });

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
    root: layerList

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
        width: 1024,
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