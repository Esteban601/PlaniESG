//= require amcharts/amcharts
//= require amcharts/serial
//= require amcharts/amstock
//= require amcharts/themes/iredge
//= require amcharts/es
//= require amcharts/amcharts
//= require amcharts/serial
//= require amcharts/amstock
//= require amcharts/themes/iredge
//= require amcharts/dashboard


if (locale == "es") {
    var fromText = "Desde ";
    var valor = "Valor ";
    var toText = "A ";
    var volumen = "Volumen ";
    var periodsText = "Periodos ";

}
else {
    var fromText = "From";
    var valor = "Value";
    var toText = "To";
    var volumen = "Volume";
    var periodsText = "Range";
}
var loaded = 0;
var chartData = [];
var ipcData = [];
$.ajax({
    dataType: "jsonp",
    url: "https://hkpy.irstrat.com/intradia/prices/9372?start=2015-07-10",
    data: {},
    jsonpCallback: 'callbackHistory',
    success: function (data) {
        chartData = data.prices.reverse() ;
        loaded +=1
        if(loaded>1){
            pintaChart()
        }
        //   var ipcData = data.ipc
    }
});
$.ajax({
    dataType: "jsonp",
    url: "https://hkpy.irstrat.com/intradia/prices/11?start=2015-07-10",
    data: {},
    jsonpCallback: 'callbackHistory2',
    success: function (data) {
        ipcData = data.prices.reverse() ;
        loaded +=1
        if(loaded>1){
            pintaChart()
        }
    }
    //   var ipcData = data.ipc
});
function pintaChart() {
    var chart2 = AmCharts.makeChart("chartdiv_894", {
        "fromText": fromText,
        "pathToImages": location.protocol + '//' + location.host + "/static/javascripts/amcharts/images/",
        "type": "stock",
        "theme": "none",
        "fontFamily": "Helvetica Neue",
        "dataSets":
            [{
                "title": "ELEMAT",
                "color": "orange",
                "fieldMappings":
                    [{
                        "fromField": "value",
                        "toField": "value"
                    }, {
                        "fromField": "date",
                        "toField": "date"
                    }, {
                        "fromField": "volume",
                        "toField": "volume"
                    }],
                // "compared": false,
                "categoryField": "date",
                "dataProvider": chartData,
            },
                {
                    "title": "IPC",
                    "color": "#0075C9",
                    "fieldMappings": [{
                        "fromField": "value",
                        "toField": "value"
                    }, {
                        "fromField": "date",
                        "toField": "date"
                    }, {
                        "fromField": "volume",
                        "toField": "volume"
                    }],
                    "compared": true,

                    "categoryField": "date",
                    "dataProvider": ipcData
                }
            ],
        "dataDateFormat": "YYYY-MM-DD",
        "panels": [
            {
                "title": valor,
                "percentHeight": 75,
                "percentWidth": 95,
                "recalculateToPercents": "whenComparing",
                "stockGraphs": [
                    {
                        "type": "line",
                        "id": "g1",
                        "valueField": "value",
                        "comparedGraphLineThickness": 2,
                        "columnWidth": 0.5,
                        "comparable": false,
                        "compareField": "value",
                        "showBalloon": true
                    }, {
                        "type": "line",
                        "id": "g2",
                        "valueField": "value",

                        "comparedGraphLineThickness": 2,
                        "columnWidth": 0.5,
                        "comparable": true,
                        "compareField": "value",
                        "showBalloon": true
                    }
                ],

                "stockLegend": {
                    "valueTextRegular": "",
                    "periodValueText": "[[value.close]]",
                    "periodValueTextRegular": "[[value.close]]",
                    "periodValueTextComparing": "[[percents.value.close]]%"
                }
            }, {
                "title": volumen,
                "percentHeight": 25,
                "marginTop": 1,
                "columnWidth": 0.6,
                "showCategoryAxis": false,

                "stockGraphs": [{
                    "valueField": "volume",
                    "openField": "open",
                    "type": "column",
                    "showBalloon": true,
                    "fillAlphas": 1,
                    "lineColor": "orange",
                    "fillColors": "orange",

                    "useDataSetColors": false
                }],

                "stockLegend": {
                    "markerType": "none",
                    "markerSize": 0,
                    "labelText": "",
                    "periodValueTextRegular": "[[value.close]]"
                },

                "valueAxes": [{
                    "usePrefixes": true
                }]
            }
        ],

        "panelsSettings": {
            //    "color": "#fff",
            "marginLeft": 60,
            "marginTop": 15,
            "marginBottom": 5,
            "marginRight": 20
        },

        "chartScrollbarSettings": {
            "graph": "g1",
            "graphType": "line",
            "usePeriod": "DD",
            "gridAlpha": 0,
            "selectedGraphFillAlpha": 0
        },


        "valueAxesSettings": {
            "gridAlpha": 0.1,
            "inside": false,
            "showLastLabel": true
        },
        "chartCursorSettings": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true
        },

        "legendSettings": {
            //"color": "#fff"
        },

        "stockEventsSettings": {
            "showAt": "low",
            "type": "pin"
        },

        "balloon": {
            "textAlign": "left",
            "offsetY": 10
        },
        "periodSelector": {
            "fromText": fromText,
            "toText": toText,
            "periodsText": periodsText,
            "position": "bottom",
            "periods": [{
                "period": "DD",
                "count": 10,
                "label": "10D"
            }, {
                "period": "MM",
                "count": 1,
                "label": "1M"
            }, {
                "period": "MM",
                "count": 4,
                "label": "4M"
            }, {
                "period": "YYYY",
                "count": 1,
                "label": "1A"
            }, {
                "period": "YYYY",
                "count": 2,
                "label": "2A",
                "selected": true
            }, {
                "period": "MAX",
                "label": "MÁX"
            }]
        }
    });
}
