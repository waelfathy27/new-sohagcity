ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32636").setExtent([364612.356436, 2923483.691967, 369832.696060, 2926095.874246]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_landuse_1 = new ol.format.GeoJSON();
var features_landuse_1 = format_landuse_1.readFeatures(json_landuse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_landuse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_1.addFeatures(features_landuse_1);
var lyr_landuse_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_landuse_1, 
                style: style_landuse_1,
                interactive: false,
    title: 'landuse<br />\
    <img src="styles/legend/landuse_1_0.png" /> إبنى بيتك 1<br />\
    <img src="styles/legend/landuse_1_1.png" /> إبنى بيتك 2<br />\
    <img src="styles/legend/landuse_1_2.png" /> إبنى بيتك 3<br />\
    <img src="styles/legend/landuse_1_3.png" /> إسكان العمارات<br />\
    <img src="styles/legend/landuse_1_4.png" /> الإسكان الإجتماعي 1<br />\
    <img src="styles/legend/landuse_1_5.png" /> الإسكان الإجتماعي 2<br />\
    <img src="styles/legend/landuse_1_6.png" /> الإسكان الإجتماعي 3<br />\
    <img src="styles/legend/landuse_1_7.png" /> الإسكان الإجتماعي 4<br />\
    <img src="styles/legend/landuse_1_8.png" /> الإسكان العائلي 1<br />\
    <img src="styles/legend/landuse_1_9.png" /> الإسكان العائلي 2<br />\
    <img src="styles/legend/landuse_1_10.png" /> الإسكان القومي و الإجتماع<br />\
    <img src="styles/legend/landuse_1_11.png" /> الإسكان المتوسط<br />\
    <img src="styles/legend/landuse_1_12.png" /> الإسكان فوق المتوسط<br />\
    <img src="styles/legend/landuse_1_13.png" /> الحى 1<br />\
    <img src="styles/legend/landuse_1_14.png" /> الحى 2<br />\
    <img src="styles/legend/landuse_1_15.png" /> الحى 3<br />\
    <img src="styles/legend/landuse_1_16.png" /> الحى 4<br />\
    <img src="styles/legend/landuse_1_17.png" /> الحى 5<br />\
    <img src="styles/legend/landuse_1_18.png" /> الحى 6<br />\
    <img src="styles/legend/landuse_1_19.png" /> الشريط المتميز<br />\
    <img src="styles/legend/landuse_1_20.png" /> المجاورة 10<br />\
    <img src="styles/legend/landuse_1_21.png" /> المجاورة 2<br />\
    <img src="styles/legend/landuse_1_22.png" /> المجاورة 3<br />\
    <img src="styles/legend/landuse_1_23.png" /> المجاورة 6<br />\
    <img src="styles/legend/landuse_1_24.png" /> المجاورة 7<br />\
    <img src="styles/legend/landuse_1_25.png" /> المجاورة 8<br />\
    <img src="styles/legend/landuse_1_26.png" /> المجاورة 9<br />\
    <img src="styles/legend/landuse_1_27.png" /> المنطقة الصناعية<br />\
    <img src="styles/legend/landuse_1_28.png" /> مركز خدمات<br />\
    <img src="styles/legend/landuse_1_29.png" /> منطقة 138 عماره<br />\
    <img src="styles/legend/landuse_1_30.png" /> منطقة 41 عماره<br />\
    <img src="styles/legend/landuse_1_31.png" /> منطقة أ<br />\
    <img src="styles/legend/landuse_1_32.png" /> منطقة البنفسج<br />\
    <img src="styles/legend/landuse_1_33.png" /> منطقة الزهور<br />\
    <img src="styles/legend/landuse_1_34.png" /> منطقة الفل<br />\
    <img src="styles/legend/landuse_1_35.png" /> منطقة المخازن<br />\
    <img src="styles/legend/landuse_1_36.png" /> منطقة النخيل<br />\
    <img src="styles/legend/landuse_1_37.png" /> منطقة النرجس<br />\
    <img src="styles/legend/landuse_1_38.png" /> منطقة الياسمين<br />\
    <img src="styles/legend/landuse_1_39.png" /> منطقة ب<br />\
    <img src="styles/legend/landuse_1_40.png" /> منطقة ج<br />\
    <img src="styles/legend/landuse_1_41.png" /> منطقة خدمات<br />\
    <img src="styles/legend/landuse_1_42.png" /> منطقة د<br />\
    <img src="styles/legend/landuse_1_43.png" /> منطقة سلسبيل<br />\
    <img src="styles/legend/landuse_1_44.png" /> منطقة صغار المستثمرين<br />\
    <img src="styles/legend/landuse_1_45.png" /> منطقة هـ<br />\
    <img src="styles/legend/landuse_1_46.png" /> منطقة و<br />\
    <img src="styles/legend/landuse_1_47.png" /> <br />'
        });
