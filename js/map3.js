Ext.onReady(function() {	    
    // [1] - layer 
var gpm =new OpenLayers.Layer.Google(
                "Google Physical",
                {type: G_PHYSICAL_MAP}, {isBaseLayer: false, visibility: false}
            );
 
   // [1] - ZoomSlider 
	var zSlider = new GeoExt.ZoomSlider({
        vertical: true
        ,height: 110
        ,x: 18
        ,y: 85
        ,map: mapPanel
        ,plugins: new GeoExt.ZoomSliderTip({
            template: '<div>Zoom Level: <b>{zoom}</b></div>'
        })
    });
 
    // [2] - MapPanel
	var mapPanel = new GeoExt.MapPanel({
		renderTo: gxmap,
        map: {
            controls: [
			new OpenLayers.Control.Navigation()
			,new OpenLayers.Control.PanPanel()
            ,new OpenLayers.Control.ZoomPanel()
				]
        }
        ,region : 'center'
        ,title : 'mapa'
        ,layers: [gpm]
        ,extent: [-5, 35, 15, 55]
		,items  : [zSlider]
    });
 
     // [3] - Data Panel
	var dataPanel = new Ext.Panel({        
        region : 'west'
        ,layout : 'fit'
        ,width : 150   
    });   
 

    // [4] - Final User Interface
    new Ext.Viewport({
        layout: "border"
        ,items: [ 
            mapPanel
            ,dataPanel
        ]
    });                
});	//EOF Ext.onReady