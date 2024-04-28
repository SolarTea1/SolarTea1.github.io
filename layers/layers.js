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
var format_WesternParklandCity_1 = new ol.format.GeoJSON();
var features_WesternParklandCity_1 = format_WesternParklandCity_1.readFeatures(json_WesternParklandCity_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WesternParklandCity_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WesternParklandCity_1.addFeatures(features_WesternParklandCity_1);
var lyr_WesternParklandCity_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WesternParklandCity_1, 
                style: style_WesternParklandCity_1,
                popuplayertitle: "Western Parkland City",
                interactive: false,
                title: '<img src="styles/legend/WesternParklandCity_1.png" /> Western Parkland City'
            });
var format_LocalGovernmentArea_2 = new ol.format.GeoJSON();
var features_LocalGovernmentArea_2 = format_LocalGovernmentArea_2.readFeatures(json_LocalGovernmentArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalGovernmentArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalGovernmentArea_2.addFeatures(features_LocalGovernmentArea_2);
var lyr_LocalGovernmentArea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalGovernmentArea_2, 
                style: style_LocalGovernmentArea_2,
                popuplayertitle: "Local Government Area",
                interactive: false,
                title: '<img src="styles/legend/LocalGovernmentArea_2.png" /> Local Government Area'
            });
var format_SWGArezonedorreleasedland_3 = new ol.format.GeoJSON();
var features_SWGArezonedorreleasedland_3 = format_SWGArezonedorreleasedland_3.readFeatures(json_SWGArezonedorreleasedland_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SWGArezonedorreleasedland_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWGArezonedorreleasedland_3.addFeatures(features_SWGArezonedorreleasedland_3);
var lyr_SWGArezonedorreleasedland_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SWGArezonedorreleasedland_3, 
                style: style_SWGArezonedorreleasedland_3,
                popuplayertitle: "SWGA rezoned or released land",
                interactive: false,
                title: '<img src="styles/legend/SWGArezonedorreleasedland_3.png" /> SWGA rezoned or released land'
            });
var format_Threatenedecologicalcommunities_4 = new ol.format.GeoJSON();
var features_Threatenedecologicalcommunities_4 = format_Threatenedecologicalcommunities_4.readFeatures(json_Threatenedecologicalcommunities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Threatenedecologicalcommunities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Threatenedecologicalcommunities_4.addFeatures(features_Threatenedecologicalcommunities_4);
var lyr_Threatenedecologicalcommunities_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Threatenedecologicalcommunities_4, 
                style: style_Threatenedecologicalcommunities_4,
                popuplayertitle: "Threatened ecological communities",
                interactive: false,
                title: '<img src="styles/legend/Threatenedecologicalcommunities_4.png" /> Threatened ecological communities'
            });
var format_CurrentRoutes_5 = new ol.format.GeoJSON();
var features_CurrentRoutes_5 = format_CurrentRoutes_5.readFeatures(json_CurrentRoutes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurrentRoutes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurrentRoutes_5.addFeatures(features_CurrentRoutes_5);
var lyr_CurrentRoutes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurrentRoutes_5, 
                style: style_CurrentRoutes_5,
                popuplayertitle: "Current Routes",
                interactive: false,
                title: '<img src="styles/legend/CurrentRoutes_5.png" /> Current Routes'
            });
var format_FutureRoutes_6 = new ol.format.GeoJSON();
var features_FutureRoutes_6 = format_FutureRoutes_6.readFeatures(json_FutureRoutes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureRoutes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureRoutes_6.addFeatures(features_FutureRoutes_6);
var lyr_FutureRoutes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureRoutes_6, 
                style: style_FutureRoutes_6,
                popuplayertitle: "Future Routes",
                interactive: false,
                title: '<img src="styles/legend/FutureRoutes_6.png" /> Future Routes'
            });
var format_CurrentStations_7 = new ol.format.GeoJSON();
var features_CurrentStations_7 = format_CurrentStations_7.readFeatures(json_CurrentStations_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurrentStations_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurrentStations_7.addFeatures(features_CurrentStations_7);
var lyr_CurrentStations_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurrentStations_7, 
                style: style_CurrentStations_7,
                popuplayertitle: "Current Stations",
                interactive: false,
                title: '<img src="styles/legend/CurrentStations_7.png" /> Current Stations'
            });
