AmCharts.theme = AmCharts.themes.light;

if (locale == "es") {
    var chart1_title = "Consumo de energía hoteles (GJ)"
    var chart2_title = "Intensidad energética hoteles (GJ/cuarto)"
    var chart3_title = "Emisiones alcance 1 y 2 (TonCO2eq)"
    var chart4_title = "Intensidad de emisiones en hoteles (TonCO2eq/cuarto)"
    var chart5_title = "Consumo de agua (m3)"
    var chart6_title = "Intensidad hídrica en hoteles (m3/cuarto)"
} else {
    var chart1_title = "Consumo de energía hoteles (GJ)"
    var chart2_title = "Intensidad energética hoteles (GJ/cuarto)"
    var chart3_title = "Emisiones alcance 1 y 2 (TonCO2eq)"
    var chart4_title = "Intensidad de emisiones en hoteles (TonCO2eq/cuarto)"
    var chart5_title = "Consumo de agua (m3)"
    var chart6_title = "Intensidad hídrica en hoteles (m3/cuarto)"
}

var chart1 = AmCharts.makeChart("chart1", {
    "type": "serial",
    "theme": "none",
    "titles": [
        {
            "text": chart1_title,
            "size": 15
        },
        {
            "text": "",
            "size": 12
        },
    ],
    "dataProvider": [{
        "year": 2020,
        "value": 115148,
        "color": "#139a63"
    }, {
        "year": 2021,
        "value": 158361,
        "color": "#005cb0"
    }],
    "valueAxes": [{
        "axisAlpha": 1,
        "gridAlpha": 0,
        "labelsEnabled": true,
        "totalText": "[[total]]",
        "labelFunction": function (valueText, date, valueAxis) {
            if (valueText == 0)
                return "-";
            return valueText;
        },
        "minimum": "0",
        "maximum": "300000",
        "autoGridCount": false,
        "gridCount": 7,
    }],
    "graphs": [{
        "balloonText": "<b>[[value]]</b>",
        "fillAlphas": 1,
        "colorField": "color",
        "labelText": "[[value]]",
        "lineAlpha": 0,
        "title": chart1_title,
        "type": "column",
        "color": "#000000",
        "valueField": "value",
        // "columnWidth": 0.5,
    }],
    "categoryField": "year",
    "categoryAxis": {
        "axisAlpha": 1,
        "gridAlpha": 0,
    },
});

var chart2 = AmCharts.makeChart("chart2", {
    "type": "serial",
    "theme": "none",
    "titles": [
        {
            "text": chart2_title,
            "size": 15
        },
        {
            "text": "",
            "size": 12
        },
    ],
    "dataProvider": [{
        "year": 2020,
        "value": 18.00,
        "color": "#139a63"
    }, {
        "year": 2021,
        "value": 27.72,
        "color": "#005cb0"
    }],
    "valueAxes": [{
        "axisAlpha": 1,
        "gridAlpha": 0,
        "labelsEnabled": true,
        "totalText": "[[total]]",
        "labelFunction": function (valueText, date, valueAxis) {
            if (valueText == 0)
                return "-";
            return valueText;
        },
        "minimum": "0",
        "maximum": "60",
        "autoGridCount": false,
        "gridCount": 7,
    }],
    "graphs": [{
        "balloonText": "<b>[[value]]</b>",
        "fillAlphas": 1,
        "colorField": "color",
        "labelText": "[[value]]",
        "lineAlpha": 0,
        "title": chart2_title,
        "type": "column",
        "color": "#000000",
        "valueField": "value",
        // "columnWidth": 0.5,
    }],
    "categoryField": "year",
    "categoryAxis": {
        "axisAlpha": 1,
        "gridAlpha": 0,
    },
});

var chart3 = AmCharts.makeChart("chart3", {
    "type": "serial",
    "theme": "none",
    "titles": [
        {
            "text": chart3_title,
            "size": 15
        },
        {
            "text": "",
            "size": 12
        },
    ],
    "dataProvider": [{
        "year": 2020,
        "value": 12137,
        "color": "#139a63"
    }, {
        "year": 2021,
        "value": 15931,
        "color": "#005cb0"
    }],
    "valueAxes": [{
        "axisAlpha": 1,
        "gridAlpha": 0,
        "labelsEnabled": true,
        "totalText": "[[total]]",
        "labelFunction": function (valueText, date, valueAxis) {
            if (valueText == 0)
                return "-";
            return valueText;
        },
        "minimum": "0",
        "maximum": "30000",
        "autoGridCount": false,
        "gridCount": 7,
    }],
    "graphs": [{
        "balloonText": "<b>[[value]]</b>",
        "fillAlphas": 1,
        "colorField": "color",
        "labelText": "[[value]]",
        "lineAlpha": 0,
        "title": chart3_title,
        "type": "column",
        "color": "#000000",
        "valueField": "value",
        // "columnWidth": 0.5,
    }],
    "categoryField": "year",
    "categoryAxis": {
        "axisAlpha": 1,
        "gridAlpha": 0,
    },
});

