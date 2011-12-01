var borderStyle = new OpenLayers.Style({fill:false, strokeColor:"#ff2400", strokeWidth: 2, strokeDashstyle: "longdash"});
var oblastsStyle = new OpenLayers.Style({fillColor:"#2a52be", fillOpacity: 0, strokeColor:"#2a52be", strokeWidth: 2, strokeDashstyle: "longdash"});
var rayonStyle = new OpenLayers.Style({fill:false,
                                       strokeColor: "#ff2400",
                                       strokeOpacity:0.5,
                                       strokeWidth: 1,
                                       label: "${getLabel}",
                                       fontFamily: "arial",
                                       fontSize: "10pt",
                                       fontWeight: "bold"
                                      },
                                      {context: {
                                                getLabel: function(feature) {
                                                    if (feature.layer.map.getZoom() >= 9) {
                                                        return feature.attributes.name;
                                                    }
                                                    else {
                                                        return '';
                                                    }
                                                 }
                                       }});

var borderStyleMap = new OpenLayers.StyleMap({
    "default": borderStyle
});

var oblastsStyleMap = new OpenLayers.StyleMap({
    "default": oblastsStyle
});

var rayonStyleMap = new OpenLayers.StyleMap({
    "default": rayonStyle
});

var selsovetStyle = new OpenLayers.Style({strokeWidth: 1, strokeColor: "#FF0000"}, {
    rules: [
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Фатьяновский'
            }),
            symbolizer: {
                fillColor: "#F6C5B4",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Любилковский'
            }),
            symbolizer: {
                fillColor: "#BB8386",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Карашский'
            }),
            symbolizer: {
                fillColor: "#7AC49F",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Итларский'
            }),
            symbolizer: {
                fillColor: "#3BB3C3",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Перовский'
            }),
            symbolizer: {
                fillColor: "#C4BE66",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Поречский'
            }),
            symbolizer: {
                fillColor: "#F6C491",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Угодичский'
            }),
            symbolizer: {
                fillColor: "#C0A0AF",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Шурскольский'
            }),
            symbolizer: {
                fillColor: "#F19ABD",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Никольский'
            }),
            symbolizer: {
                fillColor: "#EF9A85",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Дмитриановский'
            }),
            symbolizer: {
                fillColor: "#E77843",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Шугорьский'
            }),
            symbolizer: {
                fillColor: "#FFFCC7",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Татищевский'
            }),
            symbolizer: {
                fillColor: "#B6DDC8",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Марковский'
            }),
            symbolizer: {
                fillColor: "#E7775F",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Сулостский'
            }),
            symbolizer: {
                fillColor: "#BF9F62",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Новоникольский'
            }),
            symbolizer: {
                fillColor: "#EE9B69",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold",
                labelXOffset: "15"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Мосейцевский'
            }),
            symbolizer: {
                fillColor: "#3BB3C3",
                fillOpacity: 0.7,
                label: "${getLabel}",
                fontFamily: "arial",
                fontSize: "8pt",
                fontWeight: "bold",
                labelXOffset: "15",
                labelYOffset: "-10"
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Петровское'
            }),
            symbolizer: {
                fillColor: "#000000",
                fillOpacity: 0.3
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'Ростов'
            }),
            symbolizer: {
                fillColor: "#000000",
                fillOpacity: 0.3
            }
        }),
        new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'name',
                value: 'п. Семибратово'
            }),
            symbolizer: {
                fillColor: "#000000",
                fillOpacity: 0.3
            }
        })],
        context: {
            getLabel: function(feature) {
                if (feature.layer.map.getZoom() >= 10) {
                    return feature.attributes.name;
                }
                else {
                    return '';
                }
            }
        }});
        
var selsovetfillStyle = new OpenLayers.Style({fillColor: "#7fafd5"});

var selsovetStyleMap = new OpenLayers.StyleMap({
    "default": selsovetStyle,
    "select": selsovetfillStyle
    });
