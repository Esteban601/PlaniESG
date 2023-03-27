function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var plazoinversion = $('#plazoinversion');
var montoinicial = $('#montoinicial');
var depositomensual = $('#depositomensual');

var inversion_fmty = $('#inversion_fmty');
var inversion_tradicional = $('#inversion_tradicional');
var inversion_bancos = $('#inversion_bancos');
var years_label;
if (locale === 'es') {
    years_label = 'años'
} else {
    years_label = 'years'
}

const YEARS = (end) => {
    const years = [];
    const dateStart = moment('2020-01-01');
    const dateEnd = moment().add(end, 'y');
    while (dateEnd.diff(dateStart, 'years') >= 0) {
        years.push(dateStart.format('YYYY'));
        dateStart.add(1, 'year')
    }
    return years
};

var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "none",
    "colors": ["#194F90", "#7b868c", "#000000"],
    "marginRight": 30,
    "fontFamily": "RobotoRegular",
// "titles": [{
//     "text": "Traffic incidents per year",
//     "size": 15
// }],
// "legend": {
//     "align": "center",
//     "equalWidths": false,
//     "periodValueText": "total: [[value.sum]]",
//     "valueAlign": "left",
//     "valueText": "[[value]] ([[percents]]%)",
//     "valueWidth": 100
// },
    "dataProvider":
        [
            {year: 0, cars: 1000000, motorcycles: 1000000, bicycles: 1000000},
            {year: 1, cars: 1188000, motorcycles: 1155000, bicycles: 1120000},
            {year: 2, cars: 1392544.0000000005, motorcycles: 1318525, bicycles: 1242400},
            {year: 3, cars: 1615087.8720000007, motorcycles: 1491043.8749999995, bicycles: 1367248.000000001},
            {year: 4, cars: 1857215.604736001, motorcycles: 1673051.2881249995, bicycles: 1494592.9599999997},
            {year: 5, cars: 2120650.5779527696, motorcycles: 1865069.1089718738, bicycles: 1624484.8192},
            {year: 6, cars: 2407267.8288126136, motorcycles: 2067647.9099653265, bicycles: 1756974.5155840004},
            {year: 7, cars: 2719107.3977481234, motorcycles: 2281368.5450134194, bicycles: 1892114.0058956803},
            {year: 8, cars: 3058388.848749959, motorcycles: 2506843.8149891575, bicycles: 2029956.2860135944},
            {year: 9, cars: 3427527.0674399547, motorcycles: 2744720.224813561, bicycles: 2170555.411733866},
            {year: 10, cars: 3829149.4493746716, motorcycles: 2995679.837178306, bicycles: 2313966.519968544},
            {year: 11, cars: 4266114.6009196425, motorcycles: 3260442.2282231124, bicycles: 2460245.850367915},
            {year: 12, cars: 4741532.685800573, motorcycles: 3539766.5507753836, bicycles: 2609450.767375274},
            {year: 13, cars: 5258787.562151023, motorcycles: 3834453.7110680295, bicycles: 2761639.7827227795},
            {year: 14, cars: 5821560.8676203145, motorcycles: 4145348.6651767697, bicycles: 2916872.5783772343},
            {year: 15, cars: 6433858.223970901, motorcycles: 4473342.841761494, bicycles: 3075210.0299447794},
            {year: 16, cars: 7100037.747680342, motorcycles: 4819376.698058374, bicycles: 3236714.230543675},
            {year: 17, cars: 7824841.069476211, motorcycles: 5184442.416451585, bicycles: 3401448.515154549},
            {year: 18, cars: 8613427.083590118, motorcycles: 5569586.749356422, bicycles: 3569477.48545764},
            {year: 19, cars: 9471408.66694605, motorcycles: 5975914.020571025, bicycles: 3740867.0351667926},
            {year: 20, cars: 10404892.629637305, motorcycles: 6404589.29170243, bicycles: 3915684.3758701296},
            {year: 21, cars: 11420523.181045387, motorcycles: 6856841.7027460635, bicycles: 4093998.0633875327},
            {year: 22, cars: 12525529.220977383, motorcycles: 7333967.996397096, bicycles: 4275878.0246552825},
            {year: 23, cars: 13727775.792423394, motorcycles: 7837336.236198936, bicycles: 4461395.5851483885},
            {year: 24, cars: 15035820.062156653, motorcycles: 8368389.7291898765, bicycles: 4650623.496851357},
            {year: 25, cars: 16458972.22762644, motorcycles: 8928651.16429532, bicycles: 4843635.966788384},
            {year: 26, cars: 18007361.783657566, motorcycles: 9519726.97833156, bicycles: 5040508.686124152},
            {year: 27, cars: 19692009.62061944, motorcycles: 10143311.962139796, bicycles: 5241318.859846635},
            {year: 28, cars: 21524906.46723395, motorcycles: 10801194.120057484, bicycles: 5446145.237043569},
            {year: 29, cars: 23519098.23635054, motorcycles: 11495259.796660645, bicycles: 5655068.14178444},
            {year: 30, cars: 25688778.881149385, motorcycles: 12227499.08547698, bicycles: 5868169.504620129}
        ],
    "valueAxes": [{
        // "stackType": "100%",
        "gridAlpha": .5,
        "position": "left",
        // "title": "percent"
        "color": "#000000",
        "axisColor": "#000000",
    }],
    "graphs": [{
        // "balloonText": "<img src='https://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        // "balloonText": "<span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        "balloonFunction": function (item, content) {
            var html = "<span style='font-size:14px; color:#000000;'><b>" + numberWithCommas(item.dataContext.cars.toFixed()) + "</b></span>";
            return html;
        },
        "bullet": "round",
        "bulletSize": 5,
        "bulletBorderAlpha": 2,
        "useLineColorForBulletBorder": true,
        "bulletBorderThickness": 2,
        "fillAlphas": .5,
        "lineAlpha": 1,
        "title": "Cars",
        "valueField": "cars"
    }, {
        // "balloonText": "<img src='https://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        // "balloonText": "<span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        "balloonFunction": function (item, content) {
            var html = "<span style='font-size:14px; color:#000000;'><b>" + numberWithCommas(item.dataContext.motorcycles.toFixed()) + "</b></span>";
            return html;
        },
        "bullet": "round",
        "bulletSize": 5,
        "bulletBorderAlpha": 2,
        "useLineColorForBulletBorder": true,
        "bulletBorderThickness": 2,
        "fillAlphas": .5,
        "lineAlpha": 1,
        "title": "Motorcycles",
        "valueField": "motorcycles"
    }, {
        // "balloonText": "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        // "balloonText": "<span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        "balloonFunction": function (item, content) {
            var html = "<span style='font-size:14px; color:#000000;'><b>" + numberWithCommas(item.dataContext.bicycles.toFixed()) + "</b></span>";
            return html;
        },
        "bullet": "round",
        "bulletSize": 5,
        "bulletBorderAlpha": 2,
        "useLineColorForBulletBorder": true,
        "bulletBorderThickness": 2,
        "fillAlphas": .5,
        "lineAlpha": 1,
        "title": "Bicycles",
        "valueField": "bicycles"
    }],
    "plotAreaBorderAlpha": 0,
    "marginLeft": 0,
    "marginBottom": 0,
    "chartCursor": {
        "cursorAlpha": 0,
        "zoomable": false,
        "cursorColor": "#000000"
    }
    ,
    "categoryField":
        "year",
    "categoryAxis": {
        "startOnAxis": true,
        "axisColor": "#000000",
        "gridAlpha": 0,
        "color": "#000000",
        // "labelFunction": function (valueText, serialDataItem, categoryAxis) {
        //     // console.log(serialDataItem);
        //     if (categoryAxis.end == valueText) {
        //         return valueText + ' ' + years_label;
        //     } else {
        //         return valueText;
        //     }
        // }
    },
    "balloon": {
        "fontSize": 16,
    },
    "export": {
        "enabled":
            true
    },
});

