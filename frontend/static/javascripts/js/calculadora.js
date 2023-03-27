/**
 * Created by yoidel on 9/7/2017.
 */
if (locale =="es")
{
    var periodos =["2T13","4T13","2T16","2T17","2T18"];
}else{
    var periodos =["2Q13","4Q13","2Q16","2Q17","2Q18"];
}

var distribuciones = [
    {
        "fecha":"2012-07-17",
        "fechaf":"2013-04-08",
        "perido":periodos[0],
        "value": 0.7
    },{
        "fecha":"2013-04-08",
        "fechaf":"2013-12-19",
        "perido":periodos[1],
        "value": 0.8
    },{
        "fecha":"2013-12-19",
        "fechaf":"2016-05-16",
        "perido":periodos[2],
        "value": 0.5
    },{
        "fecha":"2016-05-16",
        "fechaf":"2017-05-19",
        "perido":periodos[3],
        "value": 0.6
    },{
        "fecha":"2017-05-20",
        "fechaf":"2018-04-30",
        "perido":periodos[4],
        "value": 0.7
    }
];

/**UTILES**/
$.fn.datepicker.defaults.language = 'es';
Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
    ].join('-');
};

var date = new Date();
// console.log(date.yyyymmdd());

//
// console.log(numberWithCommas(123456))
// console.log(numberWithCommas(123456.12))


var cbis = 0;
var start_date = "0";
var end_date = "0";
var date_edate = Date.now();
var date_sdate = Date.now();
var fecha_inicio = new Date();
var dividendosRecibidos = 0;
// console.log(fecha_inicio.yyyymmdd(),"FECHA DE INICIO");
// var startDatePicker = {};
// Date.parse(distribuciones[0]["fecha"])
$(function () {
    loadDistributions();
    loadFirstHistory();
});

function loadDistributions() {
    $.ajax({
        // url:'http://localhost:3000/historicos2.json?callback=callback',
        url:'https://hkpy.irstrat.com/intradia/dividends/emiter/' + symbol_id,
        async: true,
        dataType: 'jsonp',
        // jsonpCallback: 'Callback',
        contentType: "application/json",
        success: function (data) {
            distribuciones = data;
        }
    });
}


function loadFirstHistory(){
    $.ajax({
        // url:'http://localhost:3000/historicos2.json?callback=callback',
        url:'https://hkpy.irstrat.com/intradia/first/'+symbol_id,
        async: true,
        dataType: 'jsonp',
        // jsonpCallback: 'Callback',
        contentType: "application/json",
        success: function(data) {
            fecha_inicio = new Date(Date.parse(data.intradia.date));
            console.log(data.intradia);
            console.log(data);
            initDatePikers(fecha_inicio);
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd
            }
            if (mm < 10) {
                mm = '0' + mm
            }
            today = yyyy + '-' + mm + '-' + dd;
             $("#end_date").attr("max", today);
        }
    });
}



function stringToDate(s) {
    var ret = NaN;
    var parts = s.split("-");
    date = new Date(parts[0], parts[1], parts[2]);
    if (!isNaN(date.getTime())) {
        ret = date;
    }
    return ret;
}

function initDatePikers(inicio) {
    console.log("initialized date picker",inicio);
    var dd = inicio.getDate();
    var mm = inicio.getMonth() + 1; //January is 0!
    var yyyy = inicio.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    $(".datepicker").datepicker({'format':'yyyy-mm-dd'});
    console.log("pickeado");
    minimo = yyyy + '-' + mm + '-' + dd;
     $("#start_date").attr("min", minimo);

    $('#end_date').on("change", function (event) {

        date_edate = stringToDate( $("#end_date").val());
        end_date =  $("#end_date").val();
        validarValores();
    });
    // $('#start_date').datepicker({endDate: date, startDate: inicio}).on("changeDate", function (e) {
    $('#start_date').on("change", function (event) {
        date_sdate = stringToDate($("#start_date").val());
        start_date = $("#start_date").val();
        console.log("START DATE",start_date);
        validarValores();
    });
}

$("#cbfis").on("change", function (a) {
    cbis = $(a.currentTarget).val();
    validarValores();
});

$("#calculate").on("click", function (a) {
    if (validarValores()) {
        calcularInversion(cbis, start_date, end_date);
    }
});

