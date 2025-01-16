var size = 0;
var placement = 'point';

var style_2028Population_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Rings_PopulationPerPoint");
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
    if (value >= 20557.000000 && value <= 28918.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
             fill: new ol.style.Fill({color: 'rgba(255,245,235,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 28918.000000 && value <= 46690.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
             fill: new ol.style.Fill({color: 'rgba(253,210,165,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 46690.000000 && value <= 91212.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
             fill: new ol.style.Fill({color: 'rgba(253,146,67,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 91212.000000 && value <= 101040.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
             fill: new ol.style.Fill({color: 'rgba(223,80,5,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 101040.000000 && value <= 144608.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
             fill: new ol.style.Fill({color: 'rgba(127,39,4,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