var format_roads_2 = new ol.format.GeoJSON();
var features_roads_2 = format_roads_2.readFeatures(json_roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_2.addFeatures(features_roads_2);
var lyr_roads_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roads_2, 
                style: style_roads_2,
                interactive: false,
                title: '<img src="styles/legend/roads_2.png" /> roads'
            });
var format_e_3 = new ol.format.GeoJSON();
var features_e_3 = format_e_3.readFeatures(json_e_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_e_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_e_3.addFeatures(features_e_3);
var lyr_e_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_e_3, 
                style: style_e_3,
                interactive: false,
                title: '<img src="styles/legend/e_3.png" /> e'
            });
var format_Export_Output_6_4 = new ol.format.GeoJSON();
var features_Export_Output_6_4 = format_Export_Output_6_4.readFeatures(json_Export_Output_6_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_Export_Output_6_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_6_4.addFeatures(features_Export_Output_6_4);
var lyr_Export_Output_6_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_6_4, 
                style: style_Export_Output_6_4,
                interactive: false,
                title: '<img src="styles/legend/Export_Output_6_4.png" /> Export_Output_6'
            });
var format_Export_Output_5_5 = new ol.format.GeoJSON();
var features_Export_Output_5_5 = format_Export_Output_5_5.readFeatures(json_Export_Output_5_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_Export_Output_5_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_5_5.addFeatures(features_Export_Output_5_5);
var lyr_Export_Output_5_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_5_5, 
                style: style_Export_Output_5_5,
                interactive: false,
                title: '<img src="styles/legend/Export_Output_5_5.png" /> Export_Output_5'
            });
var format_Export_Output_4_6 = new ol.format.GeoJSON();
var features_Export_Output_4_6 = format_Export_Output_4_6.readFeatures(json_Export_Output_4_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_Export_Output_4_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_4_6.addFeatures(features_Export_Output_4_6);
var lyr_Export_Output_4_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_4_6, 
                style: style_Export_Output_4_6,
                interactive: false,
                title: '<img src="styles/legend/Export_Output_4_6.png" /> Export_Output_4'
            });
var format_Export_Output_3_7 = new ol.format.GeoJSON();
var features_Export_Output_3_7 = format_Export_Output_3_7.readFeatures(json_Export_Output_3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_Export_Output_3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_3_7.addFeatures(features_Export_Output_3_7);
var lyr_Export_Output_3_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_3_7, 
                style: style_Export_Output_3_7,
                interactive: false,
                title: '<img src="styles/legend/Export_Output_3_7.png" /> Export_Output_3'
            });
var format_Export_Output_8 = new ol.format.GeoJSON();
var features_Export_Output_8 = format_Export_Output_8.readFeatures(json_Export_Output_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_Export_Output_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_8.addFeatures(features_Export_Output_8);
var lyr_Export_Output_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_8, 
                style: style_Export_Output_8,
                interactive: false,
                title: '<img src="styles/legend/Export_Output_8.png" /> Export_Output'
            });
var format_Export_Output_3_9 = new ol.format.GeoJSON();
var features_Export_Output_3_9 = format_Export_Output_3_9.readFeatures(json_Export_Output_3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_Export_Output_3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_3_9.addFeatures(features_Export_Output_3_9);
var lyr_Export_Output_3_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_3_9, 
                style: style_Export_Output_3_9,
                interactive: false,
                title: '<img src="styles/legend/Export_Output_3_9.png" /> Export_Output_3'
            });
var format_natural_10 = new ol.format.GeoJSON();
var features_natural_10 = format_natural_10.readFeatures(json_natural_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_natural_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_natural_10.addFeatures(features_natural_10);
var lyr_natural_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_natural_10, 
                style: style_natural_10,
                interactive: false,
                title: '<img src="styles/legend/natural_10.png" /> natural'
            });
