$(function() {
    var $provincias = $('#provincias');
    var $municipios = $('#municipios');

    var fillSelect = function($select, values) {
        var options = [];
        for (var i in values) {
            options.push(new Option(values[i], i));
        }

        $select.children().remove();
        $select.append(options);
        $select.removeAttr('disabled');


    };

     $.getJSON('assets/servidor/cargaProvinciasJSON.php', null, function(provincias) {
        fillSelect($provincias, provincias);
        console.log("data");

    });




    $provincias.on('change', function(e) {

        var provincias = $provincias.val();
        $.ajax('assets/servidor/cargaMunicipiosJSON.php', {

            method: 'POST',
            data: {

                provincia: provincias

            },

            dataType: 'json', //convierte lo que viene del servidor en json, misnmo nombre que en el servidor
            success: function(municipios) {
                fillSelect($municipios, municipios);
            }

        });
    });

});