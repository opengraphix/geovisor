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

var caic = new OpenLayers.Layer.WMS(
"CAIC",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:caic",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var cam = new OpenLayers.Layer.WMS(
"CAM",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:cam",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var cendis = new OpenLayers.Layer.WMS(
"CENDIS",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:cendis",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var cetis = new OpenLayers.Layer.WMS(
"CETIS",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:cetis",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var conalep = new OpenLayers.Layer.WMS(
"CONALEP",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:conalep",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var imss = new OpenLayers.Layer.WMS(
"IMSS",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:imss",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var issste = new OpenLayers.Layer.WMS(
"ISSSTE",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:issste",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var antro_seguro_2008 = new OpenLayers.Layer.WMS(
"Antro Seguro 2008",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:antro_seguro_2008",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var antro_seguro_2009 = new OpenLayers.Layer.WMS(
"Antro Seguro 2009",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:antro_seguro_2009",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var bodega_aurrera = new OpenLayers.Layer.WMS(
"Bodega Aurrera",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:bodega_aurrera",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var centros_culturales = new OpenLayers.Layer.WMS(
"Centros Culturales",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:centros_culturales",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var cines_y_teatros = new OpenLayers.Layer.WMS(
"Cines y Teatros",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:cines_y_teatros",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var clinicas_gdf = new OpenLayers.Layer.WMS(
"Clínicas GDF",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:clinicas_gdf",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var costco = new OpenLayers.Layer.WMS(
"Costco",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:costco",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var empresa_farmaceutica = new OpenLayers.Layer.WMS(
"Empresa Farmacéutica",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:empresa_farmaceutica",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var empresas_alto_riesgo = new OpenLayers.Layer.WMS(
"Empresa de Alto Riesgo",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:empresas_alto_riesgo",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var foros_deportivos = new OpenLayers.Layer.WMS(
"Foros Deportivos",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:foros_deportivos",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var foros_y_auditorios = new OpenLayers.Layer.WMS(
"Foros y Auditorios",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:foros_y_auditorios",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var gas_carburante = new OpenLayers.Layer.WMS(
"Gas Carburante",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:gas_carburante",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var gasolinerias = new OpenLayers.Layer.WMS(
"Gasolinerías",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:gasolinerias",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var guarderias_issste = new OpenLayers.Layer.WMS(
"Guarderías ISSSTE",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:guarderias_issste",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var iglesias = new OpenLayers.Layer.WMS(
"Iglesias",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:iglesias",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var mercados = new OpenLayers.Layer.WMS(
"Mercados",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:mercados",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var museos = new OpenLayers.Layer.WMS(
"Museos",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:museos",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var oficinas_gobierno = new OpenLayers.Layer.WMS(
"Oficinas de Gobierno",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:oficinas_gobierno",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var pre_escolar = new OpenLayers.Layer.WMS(
"Preescolar",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:pre_escolar",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var primarias = new OpenLayers.Layer.WMS(
"Primarias",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:primarias",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var secundarias = new OpenLayers.Layer.WMS(
"Secundarias",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:secundarias",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var soriana = new OpenLayers.Layer.WMS(
"Soriana",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:soriana",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var subestación_electrica = new OpenLayers.Layer.WMS(
"Subestación Eléctrica",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:subestación_electrica",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var superama = new OpenLayers.Layer.WMS(
"Superama",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:superama",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var tianguis = new OpenLayers.Layer.WMS(
"Tianguis",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:tianguis",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var tlalpan = new OpenLayers.Layer.WMS(
"Tlalpan",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:tlalpan",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var tren_ligero = new OpenLayers.Layer.WMS(
"Tren Ligero",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:tren_ligero",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var trolebus = new OpenLayers.Layer.WMS(
"Trolebus",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:trolebus",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var vialidad = new OpenLayers.Layer.WMS(
"Vialidad",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:vialidad",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var wal_mart = new OpenLayers.Layer.WMS(
"Wal Mart",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:wal_mart",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var zonas_industriales = new OpenLayers.Layer.WMS(
"Zonas Industriales",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:zonas_industriales",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var zonas_recreativas = new OpenLayers.Layer.WMS(
"Zonas Recreativas",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:zonas_recreativas",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var agebs_deshabitados = new OpenLayers.Layer.WMS(
"AGEBS Deshabitados",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:agebs_deshabitados",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var bancos = new OpenLayers.Layer.WMS(
"Bancos",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:bancos",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var carencia_por_densidad_de_poblacion = new OpenLayers.Layer.WMS(
"Carencia por Densidad De Poblacion",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:carencia_por_densidad_de_poblacion",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var cementerios = new OpenLayers.Layer.WMS(
"Cementerios",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:cementerios",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var climas = new OpenLayers.Layer.WMS(
"Climas",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:climas",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var construcciones_1n_ahi_en_riesgo = new OpenLayers.Layer.WMS(
"Construcciones 1n ahi en Riesgo",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:construcciones_1n_ahi_en_riesgo",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var construcciones_2y3n_ahi_en_riesgo = new OpenLayers.Layer.WMS(
"Construcciones 2y3n ahi en Riesgo",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:construcciones_2y3n_ahi_en_riesgo",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var centros_comerciales_1000 = new OpenLayers.Layer.WMS(
"Centros Comerciales 1000",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:centros_comerciales_1000",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var centros_culturales = new OpenLayers.Layer.WMS(
"Centros Culturales",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:centros_culturales",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var centros_recreativos = new OpenLayers.Layer.WMS(
"Centros Recreativos",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:centros_recreativos",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var degradacion_del_suelo = new OpenLayers.Layer.WMS(
"Degradacion del Suelo",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:degradacion_del_suelo",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var deportivos = new OpenLayers.Layer.WMS(
"Deportivos",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:deportivos",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var dinamica_demografica_2000_2005 = new OpenLayers.Layer.WMS(
"Dinámica demográfica 2000-2005",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:dinamica_demografica_2000_2005",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var escuelas_1000 = new OpenLayers.Layer.WMS(
"Escuelas 1000",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:escuelas_1000",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var estado_desarrollo_social_2005 = new OpenLayers.Layer.WMS(
"Estado de Desarrollo Social 2005",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:estado_desarrollo_social_2005",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var geomorfologia = new OpenLayers.Layer.WMS(
"Geomorfología",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:geomorfologia",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var geomorfología_lineal = new OpenLayers.Layer.WMS(
"Geomorfología lineal",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:geomorfología_lineal",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var iglesias09014 = new OpenLayers.Layer.WMS(
"Iglesias09014",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:iglesias09014",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var indice_de_densidad_de_diseccion = new OpenLayers.Layer.WMS(
"Índice de Densidad de Disección",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:indice_de_densidad_de_diseccion",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var lotes_baldios = new OpenLayers.Layer.WMS(
"Lotes Baldíos",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:lotes_baldios",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var lotes_ocupados = new OpenLayers.Layer.WMS(
"Lotes Ocupados",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:lotes_ocupados",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var mercados = new OpenLayers.Layer.WMS(
"Mercados",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:mercados",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var oficinas_municipales = new OpenLayers.Layer.WMS(
"Oficinas Municipales",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:oficinas_municipales",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var oficinas_gobierno09014 = new OpenLayers.Layer.WMS(
"Oficinas de Gobierno09014",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:oficinas_gobierno09014",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var peligros_hidrometeorologicos = new OpenLayers.Layer.WMS(
"Peligros Hidrometeorólogicos",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:peligros_hidrometeorologicos",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var peligros_vulcanismo = new OpenLayers.Layer.WMS(
"Peligros Vulcanismo",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:peligros_vulcanismo",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var plazas_monumentos = new OpenLayers.Layer.WMS(
"Plazas y Monumentos",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:plazas_monumentos",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var puentes = new OpenLayers.Layer.WMS(
"Puentes",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:puentes",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var servicios_medicos = new OpenLayers.Layer.WMS(
"Servicios Médicos",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:servicios_medicos",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var sitios_visitados = new OpenLayers.Layer.WMS(
"Sitios Visitados",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:sitios_visitados",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var traza_urbana_tlalpan = new OpenLayers.Layer.WMS(
"Traza Urbana Tlalpan",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:traza_urbana_tlalpan",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var agebs_2005 = new OpenLayers.Layer.WMS(
"AGEBS 2005",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:agebs_2005",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var densidad_de_poblacion_por_ageb_2005 = new OpenLayers.Layer.WMS(
"Densidad de Población por AGEB 2005",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:densidad_de_poblacion_por_ageb_2005",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var distribucion_poblacion_por_ageb_2005 = new OpenLayers.Layer.WMS(
"Distribucion de Poblacion por AGEB 2005",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:distribucion_poblacion_por_ageb_2005",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var encharcamientos = new OpenLayers.Layer.WMS(
"Encharcamientos",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:encharcamientos",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var estaciones_meteorologicas_precipitacion = new OpenLayers.Layer.WMS(
"Estaciones Meteorológicas de Precipitación",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:estaciones_meteorologicas_precipitacion",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var estaciones_meteorologicas_temperatura = new OpenLayers.Layer.WMS(
"Estaciones Meteorologicas de Temperatura",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:estaciones_meteorologicas_temperatura",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var estaciones_meteorologicas_tormentas_electricas = new OpenLayers.Layer.WMS(
"Estaciones Meteorologicas de Tormentas Eléctricas",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:estaciones_meteorologicas_tormentas_electricas",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var geologia = new OpenLayers.Layer.WMS(
"Geología",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:geologia",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var grupos_de_suelo = new OpenLayers.Layer.WMS(
"Grupos de Suelo",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:grupos_de_suelo",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var hidr_annotation_texto = new OpenLayers.Layer.WMS(
"HIDR Annotation Texto",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:hidr_annotation_texto",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var hidr_arc = new OpenLayers.Layer.WMS(
"HIDR Arc",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:hidr_arc",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var hidr_polygon = new OpenLayers.Layer.WMS(
"HIDR_polygon",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:hidr_polygon",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var isocurvas_ne = new OpenLayers.Layer.WMS(
"Isocurvas_ne",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:isocurvas_ne",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var isocurvas_de_inundaciones = new OpenLayers.Layer.WMS(
"Isocurvas de Inundaciones",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:isocurvas_de_inundaciones",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var isocurvas_de_temperatura_minima = new OpenLayers.Layer.WMS(
"Isocurvas de Temperatura Mínima",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:isocurvas_de_temperatura_minima",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var isocurvas_granizadas = new OpenLayers.Layer.WMS(
"Isocurvas Granizadas",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:isocurvas_granizadas",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var isocurvas_nivel_agua_freatica = new OpenLayers.Layer.WMS(
"Isocurvas de Nivel de Agua Freática",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:isocurvas_nivel_agua_freatica",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var isocurvas_temperatura_maxima = new OpenLayers.Layer.WMS(
"Isocurvas de Temperatura Máxima",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:isocurvas_temperatura_maxima",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var isocurvas_temporada_temp_alta = new OpenLayers.Layer.WMS(
"Isocurvas de Temporada de Temperatura Alta",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:isocurvas_temporada_temp_alta",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var isocurvas_tormentas = new OpenLayers.Layer.WMS(
"Isocurvas de Tormentas",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:isocurvas_tormentas",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var isoyetas = new OpenLayers.Layer.WMS(
"Isoyetas",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:isoyetas",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var localidades_3°c = new OpenLayers.Layer.WMS(
"Localidades 3°c",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:localidades_3°c",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var localidades_mas_2500_habs = new OpenLayers.Layer.WMS(
"Localidades de más de 2500 Habitantes",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:localidades_mas_2500_habs",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var marginacion_por_ageb_2005 = new OpenLayers.Layer.WMS(
"Marginación por AGEB 2005",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:marginacion_por_ageb_2005",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var peligros_sismicidad = new OpenLayers.Layer.WMS(
"Peligros sismicidad",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:peligros_sismicidad",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var pendientes = new OpenLayers.Layer.WMS(
"Pendientes",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:pendientes",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var poblacion_por_localidad_2010 = new OpenLayers.Layer.WMS(
"Población por Localidad 2010",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:poblacion_por_localidad_2010",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var precipitacion_maxima_24h_pol = new OpenLayers.Layer.WMS(
"Precipitación Máxima 24h Pol",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:precipitacion_maxima_24h_pol",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var precipitacion_media_anual_pol = new OpenLayers.Layer.WMS(
"Precipitación Media Anual Pol",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:precipitacion_media_anual_pol",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var profundidad_de_diseccion = new OpenLayers.Layer.WMS(
"Profundidad de Disección",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:profundidad_de_diseccion",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var subcuencas = new OpenLayers.Layer.WMS(
"Subcuencas",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:subcuencas",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var temperatura_maxima_pol = new OpenLayers.Layer.WMS(
"Temperatura Máxima Pol",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:temperatura_maxima_pol",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var zona_de_desborde = new OpenLayers.Layer.WMS(
"Zona de Desborde",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:zona_de_desborde",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var peligros_remocionmasa = new OpenLayers.Layer.WMS(
"Peligros Remoción de Masa",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:peligros_remocionmasa",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var curvas_de_nivel = new OpenLayers.Layer.WMS(
"Curvas de Nivel",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:curvas_de_nivel",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var drenaje = new OpenLayers.Layer.WMS(
"Drenaje",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:drenaje",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var red_hidrografica = new OpenLayers.Layer.WMS(
"Red Hidrográfica",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:red_hidrografica",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var Tlalpan = new OpenLayers.Layer.WMS(
"Tlalpan",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:Tlalpan",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

var vialidad = new OpenLayers.Layer.WMS(
"Vialidad",
"http://132.248.26.87:8080/geoserver/wms", {
layers: "topp:vialidad",
transparent: "true",
format: "image/png" }, {isBaseLayer: false, visibility: false}
);

  
    
   /* Pinta las capas del mapa*/
    map.addLayers([gpm,gsm,gsat,glim,caic,cam,cendis,cetis,conalep,imss,issste,antro_seguro_2008,antro_seguro_2009,bodega_aurrera,centros_culturales,cines_y_teatros,clinicas_gdf,costco,empresa_farmaceutica,empresas_alto_riesgo,foros_deportivos,foros_y_auditorios,gas_carburante,gasolinerias,guarderias_issste,iglesias,mercados,museos,oficinas_gobierno,pre_escolar,primarias,secundarias,soriana,subestación_electrica,superama,tianguis,tlalpan,tren_ligero,trolebus,vialidad,wal_mart,zonas_industriales,zonas_recreativas,agebs_deshabitados,bancos,carencia_por_densidad_de_poblacion,cementerios,climas,construcciones_1n_ahi_en_riesgo,construcciones_2y3n_ahi_en_riesgo,centros_comerciales_1000,centros_culturales,centros_recreativos,degradacion_del_suelo,deportivos,dinamica_demografica_2000_2005,escuelas_1000,estado_desarrollo_social_2005,geomorfologia,geomorfología_lineal,iglesias09014,indice_de_densidad_de_diseccion,lotes_baldios,lotes_ocupados,mercados,oficinas_municipales,oficinas_gobierno09014,peligros_hidrometeorologicos,peligros_vulcanismo,plazas_monumentos,puentes,servicios_medicos,sitios_visitados,traza_urbana_tlalpan,agebs_2005,densidad_de_poblacion_por_ageb_2005,distribucion_poblacion_por_ageb_2005,encharcamientos,estaciones_meteorologicas_precipitacion,estaciones_meteorologicas_temperatura,estaciones_meteorologicas_tormentas_electricas,geologia,grupos_de_suelo,hidr_annotation_texto,hidr_arc,hidr_polygon,isocurvas_ne,isocurvas_de_inundaciones,isocurvas_de_temperatura_minima,isocurvas_granizadas,isocurvas_nivel_agua_freatica,isocurvas_temperatura_maxima,isocurvas_temporada_temp_alta,isocurvas_tormentas,isoyetas,localidades_3°c,localidades_mas_2500_habs,marginacion_por_ageb_2005,peligros_sismicidad,pendientes,poblacion_por_localidad_2010,precipitacion_maxima_24h_pol,precipitacion_media_anual_pol,profundidad_de_diseccion,subcuencas,temperatura_maxima_pol,zona_de_desborde,peligros_remocionmasa,curvas_de_nivel,drenaje,red_hidrografica,Tlalpan,vialidad,vector]);

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
       //tbar: toolbarItems,
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
        width: 960,
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