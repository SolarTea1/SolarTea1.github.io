var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_SocioeconomicStatus_1 = new ol.format.GeoJSON();
var features_SocioeconomicStatus_1 = format_SocioeconomicStatus_1.readFeatures(json_SocioeconomicStatus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SocioeconomicStatus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SocioeconomicStatus_1.addFeatures(features_SocioeconomicStatus_1);
var lyr_SocioeconomicStatus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SocioeconomicStatus_1, 
                style: style_SocioeconomicStatus_1,
                popuplayertitle: "Socioeconomic Status",
                interactive: true,
    title: 'Socioeconomic Status<br />\
    <img src="styles/legend/SocioeconomicStatus_1_0.png" /> Bottom 10%<br />\
    <img src="styles/legend/SocioeconomicStatus_1_1.png" /> Bottom 20%<br />\
    <img src="styles/legend/SocioeconomicStatus_1_2.png" /> Bottom 30%<br />\
    <img src="styles/legend/SocioeconomicStatus_1_3.png" /> Bottom 40%<br />\
    <img src="styles/legend/SocioeconomicStatus_1_4.png" /> Bottom 50%<br />\
    <img src="styles/legend/SocioeconomicStatus_1_5.png" /> Top 50%<br />\
    <img src="styles/legend/SocioeconomicStatus_1_6.png" /> Top 40%<br />\
    <img src="styles/legend/SocioeconomicStatus_1_7.png" /> Top 30%<br />\
    <img src="styles/legend/SocioeconomicStatus_1_8.png" /> Top 20%<br />\
    <img src="styles/legend/SocioeconomicStatus_1_9.png" /> Top 10%<br />'
        });
var format_PublicOpenSpaceincludingbushlandCoverage_2 = new ol.format.GeoJSON();
var features_PublicOpenSpaceincludingbushlandCoverage_2 = format_PublicOpenSpaceincludingbushlandCoverage_2.readFeatures(json_PublicOpenSpaceincludingbushlandCoverage_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicOpenSpaceincludingbushlandCoverage_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicOpenSpaceincludingbushlandCoverage_2.addFeatures(features_PublicOpenSpaceincludingbushlandCoverage_2);
var lyr_PublicOpenSpaceincludingbushlandCoverage_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PublicOpenSpaceincludingbushlandCoverage_2, 
                style: style_PublicOpenSpaceincludingbushlandCoverage_2,
                popuplayertitle: "Public Open Space (inc. bushland) Coverage",
                interactive: true,
    title: 'Public Open Space (including bushland) Coverage (%)<br />\
    <img src="styles/legend/PublicOpenSpaceincludingbushlandCoverage_2_0.png" /> 0 - 3<br />\
    <img src="styles/legend/PublicOpenSpaceincludingbushlandCoverage_2_1.png" /> 3 - 8<br />\
    <img src="styles/legend/PublicOpenSpaceincludingbushlandCoverage_2_2.png" /> 8 - 13<br />\
    <img src="styles/legend/PublicOpenSpaceincludingbushlandCoverage_2_3.png" /> 13 - 24<br />\
    <img src="styles/legend/PublicOpenSpaceincludingbushlandCoverage_2_4.png" /> 24 - 100<br />'
        });
var format_PublicOpenSpaceincludingbushlandperCapitasqm_3 = new ol.format.GeoJSON();
var features_PublicOpenSpaceincludingbushlandperCapitasqm_3 = format_PublicOpenSpaceincludingbushlandperCapitasqm_3.readFeatures(json_PublicOpenSpaceincludingbushlandperCapitasqm_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicOpenSpaceincludingbushlandperCapitasqm_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicOpenSpaceincludingbushlandperCapitasqm_3.addFeatures(features_PublicOpenSpaceincludingbushlandperCapitasqm_3);
var lyr_PublicOpenSpaceincludingbushlandperCapitasqm_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PublicOpenSpaceincludingbushlandperCapitasqm_3, 
                style: style_PublicOpenSpaceincludingbushlandperCapitasqm_3,
                popuplayertitle: "Public Open Space (inc. bushland) per Capita",
                interactive: true,
    title: 'Public Open Space (including bushland) per Capita (sqm)<br />\
    <img src="styles/legend/PublicOpenSpaceincludingbushlandperCapitasqm_3_0.png" /> 0 - 10<br />\
    <img src="styles/legend/PublicOpenSpaceincludingbushlandperCapitasqm_3_1.png" /> 10 - 30<br />\
    <img src="styles/legend/PublicOpenSpaceincludingbushlandperCapitasqm_3_2.png" /> 30 - 64<br />\
    <img src="styles/legend/PublicOpenSpaceincludingbushlandperCapitasqm_3_3.png" /> 64 - 326<br />\
    <img src="styles/legend/PublicOpenSpaceincludingbushlandperCapitasqm_3_4.png" /> 326 - 15402267<br />'
        });
