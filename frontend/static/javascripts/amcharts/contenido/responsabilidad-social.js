AmCharts.theme = AmCharts.themes.light;

if (locale == "es") {
    var chart1_title = "Colaboradores por división"
    var chart2_title = "Colaboradores por tipo de funciones"
} else {
    var chart1_title = "Colaboradores por división"
    var chart2_title = "Colaboradores por tipo de funciones"
}

var chart1 = AmCharts.makeChart("chart1", {
    "type": "pie",
    "titleField": "title",
    "valueField": "value",
    "titles": [
        {
            "text": chart1_title,
            "size": 15
        }
    ],
    "radius": "30%",
    "innerRadius": "0",
    "percentPrecision": "0",
    "labelRadiusField": "radius",
    "labelTickAlpha": 0.1,
    "colors": [
        '#03b7f1', '#3b5d87', '#cbcdce', '#0388cc', '#98cd48', '#e0f4fd', '#ed7028'
    ],
    "balloonText": "[[title]][[value]] ( [[percents]]% )",
    "labelText": "[[percents]]%",
    "dataProvider": [
        {
            "title": "Concesiones ",
            "value": 1826,
            // "radius": -40,
        },
        {
            "title": "Terminal del Puerto de Altamira ",
            "value": 797,
            // "radius": -40
        },
        {
            "title": "Materiales e insumos ",
            "value": 168,
            // "radius": -40
        },
        {
            "title": "Construcción ",
            "value": 44,
            // "radius": 20
        },
        {
            "title": "Honorarios ",
            "value": 47,
            "radius": 30
        },
        {
            "title": "Corporativo Central ",
            "value": 156,
            "radius": 40
        },
    ],
    "legend": {
        "maxColumns": 1,
        "align": "center",
    },
});

var chart2 = AmCharts.makeChart("chart2", {
    "type": "pie",
    "titleField": "title",
    "valueField": "value",
    "titles": [
        {
            "text": chart2_title,
            "size": 15
        }
    ],
    "radius": "30%",
    "innerRadius": "0",
    "percentPrecision": "0",
    // "labelRadiusField": "radius",
    "labelTickAlpha": 0.1,
    "colors": [
        '#03b7f1', '#3b5d87', '#cbcdce', '#0388cc', '#98cd48', '#e0f4fd', '#ed7028'
    ],
    "balloonText": "[[title]][[value]] ( [[percents]]% )",
    "labelText": "[[percents]]%",
    "dataProvider": [
        {
            "title": "Administración ",
            "value": 351,
            // "radius": -40,
        },
        {
            "title": "Operaciones ",
            "value": 2618,
            // "radius": -40
        },
        {
            "title": "Construcción e ingeniería ",
            "value": 44,
            // "radius": -40
        },
        {
            "title": "Directivos relevantes ",
            "value": 8,
            // "radius": 20
        },
        {
            "title": "Directivos ",
            "value": 17,
            // "radius": 40
        },
    ],
    "legend": {
        "maxColumns": 1,
        "align": "center",
    },
});
