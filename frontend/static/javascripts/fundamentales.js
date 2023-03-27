var divP = $('#select_grafico').val();
$('#' + divP).removeClass('hidden');

var accion = $('#select_accion').val();
$('#' + accion).removeClass('hidden');

$('#select_grafico').change(function (event) {
    var id = $(this).val();
    console.log(id)
    var g = $('#' + id).attr('data-divG');
    console.log(g)
    $('div#fundamentales>div[id^="g"][class!="hidden"]').addClass('hidden');
    console.log('#' + $(this).val())
    $('#' + $(this).val()).removeClass('hidden');

    AmCharts.makeChart(g, configFundamentales[id]);

});


$('#select_accion').change(function (event) {
    var id = $(this).val();
    $('div#acciones>div[id^="a"][class!="hidden"]').addClass('hidden');
    $('#' + $(this).val()).removeClass('hidden');

});

// });

/*==============================
 Chart Resultados
 ===============================*/
// if (locale == "es")
var re_ventas = "Ingresos Totales";
var re_operacion = "Utilidad de operación";
var re_utilidad_neta = "Utilidad neta";
var re_noi = "NOI";
var re_ebitda = "EBITDA ajustado";

var chart = AmCharts.makeChart("chart_resultados", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        {
            "text": "Resultados",
            "size": 15
        },
        {
            "text": "(miles de pesos)",
            "size": 12
        }
    ],
    "colors": ["#a1cc4b", "#499cd3", "#f8bd2a", "#ec3e32", "#e6e43d", "#3669af"],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
    },
    "trendLines": [],
    "graphs": [
        {
            "balloonText": re_ventas + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": re_ventas,
            "type": "column",
            "valueField": "re_ventas"
        },

        {
            "balloonText": re_operacion + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-3",
            "lineAlpha": 0.2,
            "title": re_operacion,
            "type": "column",
            "valueField": "re_operacion"
        },
        {
            "balloonText": re_utilidad_neta + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-6",
            "lineAlpha": 0.2,
            "title": re_utilidad_neta,
            "type": "column",
            "valueField": "re_utilidad_neta"
        },

        {
            "balloonText": re_noi + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-6",
            "lineAlpha": 0.2,
            "title": re_noi,
            "type": "column",
            "valueField": "re_noi"
        },

        {
            "balloonText": re_ebitda + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-6",
            "lineAlpha": 0.2,
            "title": re_ebitda,
            "type": "column",
            "valueField": "re_ebitda"
        },
    ],
    "guides": [],
    "valueAxes": [
        {
            "unit": "$",
            "unitPosition": "left",
            "autoGridCount": false,
            "gridCount": 12,
            "position": "left",
            "axisAlpha": 0,
        }
    ],
    "legend": {
        "align": "center",
        "position": "bottom",
        "right": -4,

        "color": "gray",
        "textClickEnabled": true
    },
    "balloon": {},
    "dataProvider": [
        {
            "year": "9M20",
            "re_ventas": 813392,
            "re_operacion": -177118,
            "re_utilidad_neta": 15797,
            "re_noi": 480517,
            "re_ebitda": 557595
        },

        {
            "year": "2019",
            "re_ventas": 1220694,
            "re_operacion": 1427024,
            "re_utilidad_neta": 533727,
            "re_noi": 1014001,
            "re_ebitda": 835888
        },

        {
            "year": "2018",
            "re_ventas": 998617,
            "re_operacion": 1555829,
            "re_utilidad_neta": 820385,
            "re_noi": 838858,
            "re_ebitda": 592068
        },

        {
            "year": "2017",
            "re_ventas": 833003,
            "re_operacion": 1262231,
            "re_utilidad_neta": 709138,
            "re_noi": 688127,
            "re_ebitda": 426218

        }
    ],
    "export": {
        "enabled": true
    }

});


/*==============================
 Chart Situacion Financiera
 ===============================*/