var format_PublicOpenSpaceAreaCoverage_4 = new ol.format.GeoJSON();
var features_PublicOpenSpaceAreaCoverage_4 = format_PublicOpenSpaceAreaCoverage_4.readFeatures(json_PublicOpenSpaceAreaCoverage_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicOpenSpaceAreaCoverage_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicOpenSpaceAreaCoverage_4.addFeatures(features_PublicOpenSpaceAreaCoverage_4);
var lyr_PublicOpenSpaceAreaCoverage_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PublicOpenSpaceAreaCoverage_4, 
                style: style_PublicOpenSpaceAreaCoverage_4,
                popuplayertitle: "Public Open Space Area Coverage",
                interactive: true,
    title: 'Public Open Space Area Coverage (%)<br />\
    <img src="styles/legend/PublicOpenSpaceAreaCoverage_4_0.png" /> 0 - 0.36<br />\
    <img src="styles/legend/PublicOpenSpaceAreaCoverage_4_1.png" /> 0.36 - 2.81<br />\
    <img src="styles/legend/PublicOpenSpaceAreaCoverage_4_2.png" /> 2.81 - 5.65<br />\
    <img src="styles/legend/PublicOpenSpaceAreaCoverage_4_3.png" /> 5.65 - 10.67<br />\
    <img src="styles/legend/PublicOpenSpaceAreaCoverage_4_4.png" /> 10.67 - 85.29<br />'
        });
var format_PublicOpenSpaceperCapitasqm_5 = new ol.format.GeoJSON();
var features_PublicOpenSpaceperCapitasqm_5 = format_PublicOpenSpaceperCapitasqm_5.readFeatures(json_PublicOpenSpaceperCapitasqm_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicOpenSpaceperCapitasqm_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicOpenSpaceperCapitasqm_5.addFeatures(features_PublicOpenSpaceperCapitasqm_5);
var lyr_PublicOpenSpaceperCapitasqm_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PublicOpenSpaceperCapitasqm_5, 
                style: style_PublicOpenSpaceperCapitasqm_5,
                popuplayertitle: "Public Open Space per Capita",
                interactive: true,
    title: 'Public Open Space per Capita (sqm)<br />\
    <img src="styles/legend/PublicOpenSpaceperCapitasqm_5_0.png" /> 0 - 4.3<br />\
    <img src="styles/legend/PublicOpenSpaceperCapitasqm_5_1.png" /> 4.3 - 13.9<br />\
    <img src="styles/legend/PublicOpenSpaceperCapitasqm_5_2.png" /> 13.9 - 27.4<br />\
    <img src="styles/legend/PublicOpenSpaceperCapitasqm_5_3.png" /> 27.4 - 56<br />\
    <img src="styles/legend/PublicOpenSpaceperCapitasqm_5_4.png" /> 56 - 44681.1<br />'
        });
var format_LocalGovernmentAreas_6 = new ol.format.GeoJSON();
var features_LocalGovernmentAreas_6 = format_LocalGovernmentAreas_6.readFeatures(json_LocalGovernmentAreas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalGovernmentAreas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalGovernmentAreas_6.addFeatures(features_LocalGovernmentAreas_6);
var lyr_LocalGovernmentAreas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalGovernmentAreas_6, 
                style: style_LocalGovernmentAreas_6,
                popuplayertitle: "Local Government Areas",
                interactive: true,
                title: '<img src="styles/legend/LocalGovernmentAreas_6.png" /> Local Government Areas'
            });
var group_GreenAssets = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Green Assets"});
var group_PublicOpenSpace = new ol.layer.Group({
                                layers: [lyr_PublicOpenSpaceAreaCoverage_4,lyr_PublicOpenSpaceperCapitasqm_5,],
                                fold: "open",
                                title: "Public Open Space"});