var format_Export_Output_6_11 = new ol.format.GeoJSON();
var features_Export_Output_6_11 = format_Export_Output_6_11.readFeatures(json_Export_Output_6_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_Export_Output_6_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_6_11.addFeatures(features_Export_Output_6_11);
var lyr_Export_Output_6_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_6_11, 
                style: style_Export_Output_6_11,
                interactive: false,
                title: '<img src="styles/legend/Export_Output_6_11.png" /> Export_Output_6'
            });
var format_Export_Output_12 = new ol.format.GeoJSON();
var features_Export_Output_12 = format_Export_Output_12.readFeatures(json_Export_Output_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_Export_Output_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_12.addFeatures(features_Export_Output_12);
var lyr_Export_Output_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_12, 
                style: style_Export_Output_12,
                interactive: false,
                title: '<img src="styles/legend/Export_Output_12.png" /> Export_Output'
            });
var format_Export_Output_13 = new ol.format.GeoJSON();
var features_Export_Output_13 = format_Export_Output_13.readFeatures(json_Export_Output_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_Export_Output_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_13.addFeatures(features_Export_Output_13);
var lyr_Export_Output_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_13, 
                style: style_Export_Output_13,
                interactive: false,
                title: '<img src="styles/legend/Export_Output_13.png" /> Export_Output'
            });

