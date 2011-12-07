/**
 * Copyright (c) 2008-2010 The Open Source Geospatial Foundation
 * 
 * Published under the BSD license.
 * See http://svn.geoext.org/core/trunk/geoext/license.txt for the full text
 * of the license.
 */

/** api: example[tree]
 *  Tree Nodes
 *  ----------
 *  Create all kinds of tree nodes.
 */

var mapPanel, tree;
Ext.onReady(function() {
    // create a map panel with some layers that we will show in our layer tree
    // below.
    mapPanel = new GeoExt.MapPanel({
	title: "Mapa",        
	border: true,
        region: "center",
        // we do not want all overlays, to try the OverlayLayerContainer
        map: new OpenLayers.Map({allOverlays: false}),
        center: [-99.183056, 19.283056],
        zoom: 10,
        layers: [

	new OpenLayers.Layer.WMS("Open Layers",
                "http://vmap0.tiles.osgeo.org/wms/vmap0", {
                    layers: "basic"
                }, {
                    buffer: 0,
                    visibility: false
                }
            ),

            new OpenLayers.Layer.WMS("Traza Urbana Tlalpan",
                "http://132.248.26.87:8080/geoserver/wms", {
                    layers: "topp:traza_urbana_tlalpan",
		    transparent: true,
        	    format: "image/png" 
                }, {
		    isBaseLayer: false,
		    visibility: false,
                    buffer: 0
                }
            ),
            new OpenLayers.Layer.WMS("Water",
                "http://demo.opengeo.org/geoserver/wms", {
                    layers: "topp:tasmania_water_bodies",
                    transparent: true,
                    format: "image/gif"
                }, {
                    isBaseLayer: false,
                    buffer: 0
                }
            ),
            new OpenLayers.Layer.WMS("Cities",
                "http://demo.opengeo.org/geoserver/wms", {
                    layers: "topp:tasmania_cities",
                    transparent: true,
                    format: "image/gif"
                }, {
                    isBaseLayer: false,
                    buffer: 0
                }
            ),
            new OpenLayers.Layer.WMS("Tasmania Roads",
                "http://demo.opengeo.org/geoserver/wms", {
                    layers: "topp:tasmania_roads",
                    transparent: true,
                    format: "image/gif"
                }, {
                    isBaseLayer: false,
                    buffer: 0
                }
            ),
            // create a group layer (with several layers in the "layers" param)
            // to show how the LayerParamLoader works
            // clasificacion: cartografia basica, peligros, vulnerabilidad, riesgos
            new OpenLayers.Layer.WMS("Peligros",
                "http://demo.opengeo.org/geoserver/wms", {
                    layers: [
                        "topp:tasmania_state_boundaries",
                        "topp:tasmania_water_bodies",
                        "topp:tasmania_cities",
                        "topp:tasmania_roads"
                    ],
                    transparent: true,
                    format: "image/gif"
                }, {
                    isBaseLayer: false,
                    buffer: 0,
                    // exclude this layer from layer container nodes
                    displayInLayerSwitcher: false,
                    visibility: false
                }
            ),

	 new OpenLayers.Layer.WMS("Vulnerabilidades",
                "http://demo.opengeo.org/geoserver/wms", {
                    layers: [
                        "topp:tasmania_state_boundaries",
                        "topp:tasmania_water_bodies",
                        "topp:tasmania_cities",
                        "topp:tasmania_roads"
                    ],
                    transparent: true,
                    format: "image/gif"
                }, {
                    isBaseLayer: false,
                    buffer: 0,
                    // exclude this layer from layer container nodes
                    displayInLayerSwitcher: false,
                    visibility: false
                }
            ),

            new OpenLayers.Layer.WMS("Riesgos",
                "http://demo.opengeo.org/geoserver/wms", {
                    layers: [
                        "topp:tasmania_state_boundaries",
                        "topp:tasmania_water_bodies",
                        "topp:tasmania_cities",
                        "topp:tasmania_roads"
                    ],
                    transparent: true,
                    format: "image/gif"
                }, {
                    isBaseLayer: false,
                    buffer: 0,
                    // exclude this layer from layer container nodes
                    displayInLayerSwitcher: false,
                    visibility: false
                }
            )
        ]
    });

    // create our own layer node UI class, using the TreeNodeUIEventMixin
    var LayerNodeUI = Ext.extend(GeoExt.tree.LayerNodeUI, new GeoExt.tree.TreeNodeUIEventMixin());
        
    // using OpenLayers.Format.JSON to create a nice formatted string of the
    // configuration for editing it in the UI
    var treeConfig = new OpenLayers.Format.JSON().write([{
        nodeType: "gx_baselayercontainer"
    }, {
        nodeType: "gx_overlaylayercontainer",
        expanded: true,
        // render the nodes inside this container with a radio button,
        // and assign them the group "foo".
        loader: {
            baseAttrs: {
                radioGroup: "foo",
                uiProvider: "layernodeui"
            }
        }
    }, {
        nodeType: "gx_layer",
        layer: "Peligros",
        isLeaf: false,
        // create subnodes for the layers in the LAYERS param. If we assign
        // a loader to a LayerNode and do not provide a loader class, a
        // LayerParamLoader will be assumed.
        loader: {
            param: "LAYERS"
        }
    }, {
        nodeType: "gx_layer",
        layer: "Vulnerabilidades",
        isLeaf: false,
        // create subnodes for the layers in the LAYERS param. If we assign
        // a loader to a LayerNode and do not provide a loader class, a
        // LayerParamLoader will be assumed.
        loader: {
            param: "LAYERS"
        }
    },	{
        nodeType: "gx_layer",
        layer: "Riesgos",
        isLeaf: false,
        // create subnodes for the layers in the LAYERS param. If we assign
        // a loader to a LayerNode and do not provide a loader class, a
        // LayerParamLoader will be assumed.
        loader: {
            param: "LAYERS"
        }
    }], true);

    // create the tree with the configuration from above
    tree = new Ext.tree.TreePanel({
        border: true,
        region: "west",
        title: "Capas",
        width: 200,
        split: true,
        collapsible: true,
        collapseMode: "mini",
        autoScroll: true,
        plugins: [
            new GeoExt.plugins.TreeNodeRadioButton({
                listeners: {
                    "radiochange": function(node) {
                        alert(node.text + " la capa ahora esta activa.");
                    }
                }
            })
        ],
        loader: new Ext.tree.TreeLoader({
            // applyLoader has to be set to false to not interfer with loaders
            // of nodes further down the tree hierarchy
            applyLoader: false,
            uiProviders: {
                "layernodeui": LayerNodeUI
            }
        }),
        root: {
            nodeType: "async",
            // the children property of an Ext.tree.AsyncTreeNode is used to
            // provide an initial set of layer nodes. We use the treeConfig
            // from above, that we created with OpenLayers.Format.JSON.write.
            children: Ext.decode(treeConfig)
        },
        listeners: {
            "radiochange": function(node){
                alert(node.layer.name + " la capa ahora está activa.");
            }
        },
        rootVisible: false,
        lines: false,
        
    });

   
   // panel derecho 
    new Ext.Viewport({
        layout: "fit",
        hideBorders: true,
        items: {
            layout: "border",
            deferredRender: false,
            items: [mapPanel, tree, {
                contentEl: "desc",
                region: "east",
                bodyStyle: {"padding": "5px"},
                collapsible: true,
                collapseMode: "mini",
                split: true,
                width: 200,
                title: "Description"
            }]
        }
    });
});