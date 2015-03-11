$(function() {

    var $provincias = $('#provincias');
    var $municipios = $('#municipios');
    var fillSelect = function($select, options) {
        for (var i in values) {
            options.push(new Option(provincias[i], i));
        }
        $provincias.children().remove();
        $provincias.append(options);
        $provincias.removeAttr('disabled');
    };

    $.getJSON('assets/servidor/cargaProvinciasJSON.php', null, function(provincias){

    	fillSelect($provincias,provincias);
    
    });
    $provincias.on('change', function(e) {
        var cp = $provincias.val();
        $ajax('assets/servidor/cargaMunicipiosJSON.php', {
            method: 'POST',
            data: {
                provincia: cp
            },
            dataType: 'json',
            success: function(municipios) {
            	fillSelect($municipios,municipios);
                console.log(municipios);
            }

        });

    });


    $.getJSON('assets/servidor/cargaMunicipiosJSON.php', null, function(data) {
        $municipios.text(data);

    });
});

/*var options=[];
//for
options.push(new Option(provincias[cp],cp));
$provincias.append(option);
*/
