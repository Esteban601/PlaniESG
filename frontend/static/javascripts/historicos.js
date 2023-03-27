/**
 * Created by Julio Cesar on 6/23/2015.
 */
var precios = [];
console.log("gg");
$.ajax({
    url:'https://hkpy.irstrat.com/intradia/history/9372?start=2015-07-10',
    async: true,
    dataType: 'jsonp',
    // jsonpCallback: 'Callback',
    contentType: "application/json",
    success: function(json) {
        console.log("d")
        precios = json.precios;
        llenarTabla(precios);
    }
});

function llenarTabla(precios) {
    console.log("LLENANDO DATOS",precios    )
    var datos = [];
    for(var i=1; i < precios.length;i++){
        volume=numberWithCommas(precios[i].volume);
        if (volume == 0 ||precios[i].close == 0.0 || precios[i].low == 0.0) {
            continue;
        }
        if(precios[i].open == 0 ){
            precios[i].open = precios[i].low
        }
        console.log("agregndo datos");
        datos.push([precios[i].date,parseFloat(precios[i].close).toFixed(2),parseFloat(precios[i].open).toFixed(2),parseFloat(precios[i].hight).toFixed(2),parseFloat(precios[i].low).toFixed(2),parseFloat(precios[i].adjusted).toFixed(2),volume]);
    }

    if (locale =="es") {
        $('#datatable').dataTable({
            destroy: true,
            "aaData": datos,
            "aaSorting": [[0, "desc"]],
            "columnDefs":[{"orderable":false,"targets":0},
                {"orderable":false,"targets":1},
                {"orderable":false,"targets":2},
                {"orderable":false,"targets":3},
                {"orderable":false,"targets":4},
                {"orderable":false,"targets":5}
                // {"orderable":false,"targets":6}
            ],
            "oLanguage": {
                "sProcessing": "Procesando...",
                "sLengthMenu": "Mostrar en bloques de _MENU_ registros",
                "sZeroRecords": "No se encontraron resultados",
                "sInfo": "Mostrando desde _START_ hasta _END_ de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando desde 0 hasta 0 de 0 registros",
                "sInfoFiltered": "(filtrado de _MAX_ registros en total)",
                "sInfoPostFix": "",
                "sSearch": "Buscar:",
                "sUrl": "",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sPrevious": "Anterior",
                    "sNext": "Siguiente",
                    "sLast": "Último",
                }
            },
            "bProcessing": true,
            "sDom": "<'row'<'col-sm-4'l><'col-sm-8'f>r>t<'row'<'col-sm-4 ie-col-8'i><'col-sm-8 ie-col-8'p>>",
            "sPaginationType": "full",
            'createdRow': function(row, data, dataIndex) {
                $('td:eq(0)', row).css('min-width', '80px');
                $('td:eq(0)', row).attr("data-content", 'Fecha');
                $('td:eq(1)', row).attr("data-content", 'Cierre');
                $('td:eq(2)', row).attr("data-content", 'Apertura');
                $('td:eq(3)', row).attr("data-content", 'Máximo');
                $('td:eq(4)', row).attr("data-content", 'Mínimo');
                // $('td:eq(5)', row).attr("data-content", 'Cierre ajustado');
                $('td:eq(5)', row).attr("data-content", 'Volumen');

            }
        });
    }
    else{
        $('#datatable').dataTable({
            destroy: true,
            "aaData": datos,
            "aaSorting": [[0, "desc"]],
            "sDom": "<'row'<'col-sm-4'l><'col-sm-8'f>r>t<'row'<'col-sm-4'i><'col-sm-8'p>>",
            "sPaginationType": "full",
        });
    };
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