var format_2028CarTripsDay_8 = new ol.format.GeoJSON();
var features_2028CarTripsDay_8 = format_2028CarTripsDay_8.readFeatures(json_2028CarTripsDay_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2028CarTripsDay_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2028CarTripsDay_8.addFeatures(features_2028CarTripsDay_8);
var lyr_2028CarTripsDay_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2028CarTripsDay_8, 
                style: style_2028CarTripsDay_8,
                popuplayertitle: "2028 Car Trips/Day",
                interactive: false,
    title: '2028 Car Trips/Day<br />\
    <img src="styles/legend/2028CarTripsDay_8_0.png" /> 3,369 - 5,695<br />\
    <img src="styles/legend/2028CarTripsDay_8_1.png" /> 5,695 - 11,353<br />\
    <img src="styles/legend/2028CarTripsDay_8_2.png" /> 11,353 - 22,150<br />\
    <img src="styles/legend/2028CarTripsDay_8_3.png" /> 22,150 - 26,477<br />\
    <img src="styles/legend/2028CarTripsDay_8_4.png" /> 26,477 - 46,951<br />'
        });
var format_2028Population_9 = new ol.format.GeoJSON();
var features_2028Population_9 = format_2028Population_9.readFeatures(json_2028Population_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2028Population_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2028Population_9.addFeatures(features_2028Population_9);
var lyr_2028Population_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2028Population_9, 
                style: style_2028Population_9,
                popuplayertitle: "2028 Population",
                interactive: false,
    title: '2028 Population<br />\
    <img src="styles/legend/2028Population_9_0.png" /> 20,557 - 28,918<br />\
    <img src="styles/legend/2028Population_9_1.png" /> 28,918 - 46,690<br />\
    <img src="styles/legend/2028Population_9_2.png" /> 46,690 - 91,212<br />\
    <img src="styles/legend/2028Population_9_3.png" /> 91,212 - 101,040<br />\
    <img src="styles/legend/2028Population_9_4.png" /> 101,040 - 144,608<br />'
        });
var format_ValueUpliftM_10 = new ol.format.GeoJSON();
var features_ValueUpliftM_10 = format_ValueUpliftM_10.readFeatures(json_ValueUpliftM_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ValueUpliftM_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ValueUpliftM_10.addFeatures(features_ValueUpliftM_10);
var lyr_ValueUpliftM_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ValueUpliftM_10, 
                style: style_ValueUpliftM_10,
                popuplayertitle: "Value Uplift ($M)",
                interactive: false,
    title: 'Value Uplift ($M)<br />\
    <img src="styles/legend/ValueUpliftM_10_0.png" /> 83 - 141<br />\
    <img src="styles/legend/ValueUpliftM_10_1.png" /> 142 - 239<br />\
    <img src="styles/legend/ValueUpliftM_10_2.png" /> 240 - 358<br />\
    <img src="styles/legend/ValueUpliftM_10_3.png" /> 350 - 716<br />\
    <img src="styles/legend/ValueUpliftM_10_4.png" /> 717 - 1,044<br />'
        });
var format_PotentialStations_11 = new ol.format.GeoJSON();
var features_PotentialStations_11 = format_PotentialStations_11.readFeatures(json_PotentialStations_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotentialStations_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotentialStations_11.addFeatures(features_PotentialStations_11);
var lyr_PotentialStations_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotentialStations_11, 
                style: style_PotentialStations_11,
                popuplayertitle: "Potential Stations",
                interactive: true,
                title: '<img src="styles/legend/PotentialStations_11.png" /> Potential Stations'
            });
var group_PopulationDensity = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Population Density"});
var group_Transportation = new ol.layer.Group({
                                layers: [lyr_CurrentRoutes_5,lyr_FutureRoutes_6,lyr_CurrentStations_7,],
                                fold: "open",
                                title: "Transportation"});
var group_Suitability = new ol.layer.Group({
                                layers: [lyr_SWGArezonedorreleasedland_3,lyr_Threatenedecologicalcommunities_4,],
                                fold: "open",
                                title: "Suitability"});
var group_Boundaries = new ol.layer.Group({
                                layers: [lyr_WesternParklandCity_1,lyr_LocalGovernmentArea_2,],
                                fold: "open",
                                title: "Boundaries"});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_ESRIGraylight_0,],
                                fold: "open",
                                title: "Base Maps"});

