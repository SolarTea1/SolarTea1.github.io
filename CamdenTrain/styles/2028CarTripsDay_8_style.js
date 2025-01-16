var size = 0;
var placement = 'point';

var style_2028CarTripsDay_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Rings_CarTripsPerPoint");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 3369.000000 && value <= 5695.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
             fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5695.000000 && value <= 11353.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
             fill: new ol.style.Fill({color: 'rgba(200,220,240,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 11353.000000 && value <= 22150.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
             fill: new ol.style.Fill({color: 'rgba(115,178,216,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 22150.000000 && value <= 26477.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
             fill: new ol.style.Fill({color: 'rgba(41,121,185,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 26477.000000 && value <= 46951.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
             fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