var group_PublicOpenSpaceIncludingBushland = new ol.layer.Group({
                                layers: [lyr_PublicOpenSpaceincludingbushlandCoverage_2,lyr_PublicOpenSpaceincludingbushlandperCapitasqm_3,],
                                fold: "open",
                                title: "Public Open Space (Including Bushland)"});
var group_LocalGovernmentAreas = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Local Government Areas"});

lyr_ESRIGraylight_0.setVisible(true);lyr_SocioeconomicStatus_1.setVisible(false);lyr_PublicOpenSpaceincludingbushlandCoverage_2.setVisible(false);lyr_PublicOpenSpaceincludingbushlandperCapitasqm_3.setVisible(false);lyr_PublicOpenSpaceAreaCoverage_4.setVisible(false);lyr_PublicOpenSpaceperCapitasqm_5.setVisible(true);lyr_LocalGovernmentAreas_6.setVisible(false);
var layersList = [lyr_ESRIGraylight_0,lyr_SocioeconomicStatus_1,group_PublicOpenSpaceIncludingBushland,group_PublicOpenSpace,lyr_LocalGovernmentAreas_6];
lyr_SocioeconomicStatus_1.set('fieldAliases', {'fid': 'fid', 'sal_code_2021': 'sal_code_2021', 'sal_name_2021': 'Suburb', 'Population': 'Population', 'SAL Area': 'SAL Area', 'IRSAD Score': 'IRSAD Score', 'IRSAD Decile (Greater Sydney)': 'IRSAD Decile (Greater Sydney)', 'All Green Assets Count': 'All Green Assets Count', 'All Green Assets Area': 'All Green Assets Area', 'All Green Asset Coverage': 'All Green Asset Coverage', 'All Green Asset Area per Capita': 'All Green Asset Area per Capita', 'Parks and Gardens Count': 'Parks and Gardens Count', 'Parks and Gardens Area': 'Parks and Gardens Area', 'Parks and Gardens Coverage': 'Parks and Gardens Coverage', 'Parks and Gardens Area per Capita': 'Parks and Gardens Area per Capita', 'Bushland Area': 'Bushland Area', 'Bushland Count': 'Bushland Count', 'Bushland Coverage': 'Bushland Coverage', 'Bushland Area per Capita': 'Bushland Area per Capita', 'Public Open Spaces Count': 'Number of Open Spaces', 'Public Open Spaces Area': 'Public Open Spaces Area', 'Public Open Spaces Coverage': 'Open Space Coverage (% of area)', 'Public Open Spaces per Capita': 'Open Space per Capita (sqm)', 'Public Open Space Non Bush Area': 'Open Space Area (sqm)', 'Public Open Space Non Bush Count': 'Number of Open Spaces', 'Public Open Space Non Bush Coverage': 'Open Space Coverage (% of area)', 'Public Open Space Non Bush Per Capita': 'Open Space per Capita (sqm)', });
lyr_PublicOpenSpaceincludingbushlandCoverage_2.set('fieldAliases', {'fid': 'fid', 'sal_code_2021': 'sal_code_2021', 'sal_name_2021': 'Suburb', 'Population': 'Population', 'SAL Area': 'SAL Area', 'IRSAD Score': 'IRSAD Score', 'IRSAD Decile (Greater Sydney)': 'IRSAD Decile (Greater Sydney)', 'All Green Assets Count': 'All Green Assets Count', 'All Green Assets Area': 'All Green Assets Area', 'All Green Asset Coverage': 'All Green Asset Coverage', 'All Green Asset Area per Capita': 'All Green Asset Area per Capita', 'Parks and Gardens Count': 'Parks and Gardens Count', 'Parks and Gardens Area': 'Parks and Gardens Area', 'Parks and Gardens Coverage': 'Parks and Gardens Coverage', 'Parks and Gardens Area per Capita': 'Parks and Gardens Area per Capita', 'Bushland Area': 'Bushland Area', 'Bushland Count': 'Bushland Count', 'Bushland Coverage': 'Bushland Coverage', 'Bushland Area per Capita': 'Bushland Area per Capita', 'Public Open Spaces Count': 'Number of Open Spaces', 'Public Open Spaces Area': 'Public Open Spaces Area', 'Public Open Spaces Coverage': 'Open Space Coverage (% of area)', 'Public Open Spaces per Capita': 'Open Space per Capita (sqm)', 'Public Open Space Non Bush Area': 'Open Space Area (sqm)', 'Public Open Space Non Bush Count': 'Number of Open Spaces', 'Public Open Space Non Bush Coverage': 'Open Space Coverage (% of area)', 'Public Open Space Non Bush Per Capita': 'Open Space per Capita (sqm)', });
lyr_PublicOpenSpaceincludingbushlandperCapitasqm_3.set('fieldAliases', {'fid': 'fid', 'sal_code_2021': 'sal_code_2021', 'sal_name_2021': 'Suburb', 'Population': 'Population', 'SAL Area': 'SAL Area', 'IRSAD Score': 'IRSAD Score', 'IRSAD Decile (Greater Sydney)': 'IRSAD Decile (Greater Sydney)', 'All Green Assets Count': 'All Green Assets Count', 'All Green Assets Area': 'All Green Assets Area', 'All Green Asset Coverage': 'All Green Asset Coverage', 'All Green Asset Area per Capita': 'All Green Asset Area per Capita', 'Parks and Gardens Count': 'Parks and Gardens Count', 'Parks and Gardens Area': 'Parks and Gardens Area', 'Parks and Gardens Coverage': 'Parks and Gardens Coverage', 'Parks and Gardens Area per Capita': 'Parks and Gardens Area per Capita', 'Bushland Area': 'Bushland Area', 'Bushland Count': 'Bushland Count', 'Bushland Coverage': 'Bushland Coverage', 'Bushland Area per Capita': 'Bushland Area per Capita', 'Public Open Spaces Count': 'Number of Open Spaces', 'Public Open Spaces Area': 'Public Open Spaces Area', 'Public Open Spaces Coverage': 'Open Space Coverage (% of area)', 'Public Open Spaces per Capita': 'Open Space per Capita (sqm)', 'Public Open Space Non Bush Area': 'Open Space Area (sqm)', 'Public Open Space Non Bush Count': 'Number of Open Spaces', 'Public Open Space Non Bush Coverage': 'Open Space Coverage (% of area)', 'Public Open Space Non Bush Per Capita': 'Open Space per Capita (sqm)', });
lyr_PublicOpenSpaceAreaCoverage_4.set('fieldAliases', {'fid': 'fid', 'sal_code_2021': 'sal_code_2021', 'sal_name_2021': 'Suburb', 'Population': 'Population', 'SAL Area': 'SAL Area', 'IRSAD Score': 'IRSAD Score', 'IRSAD Decile (Greater Sydney)': 'IRSAD Decile (Greater Sydney)', 'All Green Assets Count': 'All Green Assets Count', 'All Green Assets Area': 'All Green Assets Area', 'All Green Asset Coverage': 'All Green Asset Coverage', 'All Green Asset Area per Capita': 'All Green Asset Area per Capita', 'Parks and Gardens Count': 'Parks and Gardens Count', 'Parks and Gardens Area': 'Parks and Gardens Area', 'Parks and Gardens Coverage': 'Parks and Gardens Coverage', 'Parks and Gardens Area per Capita': 'Parks and Gardens Area per Capita', 'Bushland Area': 'Bushland Area', 'Bushland Count': 'Bushland Count', 'Bushland Coverage': 'Bushland Coverage', 'Bushland Area per Capita': 'Bushland Area per Capita', 'Public Open Spaces Count': 'Number of Open Spaces', 'Public Open Spaces Area': 'Public Open Spaces Area', 'Public Open Spaces Coverage': 'Open Space Coverage (% of area)', 'Public Open Spaces per Capita': 'Open Space per Capita (sqm)', 'Public Open Space Non Bush Area': 'Open Space Area (sqm)', 'Public Open Space Non Bush Count': 'Number of Open Spaces', 'Public Open Space Non Bush Coverage': 'Open Space Coverage (% of area)', 'Public Open Space Non Bush Per Capita': 'Open Space per Capita (sqm)', });
lyr_PublicOpenSpaceperCapitasqm_5.set('fieldAliases', {'fid': 'fid', 'sal_code_2021': 'sal_code_2021', 'sal_name_2021': 'Suburb', 'Population': 'Population', 'SAL Area': 'SAL Area', 'IRSAD Score': 'IRSAD Score', 'IRSAD Decile (Greater Sydney)': 'IRSAD Decile (Greater Sydney)', 'All Green Assets Count': 'All Green Assets Count', 'All Green Assets Area': 'All Green Assets Area', 'All Green Asset Coverage': 'All Green Asset Coverage', 'All Green Asset Area per Capita': 'All Green Asset Area per Capita', 'Parks and Gardens Count': 'Parks and Gardens Count', 'Parks and Gardens Area': 'Parks and Gardens Area', 'Parks and Gardens Coverage': 'Parks and Gardens Coverage', 'Parks and Gardens Area per Capita': 'Parks and Gardens Area per Capita', 'Bushland Area': 'Bushland Area', 'Bushland Count': 'Bushland Count', 'Bushland Coverage': 'Bushland Coverage', 'Bushland Area per Capita': 'Bushland Area per Capita', 'Public Open Spaces Count': 'Number of Open Spaces', 'Public Open Spaces Area': 'Public Open Spaces Area', 'Public Open Spaces Coverage': 'Open Space Coverage (% of area)', 'Public Open Spaces per Capita': 'Open Space per Capita (sqm)', 'Public Open Space Non Bush Area': 'Open Space Area (sqm)', 'Public Open Space Non Bush Count': 'Number of Open Spaces', 'Public Open Space Non Bush Coverage': 'Open Space Coverage (% of area)', 'Public Open Space Non Bush Per Capita': 'Open Space per Capita (sqm)', });
lyr_LocalGovernmentAreas_6.set('fieldAliases', {'fid': 'fid', 'lga_code_2': 'lga_code_2', 'lga_name_2': 'lga_name_2', 'state_code': 'state_code', 'state_name': 'state_name', 'Population': 'Population', 'IRSAD Score': 'IRSAD Score', 'Green Asset Area (SQM)': 'Green Asset Area (SQM)', 'Total Area (SQM)': 'Total Area (SQM)', 'Green Asset Coverage': 'Green Asset Coverage', 'IRSAD Decile': 'IRSAD Decile', 'IRSAD Decile (Greater Sydney)': 'IRSAD Decile (Greater Sydney)', });
lyr_SocioeconomicStatus_1.set('fieldImages', {'fid': 'TextEdit', 'sal_code_2021': 'TextEdit', 'sal_name_2021': 'TextEdit', 'Population': 'Range', 'SAL Area': 'TextEdit', 'IRSAD Score': 'Range', 'IRSAD Decile (Greater Sydney)': 'Range', 'All Green Assets Count': 'Range', 'All Green Assets Area': 'TextEdit', 'All Green Asset Coverage': 'TextEdit', 'All Green Asset Area per Capita': 'TextEdit', 'Parks and Gardens Count': 'Range', 'Parks and Gardens Area': 'TextEdit', 'Parks and Gardens Coverage': 'TextEdit', 'Parks and Gardens Area per Capita': 'TextEdit', 'Bushland Area': 'TextEdit', 'Bushland Count': 'Range', 'Bushland Coverage': 'TextEdit', 'Bushland Area per Capita': 'TextEdit', 'Public Open Spaces Count': 'Range', 'Public Open Spaces Area': 'Range', 'Public Open Spaces Coverage': 'Range', 'Public Open Spaces per Capita': 'TextEdit', 'Public Open Space Non Bush Area': 'Range', 'Public Open Space Non Bush Count': 'Range', 'Public Open Space Non Bush Coverage': 'TextEdit', 'Public Open Space Non Bush Per Capita': 'TextEdit', });
lyr_PublicOpenSpaceincludingbushlandCoverage_2.set('fieldImages', {'fid': 'TextEdit', 'sal_code_2021': 'TextEdit', 'sal_name_2021': 'TextEdit', 'Population': 'Range', 'SAL Area': 'TextEdit', 'IRSAD Score': 'Range', 'IRSAD Decile (Greater Sydney)': 'Range', 'All Green Assets Count': 'Range', 'All Green Assets Area': 'TextEdit', 'All Green Asset Coverage': 'TextEdit', 'All Green Asset Area per Capita': 'TextEdit', 'Parks and Gardens Count': 'Range', 'Parks and Gardens Area': 'TextEdit', 'Parks and Gardens Coverage': 'TextEdit', 'Parks and Gardens Area per Capita': 'TextEdit', 'Bushland Area': 'TextEdit', 'Bushland Count': 'Range', 'Bushland Coverage': 'TextEdit', 'Bushland Area per Capita': 'TextEdit', 'Public Open Spaces Count': 'Range', 'Public Open Spaces Area': 'Range', 'Public Open Spaces Coverage': 'Range', 'Public Open Spaces per Capita': 'TextEdit', 'Public Open Space Non Bush Area': 'Range', 'Public Open Space Non Bush Count': 'Range', 'Public Open Space Non Bush Coverage': 'TextEdit', 'Public Open Space Non Bush Per Capita': 'TextEdit', });
lyr_PublicOpenSpaceincludingbushlandperCapitasqm_3.set('fieldImages', {'fid': 'TextEdit', 'sal_code_2021': 'TextEdit', 'sal_name_2021': 'TextEdit', 'Population': 'Range', 'SAL Area': 'TextEdit', 'IRSAD Score': 'Range', 'IRSAD Decile (Greater Sydney)': 'Range', 'All Green Assets Count': 'Range', 'All Green Assets Area': 'TextEdit', 'All Green Asset Coverage': 'TextEdit', 'All Green Asset Area per Capita': 'TextEdit', 'Parks and Gardens Count': 'Range', 'Parks and Gardens Area': 'TextEdit', 'Parks and Gardens Coverage': 'TextEdit', 'Parks and Gardens Area per Capita': 'TextEdit', 'Bushland Area': 'TextEdit', 'Bushland Count': 'Range', 'Bushland Coverage': 'TextEdit', 'Bushland Area per Capita': 'TextEdit', 'Public Open Spaces Count': 'Range', 'Public Open Spaces Area': 'Range', 'Public Open Spaces Coverage': 'Range', 'Public Open Spaces per Capita': 'TextEdit', 'Public Open Space Non Bush Area': 'Range', 'Public Open Space Non Bush Count': 'Range', 'Public Open Space Non Bush Coverage': 'TextEdit', 'Public Open Space Non Bush Per Capita': 'TextEdit', });
lyr_PublicOpenSpaceAreaCoverage_4.set('fieldImages', {'fid': 'TextEdit', 'sal_code_2021': 'TextEdit', 'sal_name_2021': 'TextEdit', 'Population': 'Range', 'SAL Area': 'TextEdit', 'IRSAD Score': 'Range', 'IRSAD Decile (Greater Sydney)': 'Range', 'All Green Assets Count': 'Range', 'All Green Assets Area': 'TextEdit', 'All Green Asset Coverage': 'TextEdit', 'All Green Asset Area per Capita': 'TextEdit', 'Parks and Gardens Count': 'Range', 'Parks and Gardens Area': 'TextEdit', 'Parks and Gardens Coverage': 'TextEdit', 'Parks and Gardens Area per Capita': 'TextEdit', 'Bushland Area': 'TextEdit', 'Bushland Count': 'Range', 'Bushland Coverage': 'TextEdit', 'Bushland Area per Capita': 'TextEdit', 'Public Open Spaces Count': 'Range', 'Public Open Spaces Area': 'Range', 'Public Open Spaces Coverage': 'Range', 'Public Open Spaces per Capita': 'TextEdit', 'Public Open Space Non Bush Area': 'Range', 'Public Open Space Non Bush Count': 'Range', 'Public Open Space Non Bush Coverage': 'TextEdit', 'Public Open Space Non Bush Per Capita': 'TextEdit', });
lyr_PublicOpenSpaceperCapitasqm_5.set('fieldImages', {'fid': 'TextEdit', 'sal_code_2021': 'TextEdit', 'sal_name_2021': 'TextEdit', 'Population': 'Range', 'SAL Area': 'TextEdit', 'IRSAD Score': 'Range', 'IRSAD Decile (Greater Sydney)': 'Range', 'All Green Assets Count': 'Range', 'All Green Assets Area': 'TextEdit', 'All Green Asset Coverage': 'TextEdit', 'All Green Asset Area per Capita': 'TextEdit', 'Parks and Gardens Count': 'Range', 'Parks and Gardens Area': 'TextEdit', 'Parks and Gardens Coverage': 'TextEdit', 'Parks and Gardens Area per Capita': 'TextEdit', 'Bushland Area': 'TextEdit', 'Bushland Count': 'Range', 'Bushland Coverage': 'TextEdit', 'Bushland Area per Capita': 'TextEdit', 'Public Open Spaces Count': 'Range', 'Public Open Spaces Area': 'Range', 'Public Open Spaces Coverage': 'Range', 'Public Open Spaces per Capita': 'TextEdit', 'Public Open Space Non Bush Area': 'Range', 'Public Open Space Non Bush Count': 'Range', 'Public Open Space Non Bush Coverage': 'TextEdit', 'Public Open Space Non Bush Per Capita': 'TextEdit', });
lyr_LocalGovernmentAreas_6.set('fieldImages', {'fid': 'TextEdit', 'lga_code_2': 'TextEdit', 'lga_name_2': 'TextEdit', 'state_code': 'TextEdit', 'state_name': 'TextEdit', 'Population': 'Range', 'IRSAD Score': 'Range', 'Green Asset Area (SQM)': 'TextEdit', 'Total Area (SQM)': 'TextEdit', 'Green Asset Coverage': 'Range', 'IRSAD Decile': 'Range', 'IRSAD Decile (Greater Sydney)': 'Range', });
lyr_SocioeconomicStatus_1.set('fieldLabels', {'fid': 'hidden field', 'sal_code_2021': 'hidden field', 'sal_name_2021': 'inline label - always visible', 'Population': 'inline label - always visible', 'SAL Area': 'hidden field', 'IRSAD Score': 'header label - always visible', 'IRSAD Decile (Greater Sydney)': 'header label - always visible', 'All Green Assets Count': 'hidden field', 'All Green Assets Area': 'hidden field', 'All Green Asset Coverage': 'hidden field', 'All Green Asset Area per Capita': 'hidden field', 'Parks and Gardens Count': 'hidden field', 'Parks and Gardens Area': 'hidden field', 'Parks and Gardens Coverage': 'hidden field', 'Parks and Gardens Area per Capita': 'hidden field', 'Bushland Area': 'hidden field', 'Bushland Count': 'hidden field', 'Bushland Coverage': 'hidden field', 'Bushland Area per Capita': 'hidden field', 'Public Open Spaces Count': 'hidden field', 'Public Open Spaces Area': 'hidden field', 'Public Open Spaces Coverage': 'hidden field', 'Public Open Spaces per Capita': 'hidden field', 'Public Open Space Non Bush Area': 'hidden field', 'Public Open Space Non Bush Count': 'hidden field', 'Public Open Space Non Bush Coverage': 'hidden field', 'Public Open Space Non Bush Per Capita': 'hidden field', });
lyr_PublicOpenSpaceincludingbushlandCoverage_2.set('fieldLabels', {'fid': 'hidden field', 'sal_code_2021': 'hidden field', 'sal_name_2021': 'inline label - always visible', 'Population': 'inline label - always visible', 'SAL Area': 'hidden field', 'IRSAD Score': 'hidden field', 'IRSAD Decile (Greater Sydney)': 'hidden field', 'All Green Assets Count': 'hidden field', 'All Green Assets Area': 'hidden field', 'All Green Asset Coverage': 'hidden field', 'All Green Asset Area per Capita': 'hidden field', 'Parks and Gardens Count': 'hidden field', 'Parks and Gardens Area': 'hidden field', 'Parks and Gardens Coverage': 'hidden field', 'Parks and Gardens Area per Capita': 'hidden field', 'Bushland Area': 'hidden field', 'Bushland Count': 'hidden field', 'Bushland Coverage': 'hidden field', 'Bushland Area per Capita': 'hidden field', 'Public Open Spaces Count': 'inline label - always visible', 'Public Open Spaces Area': 'hidden field', 'Public Open Spaces Coverage': 'header label - always visible', 'Public Open Spaces per Capita': 'header label - always visible', 'Public Open Space Non Bush Area': 'hidden field', 'Public Open Space Non Bush Count': 'hidden field', 'Public Open Space Non Bush Coverage': 'hidden field', 'Public Open Space Non Bush Per Capita': 'hidden field', });
lyr_PublicOpenSpaceincludingbushlandperCapitasqm_3.set('fieldLabels', {'fid': 'hidden field', 'sal_code_2021': 'hidden field', 'sal_name_2021': 'inline label - always visible', 'Population': 'inline label - always visible', 'SAL Area': 'hidden field', 'IRSAD Score': 'hidden field', 'IRSAD Decile (Greater Sydney)': 'hidden field', 'All Green Assets Count': 'hidden field', 'All Green Assets Area': 'hidden field', 'All Green Asset Coverage': 'hidden field', 'All Green Asset Area per Capita': 'hidden field', 'Parks and Gardens Count': 'hidden field', 'Parks and Gardens Area': 'hidden field', 'Parks and Gardens Coverage': 'hidden field', 'Parks and Gardens Area per Capita': 'hidden field', 'Bushland Area': 'hidden field', 'Bushland Count': 'hidden field', 'Bushland Coverage': 'hidden field', 'Bushland Area per Capita': 'hidden field', 'Public Open Spaces Count': 'inline label - always visible', 'Public Open Spaces Area': 'hidden field', 'Public Open Spaces Coverage': 'header label - always visible', 'Public Open Spaces per Capita': 'header label - always visible', 'Public Open Space Non Bush Area': 'hidden field', 'Public Open Space Non Bush Count': 'hidden field', 'Public Open Space Non Bush Coverage': 'hidden field', 'Public Open Space Non Bush Per Capita': 'hidden field', });
lyr_PublicOpenSpaceAreaCoverage_4.set('fieldLabels', {'fid': 'hidden field', 'sal_code_2021': 'hidden field', 'sal_name_2021': 'inline label - always visible', 'Population': 'inline label - always visible', 'SAL Area': 'hidden field', 'IRSAD Score': 'hidden field', 'IRSAD Decile (Greater Sydney)': 'hidden field', 'All Green Assets Count': 'hidden field', 'All Green Assets Area': 'hidden field', 'All Green Asset Coverage': 'hidden field', 'All Green Asset Area per Capita': 'hidden field', 'Parks and Gardens Count': 'hidden field', 'Parks and Gardens Area': 'hidden field', 'Parks and Gardens Coverage': 'hidden field', 'Parks and Gardens Area per Capita': 'hidden field', 'Bushland Area': 'hidden field', 'Bushland Count': 'hidden field', 'Bushland Coverage': 'hidden field', 'Bushland Area per Capita': 'hidden field', 'Public Open Spaces Count': 'hidden field', 'Public Open Spaces Area': 'hidden field', 'Public Open Spaces Coverage': 'hidden field', 'Public Open Spaces per Capita': 'hidden field', 'Public Open Space Non Bush Area': 'hidden field', 'Public Open Space Non Bush Count': 'inline label - always visible', 'Public Open Space Non Bush Coverage': 'header label - always visible', 'Public Open Space Non Bush Per Capita': 'header label - always visible', });
lyr_PublicOpenSpaceperCapitasqm_5.set('fieldLabels', {'fid': 'hidden field', 'sal_code_2021': 'hidden field', 'sal_name_2021': 'inline label - always visible', 'Population': 'inline label - always visible', 'SAL Area': 'hidden field', 'IRSAD Score': 'hidden field', 'IRSAD Decile (Greater Sydney)': 'hidden field', 'All Green Assets Count': 'hidden field', 'All Green Assets Area': 'hidden field', 'All Green Asset Coverage': 'hidden field', 'All Green Asset Area per Capita': 'hidden field', 'Parks and Gardens Count': 'hidden field', 'Parks and Gardens Area': 'hidden field', 'Parks and Gardens Coverage': 'hidden field', 'Parks and Gardens Area per Capita': 'hidden field', 'Bushland Area': 'hidden field', 'Bushland Count': 'hidden field', 'Bushland Coverage': 'hidden field', 'Bushland Area per Capita': 'hidden field', 'Public Open Spaces Count': 'hidden field', 'Public Open Spaces Area': 'hidden field', 'Public Open Spaces Coverage': 'hidden field', 'Public Open Spaces per Capita': 'hidden field', 'Public Open Space Non Bush Area': 'hidden field', 'Public Open Space Non Bush Count': 'inline label - always visible', 'Public Open Space Non Bush Coverage': 'header label - always visible', 'Public Open Space Non Bush Per Capita': 'header label - always visible', });
lyr_LocalGovernmentAreas_6.set('fieldLabels', {'fid': 'hidden field', 'lga_code_2': 'hidden field', 'lga_name_2': 'no label', 'state_code': 'hidden field', 'state_name': 'hidden field', 'Population': 'hidden field', 'IRSAD Score': 'hidden field', 'Green Asset Area (SQM)': 'hidden field', 'Total Area (SQM)': 'hidden field', 'Green Asset Coverage': 'hidden field', 'IRSAD Decile': 'hidden field', 'IRSAD Decile (Greater Sydney)': 'hidden field', });
lyr_LocalGovernmentAreas_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