lyr_ESRIGraylight_0.setVisible(true);lyr_WesternParklandCity_1.setVisible(true);lyr_LocalGovernmentArea_2.setVisible(true);lyr_SWGArezonedorreleasedland_3.setVisible(true);lyr_Threatenedecologicalcommunities_4.setVisible(false);lyr_CurrentRoutes_5.setVisible(true);lyr_FutureRoutes_6.setVisible(true);lyr_CurrentStations_7.setVisible(true);lyr_2028CarTripsDay_8.setVisible(false);lyr_2028Population_9.setVisible(false);lyr_ValueUpliftM_10.setVisible(false);lyr_PotentialStations_11.setVisible(true);
var layersList = [group_BaseMaps,group_Boundaries,group_Suitability,group_Transportation,lyr_2028CarTripsDay_8,lyr_2028Population_9,lyr_ValueUpliftM_10,lyr_PotentialStations_11];
lyr_WesternParklandCity_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DISTRICT_NAME': 'DISTRICT_NAME', 'SYM_CODE': 'SYM_CODE', 'PUBLISHED_DATE': 'PUBLISHED_DATE', 'COMMENCED_DATE': 'COMMENCED_DATE', 'CURRENCY_DATE': 'CURRENCY_DATE', 'AMENDMENT': 'AMENDMENT', 'PCO_REF_KEY': 'PCO_REF_KEY', 'LEG_REF_AREA': 'LEG_REF_AREA', 'LEG_REF_CLAUSE': 'LEG_REF_CLAUSE', 'LEG_REF_VALUE': 'LEG_REF_VALUE', 'MAP_TYPE': 'MAP_TYPE', 'MAP_NAME': 'MAP_NAME', 'LAY_NAME': 'LAY_NAME', 'LAY_CLASS': 'LAY_CLASS', 'LABEL': 'LABEL', 'SHAPE.STArea()': 'SHAPE.STArea()', 'SHAPE.STLength()': 'SHAPE.STLength()', });
lyr_LocalGovernmentArea_2.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'LGA_CODE_2021': 'LGA_CODE_2021', 'LGA_NAME_2021': 'LGA_NAME_2021', 'STATE_CODE_2021': 'STATE_CODE_2021', 'STATE_NAME_2021': 'STATE_NAME_2021', 'AUS_CODE_2021': 'AUS_CODE_2021', 'AUS_NAME_2021': 'AUS_NAME_2021', 'AREA_ALBERS_SQKM': 'AREA_ALBERS_SQKM', 'ASGS_LOCI_URI_2021': 'ASGS_LOCI_URI_2021', 'st_length(shape)': 'Shape_Length', 'st_area(shape)': 'Shape_Area', });
lyr_SWGArezonedorreleasedland_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Precint Status': 'Precint Status', });
lyr_Threatenedecologicalcommunities_4.set('fieldAliases', {'fid': 'fid', 'TEC_NSW': 'TEC_NSW', 'NSWLISTING': 'NSWLISTING', 'SAIISTATUS': 'SAIISTATUS', 'SOURCE_POL': 'SOURCE_POL', 'SRCE_MU_NO': 'SRCE_MU_NO', 'SOURCE_MU': 'SOURCE_MU', 'AREA_HA': 'AREA_HA', 'RFS1050': 'RFS1050', 'VERDATE': 'VERDATE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CurrentRoutes_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'shape_id': 'shape_id', 'begin': 'begin', 'end': 'end', 'RouteID': 'RouteID', 'routes_agency_id': 'routes_agency_id', 'routes_route_short_name': 'routes_route_short_name', 'routes_route_long_name': 'routes_route_long_name', 'routes_route_desc': 'routes_route_desc', 'routes_route_type': 'routes_route_type', 'routes_route_color': 'routes_route_color', 'routes_route_text_color': 'routes_route_text_color', 'routes_exact_times': 'routes_exact_times', 'agency_agency_name': 'agency_agency_name', 'agency_agency_url': 'agency_agency_url', 'agency_agency_timezone': 'agency_agency_timezone', 'agency_agency_lang': 'agency_agency_lang', 'agency_agency_phone': 'agency_agency_phone', 'Colour': 'Colour', });
lyr_FutureRoutes_6.set('fieldAliases', {'fid': 'fid', 'Descr': 'Descr', 'Colour': 'Colour', 'Colour2': 'Colour2', });
lyr_CurrentStations_7.set('fieldAliases', {'fid': 'fid', 'stop_id': 'stop_id', 'stop_code': 'stop_code', 'stop_name': 'stop_name', 'stop_lat': 'stop_lat', 'stop_lon': 'stop_lon', 'location_type': 'location_type', 'parent_station': 'parent_station', 'wheelchair_boarding': 'wheelchair_boarding', 'level_id': 'level_id', 'platform_code': 'platform_code', });
lyr_2028CarTripsDay_8.set('fieldAliases', {'fid': 'fid', 'cngdegrees': 'cngdegrees', 'pointID': 'pointID', 'PointDistance': 'PointDistance', 'ValueMill': 'ValueMill', 'Rings_ValueUpliftPerPoint': 'Rings_ValueUpliftPerPoint', 'Rings_CarTripsPerPoint': 'Rings_CarTripsPerPoint', 'Rings_PopulationPerPoint': 'Rings_PopulationPerPoint', });
lyr_2028Population_9.set('fieldAliases', {'fid': 'fid', 'cngdegrees': 'cngdegrees', 'pointID': 'pointID', 'PointDistance': 'PointDistance', 'ValueMill': 'ValueMill', 'Rings_ValueUpliftPerPoint': 'Rings_ValueUpliftPerPoint', 'Rings_CarTripsPerPoint': 'Rings_CarTripsPerPoint', 'Rings_PopulationPerPoint': 'Rings_PopulationPerPoint', });
lyr_ValueUpliftM_10.set('fieldAliases', {'fid': 'fid', 'cngdegrees': 'cngdegrees', 'pointID': 'pointID', 'PointDistance': 'PointDistance', 'ValueMill': 'ValueMill', 'Rings_ValueUpliftPerPoint': 'Rings_ValueUpliftPerPoint', 'Rings_CarTripsPerPoint': 'Rings_CarTripsPerPoint', 'Rings_PopulationPerPoint': 'Rings_PopulationPerPoint', });
lyr_PotentialStations_11.set('fieldAliases', {'fid': 'fid', 'cngdegrees': 'cngdegrees', 'pointID': 'Station ID', 'PointDistance': 'PointDistance', 'ValueMill': 'Value Uplift ($M)', 'Rings_ValueUpliftPerPoint': 'Rings_ValueUpliftPerPoint', 'Rings_CarTripsPerPoint': 'Potential reduction in daily car trips (2028)', 'Rings_PopulationPerPoint': 'Population within 2 km (2028)', });
lyr_WesternParklandCity_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'DISTRICT_NAME': 'TextEdit', 'SYM_CODE': 'TextEdit', 'PUBLISHED_DATE': 'DateTime', 'COMMENCED_DATE': 'DateTime', 'CURRENCY_DATE': 'DateTime', 'AMENDMENT': 'TextEdit', 'PCO_REF_KEY': 'TextEdit', 'LEG_REF_AREA': 'TextEdit', 'LEG_REF_CLAUSE': 'TextEdit', 'LEG_REF_VALUE': 'TextEdit', 'MAP_TYPE': 'TextEdit', 'MAP_NAME': 'TextEdit', 'LAY_NAME': 'TextEdit', 'LAY_CLASS': 'TextEdit', 'LABEL': 'TextEdit', 'SHAPE.STArea()': 'TextEdit', 'SHAPE.STLength()': 'TextEdit', });
lyr_LocalGovernmentArea_2.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'LGA_CODE_2021': 'TextEdit', 'LGA_NAME_2021': 'TextEdit', 'STATE_CODE_2021': 'TextEdit', 'STATE_NAME_2021': 'TextEdit', 'AUS_CODE_2021': 'TextEdit', 'AUS_NAME_2021': 'TextEdit', 'AREA_ALBERS_SQKM': 'TextEdit', 'ASGS_LOCI_URI_2021': 'TextEdit', 'st_length(shape)': 'TextEdit', 'st_area(shape)': 'TextEdit', });
lyr_SWGArezonedorreleasedland_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Precint Status': 'TextEdit', });
lyr_Threatenedecologicalcommunities_4.set('fieldImages', {'fid': 'TextEdit', 'TEC_NSW': 'TextEdit', 'NSWLISTING': 'TextEdit', 'SAIISTATUS': 'TextEdit', 'SOURCE_POL': 'TextEdit', 'SRCE_MU_NO': 'TextEdit', 'SOURCE_MU': 'TextEdit', 'AREA_HA': 'TextEdit', 'RFS1050': 'TextEdit', 'VERDATE': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CurrentRoutes_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'shape_id': 'TextEdit', 'begin': 'Range', 'end': 'Range', 'RouteID': 'TextEdit', 'routes_agency_id': 'TextEdit', 'routes_route_short_name': 'TextEdit', 'routes_route_long_name': 'TextEdit', 'routes_route_desc': 'TextEdit', 'routes_route_type': 'Range', 'routes_route_color': 'TextEdit', 'routes_route_text_color': 'TextEdit', 'routes_exact_times': 'CheckBox', 'agency_agency_name': 'TextEdit', 'agency_agency_url': 'TextEdit', 'agency_agency_timezone': 'TextEdit', 'agency_agency_lang': 'TextEdit', 'agency_agency_phone': 'TextEdit', 'Colour': 'TextEdit', });
lyr_FutureRoutes_6.set('fieldImages', {'fid': 'TextEdit', 'Descr': 'TextEdit', 'Colour': 'TextEdit', 'Colour2': 'TextEdit', });
lyr_CurrentStations_7.set('fieldImages', {'fid': 'TextEdit', 'stop_id': 'TextEdit', 'stop_code': 'Range', 'stop_name': 'TextEdit', 'stop_lat': 'TextEdit', 'stop_lon': 'TextEdit', 'location_type': 'Range', 'parent_station': 'TextEdit', 'wheelchair_boarding': 'Range', 'level_id': 'TextEdit', 'platform_code': 'TextEdit', });
lyr_2028CarTripsDay_8.set('fieldImages', {'fid': 'Range', 'cngdegrees': 'TextEdit', 'pointID': 'Range', 'PointDistance': 'TextEdit', 'ValueMill': 'Range', 'Rings_ValueUpliftPerPoint': 'TextEdit', 'Rings_CarTripsPerPoint': 'Range', 'Rings_PopulationPerPoint': 'Range', });
lyr_2028Population_9.set('fieldImages', {'fid': 'Range', 'cngdegrees': 'TextEdit', 'pointID': 'Range', 'PointDistance': 'TextEdit', 'ValueMill': 'Range', 'Rings_ValueUpliftPerPoint': 'TextEdit', 'Rings_CarTripsPerPoint': 'Range', 'Rings_PopulationPerPoint': 'Range', });
lyr_ValueUpliftM_10.set('fieldImages', {'fid': 'Range', 'cngdegrees': 'TextEdit', 'pointID': 'Range', 'PointDistance': 'TextEdit', 'ValueMill': 'Range', 'Rings_ValueUpliftPerPoint': 'TextEdit', 'Rings_CarTripsPerPoint': 'Range', 'Rings_PopulationPerPoint': 'Range', });
lyr_PotentialStations_11.set('fieldImages', {'fid': 'Range', 'cngdegrees': 'TextEdit', 'pointID': 'Range', 'PointDistance': 'TextEdit', 'ValueMill': 'Range', 'Rings_ValueUpliftPerPoint': 'TextEdit', 'Rings_CarTripsPerPoint': 'Range', 'Rings_PopulationPerPoint': 'Range', });
lyr_WesternParklandCity_1.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'DISTRICT_NAME': 'hidden field', 'SYM_CODE': 'hidden field', 'PUBLISHED_DATE': 'hidden field', 'COMMENCED_DATE': 'hidden field', 'CURRENCY_DATE': 'hidden field', 'AMENDMENT': 'hidden field', 'PCO_REF_KEY': 'hidden field', 'LEG_REF_AREA': 'hidden field', 'LEG_REF_CLAUSE': 'hidden field', 'LEG_REF_VALUE': 'hidden field', 'MAP_TYPE': 'hidden field', 'MAP_NAME': 'hidden field', 'LAY_NAME': 'hidden field', 'LAY_CLASS': 'hidden field', 'LABEL': 'hidden field', 'SHAPE.STArea()': 'hidden field', 'SHAPE.STLength()': 'hidden field', });
lyr_LocalGovernmentArea_2.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'LGA_CODE_2021': 'hidden field', 'LGA_NAME_2021': 'hidden field', 'STATE_CODE_2021': 'hidden field', 'STATE_NAME_2021': 'hidden field', 'AUS_CODE_2021': 'hidden field', 'AUS_NAME_2021': 'hidden field', 'AREA_ALBERS_SQKM': 'hidden field', 'ASGS_LOCI_URI_2021': 'hidden field', 'st_length(shape)': 'hidden field', 'st_area(shape)': 'hidden field', });
lyr_SWGArezonedorreleasedland_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Precint Status': 'no label', });
lyr_Threatenedecologicalcommunities_4.set('fieldLabels', {'fid': 'hidden field', 'TEC_NSW': 'hidden field', 'NSWLISTING': 'hidden field', 'SAIISTATUS': 'hidden field', 'SOURCE_POL': 'hidden field', 'SRCE_MU_NO': 'hidden field', 'SOURCE_MU': 'hidden field', 'AREA_HA': 'hidden field', 'RFS1050': 'hidden field', 'VERDATE': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_CurrentRoutes_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'shape_id': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'RouteID': 'hidden field', 'routes_agency_id': 'hidden field', 'routes_route_short_name': 'hidden field', 'routes_route_long_name': 'hidden field', 'routes_route_desc': 'hidden field', 'routes_route_type': 'hidden field', 'routes_route_color': 'hidden field', 'routes_route_text_color': 'hidden field', 'routes_exact_times': 'hidden field', 'agency_agency_name': 'hidden field', 'agency_agency_url': 'hidden field', 'agency_agency_timezone': 'hidden field', 'agency_agency_lang': 'hidden field', 'agency_agency_phone': 'hidden field', 'Colour': 'hidden field', });
lyr_FutureRoutes_6.set('fieldLabels', {'fid': 'hidden field', 'Descr': 'hidden field', 'Colour': 'hidden field', 'Colour2': 'hidden field', });
lyr_CurrentStations_7.set('fieldLabels', {'fid': 'hidden field', 'stop_id': 'hidden field', 'stop_code': 'hidden field', 'stop_name': 'hidden field', 'stop_lat': 'hidden field', 'stop_lon': 'hidden field', 'location_type': 'hidden field', 'parent_station': 'hidden field', 'wheelchair_boarding': 'hidden field', 'level_id': 'hidden field', 'platform_code': 'hidden field', });
lyr_2028CarTripsDay_8.set('fieldLabels', {'fid': 'hidden field', 'cngdegrees': 'hidden field', 'pointID': 'hidden field', 'PointDistance': 'hidden field', 'ValueMill': 'no label', 'Rings_ValueUpliftPerPoint': 'hidden field', 'Rings_CarTripsPerPoint': 'hidden field', 'Rings_PopulationPerPoint': 'hidden field', });
lyr_2028Population_9.set('fieldLabels', {'fid': 'hidden field', 'cngdegrees': 'hidden field', 'pointID': 'hidden field', 'PointDistance': 'hidden field', 'ValueMill': 'no label', 'Rings_ValueUpliftPerPoint': 'hidden field', 'Rings_CarTripsPerPoint': 'hidden field', 'Rings_PopulationPerPoint': 'hidden field', });
lyr_ValueUpliftM_10.set('fieldLabels', {'fid': 'hidden field', 'cngdegrees': 'hidden field', 'pointID': 'hidden field', 'PointDistance': 'hidden field', 'ValueMill': 'no label', 'Rings_ValueUpliftPerPoint': 'hidden field', 'Rings_CarTripsPerPoint': 'hidden field', 'Rings_PopulationPerPoint': 'hidden field', });
lyr_PotentialStations_11.set('fieldLabels', {'fid': 'hidden field', 'cngdegrees': 'hidden field', 'pointID': 'inline label - visible with data', 'PointDistance': 'hidden field', 'ValueMill': 'inline label - visible with data', 'Rings_ValueUpliftPerPoint': 'hidden field', 'Rings_CarTripsPerPoint': 'header label - visible with data', 'Rings_PopulationPerPoint': 'header label - visible with data', });
lyr_PotentialStations_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});