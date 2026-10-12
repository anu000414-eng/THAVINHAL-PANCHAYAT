var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GEOLOGY_2 = new ol.format.GeoJSON();
var features_GEOLOGY_2 = format_GEOLOGY_2.readFeatures(json_GEOLOGY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_2.addFeatures(features_GEOLOGY_2);
var lyr_GEOLOGY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_2, 
                style: style_GEOLOGY_2,
                popuplayertitle: 'GEOLOGY',
                interactive: false,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_2_0.png" /> Alkaline rocks<br />\
    <img src="styles/legend/GEOLOGY_2_1.png" /> High grade metasedimentary rocks<br />\
    <img src="styles/legend/GEOLOGY_2_2.png" /> Penisular Gneissic Complex<br />\
    <img src="styles/legend/GEOLOGY_2_3.png" /> <br />' });
var format_THAVINHALPANCHAYAT_3 = new ol.format.GeoJSON();
var features_THAVINHALPANCHAYAT_3 = format_THAVINHALPANCHAYAT_3.readFeatures(json_THAVINHALPANCHAYAT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_THAVINHALPANCHAYAT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_THAVINHALPANCHAYAT_3.addFeatures(features_THAVINHALPANCHAYAT_3);
var lyr_THAVINHALPANCHAYAT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_THAVINHALPANCHAYAT_3, 
                style: style_THAVINHALPANCHAYAT_3,
                popuplayertitle: 'THAVINHAL PANCHAYAT',
                interactive: false,
    title: 'THAVINHAL PANCHAYAT<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_0.png" /> Aalattil<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_1.png" /> Ambalakkolli<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_2.png" /> Chulli<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_3.png" /> Edathana<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_4.png" /> Idikkara<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_5.png" /> Irumanathoor<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_6.png" /> Kaithakolli<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_7.png" /> Karachal<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_8.png" /> Kattimoola<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_9.png" /> Kolangodu<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_10.png" /> Muthirery<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_11.png" /> Periya<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_12.png" /> Porur<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_13.png" /> Puthiyidam<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_14.png" /> Puthoor<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_15.png" /> Thalappuzha<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_16.png" /> Thavirhal<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_17.png" /> Thazheperiya<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_18.png" /> Valad<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_19.png" /> Vallithoud<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_20.png" /> Varayal<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_21.png" /> Vattoli<br />\
    <img src="styles/legend/THAVINHALPANCHAYAT_3_22.png" /> <br />' });
var format_SHP_4 = new ol.format.GeoJSON();
var features_SHP_4 = format_SHP_4.readFeatures(json_SHP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP_4.addFeatures(features_SHP_4);
var lyr_SHP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHP_4, 
                style: style_SHP_4,
                popuplayertitle: 'SHP',
                interactive: false,
                title: '<img src="styles/legend/SHP_4.png" /> SHP'
            });
var format_GEOMORPHOLOGY_5 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_5 = format_GEOMORPHOLOGY_5.readFeatures(json_GEOMORPHOLOGY_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_5.addFeatures(features_GEOMORPHOLOGY_5);
var lyr_GEOMORPHOLOGY_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_5, 
                style: style_GEOMORPHOLOGY_5,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: false,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_5_0.png" /> Denudational Structural Hills<br />\
    <img src="styles/legend/GEOMORPHOLOGY_5_1.png" /> Linear ridge(Piedmont Zone)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_5_2.png" /> Piedmont Zone<br />\
    <img src="styles/legend/GEOMORPHOLOGY_5_3.png" /> Residual Mount(Pediment)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_5_4.png" /> Residual Mount(Upper Plateau)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_5_5.png" /> Upper Plateau (Lateritic)- Dissected<br />\
    <img src="styles/legend/GEOMORPHOLOGY_5_6.png" /> Valley Fill<br />\
    <img src="styles/legend/GEOMORPHOLOGY_5_7.png" /> Water Body<br />\
    <img src="styles/legend/GEOMORPHOLOGY_5_8.png" /> <br />' });
var format_DRAINAGE_6 = new ol.format.GeoJSON();
var features_DRAINAGE_6 = format_DRAINAGE_6.readFeatures(json_DRAINAGE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINAGE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGE_6.addFeatures(features_DRAINAGE_6);
var lyr_DRAINAGE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGE_6, 
                style: style_DRAINAGE_6,
                popuplayertitle: 'DRAINAGE',
                interactive: false,
    title: 'DRAINAGE<br />\
    <img src="styles/legend/DRAINAGE_6_0.png" /> 1<br />\
    <img src="styles/legend/DRAINAGE_6_1.png" /> 2<br />\
    <img src="styles/legend/DRAINAGE_6_2.png" /> 3<br />\
    <img src="styles/legend/DRAINAGE_6_3.png" /> 4<br />\
    <img src="styles/legend/DRAINAGE_6_4.png" /> 5<br />\
    <img src="styles/legend/DRAINAGE_6_5.png" /> 0<br />' });
var format_ROAD_7 = new ol.format.GeoJSON();
var features_ROAD_7 = format_ROAD_7.readFeatures(json_ROAD_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_7.addFeatures(features_ROAD_7);
var lyr_ROAD_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_7, 
                style: style_ROAD_7,
                popuplayertitle: 'ROAD',
                interactive: false,
                title: '<img src="styles/legend/ROAD_7.png" /> ROAD'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_GEOLOGY_2.setVisible(true);lyr_THAVINHALPANCHAYAT_3.setVisible(true);lyr_SHP_4.setVisible(true);lyr_GEOMORPHOLOGY_5.setVisible(true);lyr_DRAINAGE_6.setVisible(true);lyr_ROAD_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_GEOLOGY_2,lyr_THAVINHALPANCHAYAT_3,lyr_SHP_4,lyr_GEOMORPHOLOGY_5,lyr_DRAINAGE_6,lyr_ROAD_7];
lyr_GEOLOGY_2.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_THAVINHALPANCHAYAT_3.set('fieldAliases', {'admin_leve': 'admin_leve', 'boundary': 'boundary', 'local_auth': 'local_auth', 'name': 'name', 'type': 'type', 'ward': 'ward', 'id': 'id', });
lyr_SHP_4.set('fieldAliases', {'id': 'id', });
lyr_GEOMORPHOLOGY_5.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_DRAINAGE_6.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_ROAD_7.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_GEOLOGY_2.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_THAVINHALPANCHAYAT_3.set('fieldImages', {'admin_leve': 'TextEdit', 'boundary': 'TextEdit', 'local_auth': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'ward': 'TextEdit', 'id': 'TextEdit', });
lyr_SHP_4.set('fieldImages', {'id': 'TextEdit', });
lyr_GEOMORPHOLOGY_5.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_DRAINAGE_6.set('fieldImages', {'ORDER1': 'Range', });
lyr_ROAD_7.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_GEOLOGY_2.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_THAVINHALPANCHAYAT_3.set('fieldLabels', {'admin_leve': 'no label', 'boundary': 'no label', 'local_auth': 'no label', 'name': 'no label', 'type': 'no label', 'ward': 'no label', 'id': 'no label', });
lyr_SHP_4.set('fieldLabels', {'id': 'no label', });
lyr_GEOMORPHOLOGY_5.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_DRAINAGE_6.set('fieldLabels', {'ORDER1': 'no label', });
lyr_ROAD_7.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_ROAD_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});