$(function () {
    $("#propiedades-circle").attr("style", "opacity:0;left:100px");

    montoinicial.change(function () {
        that = parseInt($(this).val());
        $('#montoinicial_value').html(numberWithCommas(that));
        t = parseInt($('#plazoinversion').val());
        cr = parseInt($('#depositomensual').val());
        valor = (that * (Math.pow(1.088, t))) + (cr * ((Math.pow(1.088, t) - 1) / 0.088));
        valor2 = (that * (Math.pow(1.055, t))) + (cr * ((Math.pow(1.055, t) - 1) / 0.055));
        valor3 = (that * (Math.pow(1.02, t))) + (cr * ((Math.pow(1.02, t) - 1) / 0.02));
        inversion_fmty.html(numberWithCommas(valor.toFixed()));
        inversion_tradicional.html(numberWithCommas(valor2.toFixed()));
        inversion_bancos.html(numberWithCommas(valor3.toFixed()));

        var years = YEARS(t);

        var dataProvider = [];
        for (i = 1; i < years.length; i++) {
            valor = (that * (Math.pow(1.088, i - 1))) + (cr * ((Math.pow(1.088, i - 1) - 1) / 0.088));
            valor2 = (that * (Math.pow(1.055, i - 1))) + (cr * ((Math.pow(1.055, i - 1) - 1) / 0.055));
            valor3 = (that * (Math.pow(1.02, i - 1))) + (cr * ((Math.pow(1.02, i - 1) - 1) / 0.02));

            dataProvider.push({
                "year": (i - 1),
                "cars": valor,
                "motorcycles": valor2,
                "bicycles": valor3
            })
        }
        dataProvider.pop();
        chart.dataProvider = dataProvider;
        chart.validateData();
    });

    depositomensual.change(function () {
        that = parseInt($(this).val());
        $('#depositomensual_value').html(numberWithCommas(that));
        t = parseInt($('#plazoinversion').val());
        m = parseInt($('#montoinicial').val());
        valor = (m * (Math.pow(1.088, t))) + (that * ((Math.pow(1.088, t) - 1) / 0.088));
        valor2 = (m * (Math.pow(1.055, t))) + (that * ((Math.pow(1.055, t) - 1) / 0.055));
        valor3 = (m * (Math.pow(1.02, t))) + (that * ((Math.pow(1.02, t) - 1) / 0.02));
        inversion_fmty.html(numberWithCommas(valor.toFixed()));
        inversion_tradicional.html(numberWithCommas(valor2.toFixed()));
        inversion_bancos.html(numberWithCommas(valor3.toFixed()));

        var years = YEARS(t);

        var dataProvider = [];
        for (i = 1; i < years.length; i++) {
            valor = (m * (Math.pow(1.088, i - 1))) + (that * ((Math.pow(1.088, i - 1) - 1) / 0.088));
            valor2 = (m * (Math.pow(1.055, i - 1))) + (that * ((Math.pow(1.055, i - 1) - 1) / 0.055));
            valor3 = (m * (Math.pow(1.02, i - 1))) + (that * ((Math.pow(1.02, i - 1) - 1) / 0.02));

            dataProvider.push({
                "year": (i - 1),
                "cars": valor,
                "motorcycles": valor2,
                "bicycles": valor3
            })
        }
        dataProvider.pop();
        chart.dataProvider = dataProvider;
        chart.validateData();
    });

    plazoinversion.change(function () {
        that = parseInt($(this).val());
        $('#plazoinversion_value').html(that);
        m = parseInt($('#montoinicial').val());
        cr = parseInt($('#depositomensual').val());
        valor = (m * (Math.pow(1.088, that))) + (cr * ((Math.pow(1.088, that) - 1) / 0.088));
        valor2 = (m * (Math.pow(1.055, that))) + (cr * ((Math.pow(1.055, that) - 1) / 0.055));
        valor3 = (m * (Math.pow(1.02, that))) + (cr * ((Math.pow(1.02, that) - 1) / 0.02));
        inversion_fmty.html(numberWithCommas(valor.toFixed()));
        inversion_tradicional.html(numberWithCommas(valor2.toFixed()));
        inversion_bancos.html(numberWithCommas(valor3.toFixed()));

        var years = YEARS(that);

        var dataProvider = [];
        for (i = 1; i < years.length; i++) {
            valor = (m * (Math.pow(1.088, i - 1))) + (cr * ((Math.pow(1.088, i - 1) - 1) / 0.088));
            valor2 = (m * (Math.pow(1.055, i - 1))) + (cr * ((Math.pow(1.055, i - 1) - 1) / 0.055));
            valor3 = (m * (Math.pow(1.02, i - 1))) + (cr * ((Math.pow(1.02, i - 1) - 1) / 0.02));

            dataProvider.push({
                "year": (i - 1),
                "cars": valor,
                "motorcycles": valor2,
                "bicycles": valor3
            });
        }
        dataProvider.pop();
        chart.dataProvider = dataProvider;
        chart.validateData();
    });

});