function validarValores() {
    var error = false;
    if (cbis <= 0 || isNaN(cbis)) {
        $("#group_cbfi").addClass("has-error");
        error = true;
    } else {
        $("#group_cbfi").removeClass("has-error");
    }
    if (start_date == 0 || start_date <= end_date || end_date == 0) {
        $(".group-fechas").removeClass("has-error");
    } else {
        error = true;
        $(".group-fechas").addClass("has-error");
    }
    if (start_date == 0 || end_date == 0) {
        error = true;
    }
    if (!error) {
        $("#calculate").removeClass("disabled");
    } else {
        if (!$("#calculate").hasClass("disabled")) {
            $("#calculate").addClass("disabled");
        }
    }
    return !error;
}

function calcularInversion(cbis, sd, ed) {

    if (cbis != 0 && sd != "0" && ed != "0") {
        // var api_url = "http://h-kont.herokuapp.com/api/laste/FMTY?date=";

        var start_url = api_url + sd;
        var end_url = api_url + ed;
        var difFecha = Math.floor((date_edate - date_sdate) / 86400000);
        $.ajax({
            dataType: "jsonp",
            url: start_url,
            data: {},
            jsonpCallback:"calculaPrecio1",
            success: function (data) {
                var cierre_i = data.intradia.price;
                var cant = parseInt(cbis);
                var div_recibido = calcularDistribuciones(cbis, sd, ed, cant);
                var monto = (cant * cierre_i).toFixed(2);
                $("#precio_i").html("$" + WithCommas2(cierre_i));
                $("#cantidad_i").html(cant);
                $("#monto_i").html("$" + WithCommas(monto));
                $.ajax({
                    dataType: "jsonp",
                    url: end_url,
                    data: {},
                    success: function (data) {
                        var cierre_f = data.intradia.price * 1;
                        var monto_f = cierre_f * cant;
                        var rendimiento = monto_f - monto;
                        var ganancias = rendimiento + dividendosRecibidos;

                        var rendimientop = ((monto_f / monto - 1) * 100).toFixed(2);

                        var total = div_recibido + (monto_f - monto);
                        var totalp = total / monto * 100.0;

                        var rendimientop2 = ((ganancias / monto) * 100);
                        var totalAnualizado = (rendimientop2 / (difFecha)) * 360;
                        // var totalAnualizado = (totalp / (difFecha)) * 360;


                        $("#precio_f").html("$" + WithCommas(cierre_f.toFixed(2)));
                        $("#monto_f").html("$" + WithCommas(monto_f.toFixed(2)));
                        $("#rendimiento").html("$" + WithCommas(rendimiento.toFixed(2)));
                        $("#rendimiento_p").html(WithCommas(rendimientop) + "%");

                        // $("#rendimiento_t").html("$" + WithCommas(total.toFixed(2)));
                        // $("#rendimiento_tp").html(WithCommas(totalp.toFixed(2)) + "%");

                        $("#rendimiento_t").html("$" + WithCommas2(ganancias));
                        // $("#rendimiento_t").html("$" + WithCommas2(monto_f - monto));

                        // $("#rendimiento_tp").html(WithCommas2(monto_f / (monto - 1)) + "%");
                        $("#rendimiento_tp").html(WithCommas(rendimientop2.toFixed(2)) + "%");

                        $("#rendimiento_a").html(WithCommas(totalAnualizado.toFixed((2))) + "%");
                        jQuery('#myModal').modal('show');
                    }
                });
            }
        });
    }
    // 2017-09-05
}

function calcularDistribuciones(cbis, sd, ed, cant) {

    var start = Date.parse(sd);
    var end = Date.parse(ed);
    var distribperiodo = 0;
    distribuciones.forEach(function (item, index) {
        var fecha_f = Date.parse(item.date);
        if (start <= fecha_f && end >= fecha_f) {
            distribperiodo += parseFloat(item.value) * 1;
        }
    });
    var result2 = cbis * distribperiodo;
    var dividendos_p = (distribperiodo * 10000) / 10000;
    $("#cantidad_d").html(WithCommas(cant));
    $("#dividendos_p").html("$" + WithCommas(Math.round(distribperiodo * 10000) / 10000));
    // $("#monto_d").html("$" + WithCommas(Math.round(result2 * 10000) / 10000));
    dividendosRecibidos = cant * dividendos_p;
    $("#monto_d").html("$" + WithCommas2(dividendosRecibidos));
    return result2;

}

function WithCommas2(x) {

    var numbersString = Number.parseFloat(x).toFixed(2).toString();
    if (numbersString.indexOf(".") >= 0) {
        var arreglo = numbersString.split(".");
        var numberComa = arreglo[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return numberComa + "." + arreglo[1];
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}

function WithCommas(x) {

    var numbersString = x.toString();
    if (numbersString.indexOf(".") >= 0) {
        var arreglo = numbersString.split(".");
        var numberComa = arreglo[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return numberComa + "." + arreglo[1];
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}