// if (locale == "es") {
var sf_efectivo = "Efectivo y equivalentes";
var sf_inversion = "Propiedades de inversión";
var sf_activo = "Total de activos";
var sf_pasivo = "Total de pasivos";
var sf_capital = "Total de capital contable";


/*==============================
 Chart Indicadores Operativos
 ===============================*/
// if (locale == "es") {
var io_uneta_sobre_itotales = "Utilidad neta/ingresos totales";
var io_noi_sobre_itotales = "NOI/ingresos totales";
var io_ebitda_sobre_itotales = "EBITDA/ingresos totales";
/*==============================
 Chart Razones de liquidez y apalancamiento
 ===============================*/
// if (locale == "es") {
var rla_tac_sobre_tpc = "Total activo circulante/total pasivo circulante";
var rla_tac_sobre_tp = "Total activo circulante/total de pasivos";
var rla_tanc_sobre_tcc = "Total pasivo no circulante/total de capital contable";
var rla_dneta_sobre_ebitda = "Deuda Neta/EBITDA"
var configFundamentales = {
    g1: {
        "type": "serial",
        "theme": "light",
        "categoryField": "year",
        "rotate": false,
        "startDuration": 1,
        "titles": [
            {
                "text": "Resultados",
                "size": 15
            },
            {
                "text": "(miles de pesos)",
                "size": 12
            }
        ],
        "colors": ["#a1cc4b", "#499cd3", "#f8bd2a", "#ec3e32", "#e6e43d", "#3669af"],
        "categoryAxis": {
            "gridPosition": "start",
            "position": "left"
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": re_ventas + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": re_ventas,
                "type": "column",
                "valueField": "re_ventas"
            },

            {
                "balloonText": re_operacion + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-3",
                "lineAlpha": 0.2,
                "title": re_operacion,
                "type": "column",
                "valueField": "re_operacion"
            },
            {
                "balloonText": re_utilidad_neta + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-6",
                "lineAlpha": 0.2,
                "title": re_utilidad_neta,
                "type": "column",
                "valueField": "re_utilidad_neta"
            },

            {
                "balloonText": re_noi + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-6",
                "lineAlpha": 0.2,
                "title": re_noi,
                "type": "column",
                "valueField": "re_noi"
            },

            {
                "balloonText": re_ebitda + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-6",
                "lineAlpha": 0.2,
                "title": re_ebitda,
                "type": "column",
                "valueField": "re_ebitda"
            },
        ],
        "guides": [],
        "valueAxes": [
            {
                "unit": "$",
                "unitPosition": "left",
                "autoGridCount": false,
                "gridCount": 12,
                "position": "left",
                "axisAlpha": 0,
            }
        ],
        "legend": {
            "align": "center",
            "position": "bottom",
            "right": -4,

            "color": "gray",
            "textClickEnabled": true
        },
        "balloon": {},
        "dataProvider": [
            {
                "year": "9M20",
                "re_ventas": 813392,
                "re_operacion": -177118,
                "re_utilidad_neta": 15797,
                "re_noi": 480517,
                "re_ebitda": 557595
            },

            {
                "year": "2019",
                "re_ventas": 1220694,
                "re_operacion": 1427024,
                "re_utilidad_neta": 533727,
                "re_noi": 1014001,
                "re_ebitda": 835888
            },

            {
                "year": "2018",
                "re_ventas": 998617,
                "re_operacion": 1555829,
                "re_utilidad_neta": 820385,
                "re_noi": 838858,
                "re_ebitda": 592068
            },

            {
                "year": "2017",
                "re_ventas": 833003,
                "re_operacion": 1262231,
                "re_utilidad_neta": 709138,
                "re_noi": 688127,
                "re_ebitda": 426218

            }
        ],
        "export": {
            "enabled": true
        }
    },
    g2: {
        "type": "serial",
        "theme": "light",
        "categoryField": "year",
        "rotate": false,
        "startDuration": 1,
        "colors": ["#a1cc4b", "#499cd3", "#f8bd2a", "#ec3e32", "#e6e43d", "#3669af", "#761317"],
        "categoryAxis": {
            "gridPosition": "start",
            "position": "left"
        },
        "titles": [
            {
                "text": "Situación financiera",
                "size": 15
            },
            {
                "text": "(miles de pesos)",
                "size": 12
            }
        ],
        "trendLines": [],
        "graphs": [
            {
                "balloonText": sf_efectivo + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": sf_efectivo,
                "type": "column",
                "valueField": "sf_efectivo"
            },
            {
                "balloonText": sf_inversion + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "lineAlpha": 0.2,
                "title": sf_inversion,
                "type": "column",
                "valueField": "sf_inversion"
            },
            {
                "balloonText": sf_activo + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-3",
                "lineAlpha": 0.2,
                "title": sf_activo,
                "type": "column",
                "valueField": "sf_activo"
            },
            {
                "balloonText": sf_pasivo + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-4",
                "lineAlpha": 0.2,
                "title": sf_pasivo,
                "type": "column",
                "valueField": "sf_pasivo"
            },
            {
                "balloonText": sf_capital + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-6",
                "lineAlpha": 0.2,
                "title": sf_capital,
                "type": "column",
                "valueField": "sf_capital"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "unit": "$",
                "unitPosition": "left",
                "id": "ValueAxis-1",
                "position": "left",
                "axisAlpha": 0
            }
        ], "legend": {
            "align": "center",
            "position": "bottom",
            "right": -4,

            "color": "gray",
            "textClickEnabled": true
        },
        "allLabels": [],
        "balloon": {},
        "dataProvider": [
            {
                "year": "9M20",
                "sf_efectivo": 3805957,
                "sf_inversion": 12872041,
                "sf_activo": 18406248,
                "sf_pasivo": 8374037,
                "sf_capital": 10032211
            },
            {
                "year": "2019",
                "sf_efectivo": 555103,
                "sf_inversion": 13406521,
                "sf_activo": 15149168,
                "sf_pasivo": 8686151,
                "sf_capital": 6463017
            },
            {
                "year": "2018",
                "sf_efectivo": 705918,
                "sf_inversion": 12309650,
                "sf_activo": 14269222,
                "sf_pasivo": 8537434,
                "sf_capital": 5731788
            },
            {
                "year": "2017",
                "sf_efectivo": 263405,
                "sf_inversion": 10221513,
                "sf_activo": 11887487,
                "sf_pasivo": 6909680,
                "sf_capital": 4977807
            }

        ],
        "export": {
            "enabled": true
        }

    },
    g3: {
        "type": "serial",
        "theme": "light",
        "categoryField": "year",
        "rotate": false,
        "startDuration": 1,
        "titles": [
            {
                "text": "Indicadores operativos*",
                "size": 15
            },
            {
                "text": "(%)",
                "size": 12
            }
        ],
        "colors": ["#a1cc4b", "#499cd3", "#f8bd2a", "#ec3e32", "#e6e43d", "#3669af", "#761317"],
        "categoryAxis": {
            "gridPosition": "start",
            "position": "left"
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": io_uneta_sobre_itotales + ": [[value]]%",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": io_uneta_sobre_itotales,
                "type": "column",
                "valueField": "io_uneta_sobre_itotales"
            },
            {
                "balloonText": io_noi_sobre_itotales + ": [[value]]%",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "lineAlpha": 0.2,
                "title": io_noi_sobre_itotales,
                "type": "column",
                "valueField": "io_noi_sobre_itotales"
            },
            {
                "balloonText": io_ebitda_sobre_itotales + ": [[value]]%",
                "fillAlphas": 1,
                "id": "AmGraph-3",
                "lineAlpha": 0.2,
                "title": io_ebitda_sobre_itotales,
                "type": "column",
                "valueField": "io_ebitda_sobre_itotales"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "unit": "%",
                "unitPosition": "left",
                "id": "ValueAxis-1",
                "position": "left",
                "axisAlpha": 0
            }
        ], "legend": {
            "align": "center",
            "position": "bottom",
            "right": -4,
            "color": "gray",
            "textClickEnabled": true
        },
        "allLabels": [],
        "balloon": {},
        "dataProvider": [
            {
                "year": "9M20",
                "io_uneta_sobre_itotales": 1.9,
                "io_noi_sobre_itotales": 59.1,
                "io_ebitda_sobre_itotales": 68.6
            },
            {
                "year": "2019",
                "io_uneta_sobre_itotales": 43.7,
                "io_noi_sobre_itotales": 83.1,
                "io_ebitda_sobre_itotales": 68.5
            },
            {
                "year": "2018",
                "io_uneta_sobre_itotales": 82.2,
                "io_noi_sobre_itotales": 84.0,
                "io_ebitda_sobre_itotales": 59.3
            },
            {
                "year": "2017",
                "io_uneta_sobre_itotales": 85.1,
                "io_noi_sobre_itotales": 82.6,
                "io_ebitda_sobre_itotales": 51.2
            }
        ],
        "export": {
            "enabled": true
        }

    },
    g4: {
        "type": "serial",
        "theme": "light",
        "categoryField": "year",
        "rotate": false,
        "startDuration": 1,
        "titles": [
            {
                "text": "Razones de liquidez y apalancamiento*",
                "size": 15
            },
            {
                "text": "(veces)",
                "size": 12
            }
        ],
        "colors": ["#a1cc4b", "#499cd3", "#f8bd2a", "#ec3e32", "#e6e43d", "#3669af", "#761317"],
        "categoryAxis": {
            "gridPosition": "start",
            "position": "left"
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": rla_tac_sobre_tpc + ": [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": rla_tac_sobre_tpc,
                "type": "column",
                "valueField": "rla_tac_sobre_tpc"
            },
            {
                "balloonText": rla_tac_sobre_tp + ": [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "lineAlpha": 0.2,
                "title": rla_tac_sobre_tp,
                "type": "column",
                "valueField": "rla_tac_sobre_tp"
            },
            {
                "balloonText": rla_tanc_sobre_tcc + ": [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-3",
                "lineAlpha": 0.2,
                "title": rla_tanc_sobre_tcc,
                "type": "column",
                "valueField": "rla_tanc_sobre_tcc"
            },
            {
                "balloonText": rla_dneta_sobre_ebitda + ": [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-9",
                "lineAlpha": 0.2,
                "title": rla_dneta_sobre_ebitda,
                "type": "column",
                "valueField": "rla_dneta_sobre_ebitda"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "unit": "",
                "unitPosition": "left",
                "id": "ValueAxis-1",
                "position": "left",
                "axisAlpha": 0
            }
        ], "legend": {
            "align": "center",
            "position": "bottom",
            "right": -4,
            "color": "gray",
            "textClickEnabled": true
        },
        "allLabels": [],
        "balloon": {},
        "dataProvider": [
            {
                "year": "9M20",
                "rla_tac_sobre_tpc": 5.8,
                "rla_tac_sobre_tp": 0.52,
                "rla_tanc_sobre_tcc": 0.76,
                "rla_dneta_sobre_ebitda": 3.78
            },
            {
                "year": 2019,
               "rla_tac_sobre_tpc": 0.8,
                "rla_tac_sobre_tp": 0.12,
                "rla_tanc_sobre_tcc": 1.15,
                "rla_dneta_sobre_ebitda": 6.30
            },
            {
                "year": 2018,
                "rla_tac_sobre_tpc": 2.1,
                "rla_tac_sobre_tp": 0.16,
                "rla_tanc_sobre_tcc": 1.38,
                "rla_dneta_sobre_ebitda": 8.84
            },
            {
                "year": 2017,
               "rla_tac_sobre_tpc": 1.8,
                "rla_tac_sobre_tp": 0.15,
                "rla_tanc_sobre_tcc": 1.27,
                "rla_dneta_sobre_ebitda": 11.02
            },


        ],
        "export": {
            "enabled": true
        }

    }
};