lyr_OSMStandard_0.setVisible(true);lyr_landuse_1.setVisible(true);lyr_roads_2.setVisible(true);lyr_e_3.setVisible(true);lyr_Export_Output_6_4.setVisible(true);lyr_Export_Output_5_5.setVisible(true);lyr_Export_Output_4_6.setVisible(true);lyr_Export_Output_3_7.setVisible(true);lyr_Export_Output_8.setVisible(true);lyr_Export_Output_3_9.setVisible(true);lyr_natural_10.setVisible(true);lyr_Export_Output_6_11.setVisible(true);lyr_Export_Output_12.setVisible(true);lyr_Export_Output_13.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_landuse_1,lyr_roads_2,lyr_e_3,lyr_Export_Output_6_4,lyr_Export_Output_5_5,lyr_Export_Output_4_6,lyr_Export_Output_3_7,lyr_Export_Output_8,lyr_Export_Output_3_9,lyr_natural_10,lyr_Export_Output_6_11,lyr_Export_Output_12,lyr_Export_Output_13];
lyr_landuse_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_roads_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'maxspeed': 'maxspeed', });
lyr_e_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'hh': 'hh', 'pp': 'pp', 'pph': 'pph', 'high': 'high', 'OBJECTID_2': 'OBJECTID_2', 'p': 'p', 'Longitude': 'Longitude', 'latitude': 'latitude', 'Use_of_the': 'Use_of_the', 'Z': 'Z', 'Number_of': 'Number_of', 'Floors': 'Floors', 'build_syst': 'build_syst', 'Field9': 'Field9', 'Field10': 'Field10', 'Field11': 'Field11', 'Field12': 'Field12', 'Field13': 'Field13', 'Field14': 'Field14', 'Field15': 'Field15', 'Field16': 'Field16', 'Field17': 'Field17', 'Field18': 'Field18', 'Field19': 'Field19', 'Field20': 'Field20', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'H': 'H', });
lyr_Export_Output_6_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'smpology': 'smpology', 'z': 'z', 'FID_': 'FID_', 'OBJECTID_1': 'OBJECTID_1', 'p': 'p', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Use_the_bu': 'Use_the_bu', 'Z_1': 'Z_1', 'Apartments': 'Apartments', 'floors': 'floors', 'build_syst': 'build_syst', 'Field9': 'Field9', });
lyr_Export_Output_5_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'romaprojec': 'romaprojec', 'FID_1': 'FID_1', 'OBJECTID_1': 'OBJECTID_1', 'p': 'p', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Use_of_the': 'Use_of_the', 'Z': 'Z', 'Number_of': 'Number_of', 'Floors': 'Floors', 'Build_syst': 'Build_syst', '3dmariam': '3dmariam', });
lyr_Export_Output_4_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'hh': 'hh', 'pp': 'pp', 'pph': 'pph', 'high': 'high', 'OBJECTID_1': 'OBJECTID_1', 'p': 'p', 'Longitude': 'Longitude', 'latitude': 'latitude', 'Use_of_the': 'Use_of_the', 'Z': 'Z', 'Number_of': 'Number_of', 'Floors': 'Floors', 'build_syst': 'build_syst', 'Field9': 'Field9', 'Field10': 'Field10', 'Field11': 'Field11', 'Field12': 'Field12', 'Field13': 'Field13', 'Field14': 'Field14', 'Field15': 'Field15', 'Field16': 'Field16', 'Field17': 'Field17', 'Field18': 'Field18', 'Field19': 'Field19', 'Field20': 'Field20', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Export_Output_3_7.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'p': 'p', 'Z': 'Z', 'OBJECTID': 'OBJECTID', 'p_1': 'p_1', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Use_of_the': 'Use_of_the', 'z_1': 'z_1', 'Number_of': 'Number_of', 'Floors': 'Floors', 'Build_syst': 'Build_syst', 'Field9': 'Field9', 'Field10': 'Field10', 'Field11': 'Field11', 'Field12': 'Field12', 'Field13': 'Field13', 'Field14': 'Field14', 'type': 'type', });
lyr_Export_Output_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'neme': 'neme', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'nn': 'nn', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'p': 'p', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Use_of_the': 'Use_of_the', 'Z': 'Z', 'Number_of': 'Number_of', 'Floors': 'Floors', 'Build_syst': 'Build_syst', 'الارت': 'الارت', });
lyr_Export_Output_3_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'fd': 'fd', 'DD': 'DD', 'H': 'H', });
lyr_natural_10.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_Export_Output_6_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'rabtt': 'rabtt', 'OBJECTID_1': 'OBJECTID_1', 'p': 'p', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Use_of_the': 'Use_of_the', 'Z': 'Z', 'Number_of': 'Number_of', 'Floors': 'Floors', 'Build_syst': 'Build_syst', });
lyr_Export_Output_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'rabtt': 'rabtt', 'OBJECTID_1': 'OBJECTID_1', 'p': 'p', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Use_of_the': 'Use_of_the', 'Z': 'Z', 'Number_of': 'Number_of', 'Floors': 'Floors', 'Build_syst': 'Build_syst', });
lyr_Export_Output_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'النوع': 'النوع', 'SHAPE_Leng': 'SHAPE_Leng', 'HS': 'HS', 'hh': 'hh', 'FID_': 'FID_', 'p': 'p', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Use_of_the': 'Use_of_the', 'Z': 'Z', 'Number_of': 'Number_of', 'Floors': 'Floors', 'Build_syst': 'Build_syst', 'FID1_1': 'FID1_1', 'OBJECTID_1': 'OBJECTID_1', 'F_____': 'F_____', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Area': 'SHAPE_Area', 'HS_1': 'HS_1', 'hh_1': 'hh_1', 'FID1': 'FID1', 'p_1': 'p_1', 'Longitude_': 'Longitude_', 'Latitude_1': 'Latitude_1', 'Use_of_t_1': 'Use_of_t_1', 'Z_1': 'Z_1', 'Number_of_': 'Number_of_', 'Floors_1': 'Floors_1', 'Build_sy_1': 'Build_sy_1', 'AS_': 'AS_', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_1': 'Shape_Ar_1', });
lyr_landuse_1.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_roads_2.set('fieldImages', {'osm_id': '', 'name': '', 'ref': '', 'type': '', 'oneway': '', 'bridge': '', 'maxspeed': '', });
lyr_e_3.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'hh': '', 'pp': '', 'pph': '', 'high': '', 'OBJECTID_2': '', 'p': '', 'Longitude': '', 'latitude': '', 'Use_of_the': '', 'Z': '', 'Number_of': '', 'Floors': '', 'build_syst': '', 'Field9': '', 'Field10': '', 'Field11': '', 'Field12': '', 'Field13': '', 'Field14': '', 'Field15': '', 'Field16': '', 'Field17': '', 'Field18': '', 'Field19': '', 'Field20': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', 'H': '', });
lyr_Export_Output_6_4.set('fieldImages', {'OBJECTID': '', 'name': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'smpology': '', 'z': '', 'FID_': '', 'OBJECTID_1': '', 'p': '', 'Longitude': '', 'Latitude': '', 'Use_the_bu': '', 'Z_1': '', 'Apartments': '', 'floors': '', 'build_syst': '', 'Field9': '', });
lyr_Export_Output_5_5.set('fieldImages', {'OBJECTID': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'romaprojec': '', 'FID_1': '', 'OBJECTID_1': '', 'p': '', 'Longitude': '', 'Latitude': '', 'Use_of_the': '', 'Z': '', 'Number_of': '', 'Floors': '', 'Build_syst': '', '3dmariam': '', });
lyr_Export_Output_4_6.set('fieldImages', {'OBJECTID': '', 'hh': '', 'pp': '', 'pph': '', 'high': '', 'OBJECTID_1': '', 'p': '', 'Longitude': '', 'latitude': '', 'Use_of_the': '', 'Z': '', 'Number_of': '', 'Floors': '', 'build_syst': '', 'Field9': '', 'Field10': '', 'Field11': '', 'Field12': '', 'Field13': '', 'Field14': '', 'Field15': '', 'Field16': '', 'Field17': '', 'Field18': '', 'Field19': '', 'Field20': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Export_Output_3_7.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', 'p': '', 'Z': '', 'OBJECTID': '', 'p_1': '', 'Longitude': '', 'Latitude': '', 'Use_of_the': '', 'z_1': '', 'Number_of': '', 'Floors': '', 'Build_syst': '', 'Field9': '', 'Field10': '', 'Field11': '', 'Field12': '', 'Field13': '', 'Field14': '', 'type': '', });
lyr_Export_Output_8.set('fieldImages', {'OBJECTID': '', 'neme': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'nn': '', 'OBJECTID_1': '', 'OBJECTID_2': '', 'p': '', 'Longitude': '', 'Latitude': '', 'Use_of_the': '', 'Z': '', 'Number_of': '', 'Floors': '', 'Build_syst': '', 'الارت': '', });
lyr_Export_Output_3_9.set('fieldImages', {'OBJECTID': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'fd': '', 'DD': '', 'H': '', });
lyr_natural_10.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Export_Output_6_11.set('fieldImages', {'OBJECTID': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'rabtt': '', 'OBJECTID_1': '', 'p': '', 'Longitude': '', 'Latitude': '', 'Use_of_the': '', 'Z': '', 'Number_of': '', 'Floors': '', 'Build_syst': '', });
lyr_Export_Output_12.set('fieldImages', {'OBJECTID': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'rabtt': '', 'OBJECTID_1': '', 'p': '', 'Longitude': '', 'Latitude': '', 'Use_of_the': '', 'Z': '', 'Number_of': '', 'Floors': '', 'Build_syst': '', });
lyr_Export_Output_13.set('fieldImages', {'OBJECTID': '', 'النوع': '', 'SHAPE_Leng': '', 'HS': '', 'hh': '', 'FID_': '', 'p': '', 'Longitude': '', 'Latitude': '', 'Use_of_the': '', 'Z': '', 'Number_of': '', 'Floors': '', 'Build_syst': '', 'FID1_1': '', 'OBJECTID_1': '', 'F_____': '', 'SHAPE_Le_1': '', 'SHAPE_Area': '', 'HS_1': '', 'hh_1': '', 'FID1': '', 'p_1': '', 'Longitude_': '', 'Latitude_1': '', 'Use_of_t_1': '', 'Z_1': '', 'Number_of_': '', 'Floors_1': '', 'Build_sy_1': '', 'AS_': '', 'Shape_Le_2': '', 'Shape_Ar_1': '', });
lyr_landuse_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label', 'type': 'no label', });
lyr_roads_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label', 'ref': 'no label', 'type': 'inline label', 'oneway': 'inline label', 'bridge': 'no label', 'maxspeed': 'no label', });
lyr_e_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'hh': 'no label', 'pp': 'no label', 'pph': 'no label', 'high': 'no label', 'OBJECTID_2': 'no label', 'p': 'no label', 'Longitude': 'no label', 'latitude': 'no label', 'Use_of_the': 'no label', 'Z': 'no label', 'Number_of': 'no label', 'Floors': 'no label', 'build_syst': 'no label', 'Field9': 'no label', 'Field10': 'no label', 'Field11': 'no label', 'Field12': 'no label', 'Field13': 'no label', 'Field14': 'no label', 'Field15': 'no label', 'Field16': 'no label', 'Field17': 'no label', 'Field18': 'no label', 'Field19': 'no label', 'Field20': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'H': 'no label', });
lyr_Export_Output_6_4.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'smpology': 'no label', 'z': 'no label', 'FID_': 'no label', 'OBJECTID_1': 'no label', 'p': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Use_the_bu': 'inline label', 'Z_1': 'inline label', 'Apartments': 'inline label', 'floors': 'inline label', 'build_syst': 'inline label', 'Field9': 'no label', });
lyr_Export_Output_5_5.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'romaprojec': 'no label', 'FID_1': 'no label', 'OBJECTID_1': 'no label', 'p': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Use_of_the': 'inline label', 'Z': 'inline label', 'Number_of': 'inline label', 'Floors': 'inline label', 'Build_syst': 'inline label', '3dmariam': 'no label', });
lyr_Export_Output_4_6.set('fieldLabels', {'OBJECTID': 'no label', 'hh': 'no label', 'pp': 'no label', 'pph': 'no label', 'high': 'no label', 'OBJECTID_1': 'no label', 'p': 'no label', 'Longitude': 'no label', 'latitude': 'no label', 'Use_of_the': 'inline label', 'Z': 'inline label', 'Number_of': 'inline label', 'Floors': 'inline label', 'build_syst': 'inline label', 'Field9': 'no label', 'Field10': 'no label', 'Field11': 'no label', 'Field12': 'no label', 'Field13': 'no label', 'Field14': 'no label', 'Field15': 'no label', 'Field16': 'no label', 'Field17': 'no label', 'Field18': 'no label', 'Field19': 'no label', 'Field20': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Export_Output_3_7.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'p': 'no label', 'Z': 'no label', 'OBJECTID': 'no label', 'p_1': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Use_of_the': 'inline label', 'z_1': 'inline label', 'Number_of': 'inline label', 'Floors': 'inline label', 'Build_syst': 'inline label', 'Field9': 'no label', 'Field10': 'no label', 'Field11': 'no label', 'Field12': 'no label', 'Field13': 'no label', 'Field14': 'no label', 'type': 'no label', });
lyr_Export_Output_8.set('fieldLabels', {'OBJECTID': 'no label', 'neme': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'nn': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'p': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Use_of_the': 'inline label', 'Z': 'inline label', 'Number_of': 'inline label', 'Floors': 'inline label', 'Build_syst': 'inline label', 'الارت': 'no label', });
lyr_Export_Output_3_9.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'fd': 'no label', 'DD': 'no label', 'H': 'no label', });
lyr_natural_10.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label', 'type': 'no label', });
lyr_Export_Output_6_11.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'rabtt': 'no label', 'OBJECTID_1': 'no label', 'p': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Use_of_the': 'inline label', 'Z': 'inline label', 'Number_of': 'inline label', 'Floors': 'inline label', 'Build_syst': 'inline label', });
lyr_Export_Output_12.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'rabtt': 'no label', 'OBJECTID_1': 'no label', 'p': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Use_of_the': 'inline label', 'Z': 'inline label', 'Number_of': 'inline label', 'Floors': 'inline label', 'Build_syst': 'inline label', });
lyr_Export_Output_13.set('fieldLabels', {'OBJECTID': 'no label', 'النوع': 'no label', 'SHAPE_Leng': 'no label', 'HS': 'no label', 'hh': 'no label', 'FID_': 'no label', 'p': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Use_of_the': 'no label', 'Z': 'no label', 'Number_of': 'no label', 'Floors': 'no label', 'Build_syst': 'no label', 'FID1_1': 'no label', 'OBJECTID_1': 'no label', 'F_____': 'no label', 'SHAPE_Le_1': 'no label', 'SHAPE_Area': 'no label', 'HS_1': 'no label', 'hh_1': 'no label', 'FID1': 'no label', 'p_1': 'no label', 'Longitude_': 'no label', 'Latitude_1': 'no label', 'Use_of_t_1': 'no label', 'Z_1': 'no label', 'Number_of_': 'no label', 'Floors_1': 'no label', 'Build_sy_1': 'no label', 'AS_': 'no label', 'Shape_Le_2': 'no label', 'Shape_Ar_1': 'no label', });
lyr_Export_Output_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});