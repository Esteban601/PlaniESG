AmCharts.theme = AmCharts.themes.light;

if (locale == "es") {
    var chart1_title = "Residuos que terminaron en vertederos (Kg)"
} else {
    var chart1_title = "Residuos que terminaron en vertederos (Kg)"
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
        "value": 136680,
        "color": "#139a63"
    }, {
        "year": 2021,
        "value": 233207,
        "color": "#005cb0"
    }],
    "valueAxes": [{
        "axisAlpha": 1,
        "gridAlpha": 0,
        "labelsEnabled": true,
        "totalText": "[[total]]",
        "maximum": "245000",
        // "autoGridCount": false,
        // "gridCount": 60,
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
