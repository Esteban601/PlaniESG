AmCharts.theme = AmCharts.themes.light;

if (locale == "es") {
    var chart1_title = "Consumo de Energía Centros Comerciales (kWh)"
    var chart2_title = "Consumo de Agua Centros Comerciales (m3)"
    var chart3_title = "Emisiones alcance 1 y 2 (CO2e)"
    var chart4_title = "Intensidad de emisiones en plazas comerciales (Co2e/plaza)"
} else {
    var chart1_title = "Consumo de Energía Centros Comerciales (kWh)"
    var chart2_title = "Consumo de Agua Centros Comerciales (m3)"
    var chart3_title = "Emisiones alcance 1 y 2 (CO2e)"
    var chart4_title = "Intensidad de emisiones en plazas comerciales (Co2e/plaza)"
}

var chart1 = AmCharts.makeChart("chart1", {
    "type": "serial",
    "theme": "none",
    "titles": [
        {
            "text": chart1_title,
            "size": 15
        },
        // {
        //     "text": "",
        //     "size": 12
        // },
    ],
    "dataProvider": [{
        "year": 2020,
        "value": 100000,
        "color": "#005cb0"
    }, {
        "year": 2021,
        "value": 150000,
        "color": "#005cb0"
    }, {
        "year": 2022,
        "value": 175000,
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
        "maximum": "250000",
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
        // {
        //     "text": "",
        //     "size": 12
        // },
    ],
    "dataProvider": [{
        "year": 2020,
        "value": 100000,
        "color": "#005cb0"
    }, {
        "year": 2021,
        "value": 150000,
        "color": "#005cb0"
    }, {
        "year": 2022,
        "value": 175000,
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
        "maximum": "250000",
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
        // {
        //     "text": "",
        //     "size": 12
        // },
    ],
    "dataProvider": [{
        "year": 2020,
        "value": 100000,
        "color": "#005cb0"
    }, {
        "year": 2021,
        "value": 150000,
        "color": "#005cb0"
    }, {
        "year": 2022,
        "value": 175000,
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
        "maximum": "250000",
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
        // {
        //     "text": "",
        //     "size": 12
        // },
    ],
    "dataProvider": [{
        "year": 2020,
        "value": 4.5,
        "color": "#005cb0"
    }, {
        "year": 2021,
        "value": 2.5,
        "color": "#005cb0"
    }, {
        "year": 2022,
        "value": 3.1,
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