var chart4 = AmCharts.makeChart("chart4", {
    "type": "serial",
    "theme": "none",
    "titles": [
        {
            "text": chart4_title,
            "size": 15
        },
        {
            "text": "",
            "size": 12
        },
    ],
    "dataProvider": [{
        "year": 2020,
        "value": 1.95,
        "color": "#139a63"
    }, {
        "year": 2021,
        "value": 2.78,
        "color": "#005cb0"
    }],
    "valueAxes": [{
        "axisAlpha": 1,
        "gridAlpha": 0,
        "labelsEnabled": true,
        "totalText": "[[total]]",
        "labelFunction": function (valueText, date, valueAxis) {
            if (valueText == 0)
                return "-";
            return valueText;
        },
        "minimum": "0",
        "maximum": "6",
        "autoGridCount": false,
        "gridCount": 7,
    }],
    "graphs": [{
        "balloonText": "<b>[[value]]</b>",
        "fillAlphas": 1,
        "colorField": "color",
        "labelText": "[[value]]",
        "lineAlpha": 0,
        "title": chart4_title,
        "type": "column",
        "color": "#000000",
        "valueField": "value",
        // "columnWidth": 0.5,
    }],
    "categoryField": "year",
    "categoryAxis": {
        "axisAlpha": 1,
        "gridAlpha": 0,
    },
});

var chart5 = AmCharts.makeChart("chart5", {
    "type": "serial",
    "theme": "none",
    "titles": [
        {
            "text": chart5_title,
            "size": 15
        },
        {
            "text": "",
            "size": 12
        },
    ],
    "dataProvider": [{
        "year": 2020,
        "value": 350441,
        "color": "#139a63"
    }, {
        "year": 2021,
        "value": 411528,
        "color": "#005cb0"
    }],
    "valueAxes": [{
        "axisAlpha": 1,
        "gridAlpha": 0,
        "labelsEnabled": true,
        "totalText": "[[total]]",
        "labelFunction": function (valueText, date, valueAxis) {
            if (valueText == 0)
                return "-";
            return valueText + ' m3';
        },
        "minimum": "0",
        "maximum": "800000",
        "autoGridCount": false,
        "gridCount": 9,
    }],
    "graphs": [{
        "balloonText": "<b>[[value]]</b>",
        "fillAlphas": 1,
        "colorField": "color",
        "labelText": "[[value]]",
        "lineAlpha": 0,
        "title": chart5_title,
        "type": "column",
        "color": "#000000",
        "valueField": "value",
        // "columnWidth": 0.5,
    }],
    "categoryField": "year",
    "categoryAxis": {
        "axisAlpha": 1,
        "gridAlpha": 0,
    },
});

var chart6 = AmCharts.makeChart("chart6", {
    "type": "serial",
    "theme": "none",
    "titles": [
        {
            "text": chart6_title,
            "size": 15
        },
        {
            "text": "",
            "size": 12
        },
    ],
    "dataProvider": [{
        "year": 2020,
        "value": 62.00,
        "color": "#139a63"
    }, {
        "year": 2021,
        "value": 74.27,
        "color": "#005cb0"
    }],
    "valueAxes": [{
        "axisAlpha": 1,
        "gridAlpha": 0,
        "labelsEnabled": true,
        "totalText": "[[total]]",
        "labelFunction": function (valueText, date, valueAxis) {
            if (valueText == 0)
                return "-";
            return valueText + ' m3';
        },
        "minimum": "0",
        "maximum": "180",
        "autoGridCount": false,
        "gridCount": 10,
    }],
    "graphs": [{
        "balloonText": "<b>[[value]]</b>",
        "fillAlphas": 1,
        "colorField": "color",
        "labelText": "[[value]]",
        "lineAlpha": 0,
        "title": chart6_title,
        "type": "column",
        "color": "#000000",
        "valueField": "value",
        // "columnWidth": 0.5,
    }],
    "categoryField": "year",
    "categoryAxis": {
        "axisAlpha": 1,
        "gridAlpha": 0,
    },
});
