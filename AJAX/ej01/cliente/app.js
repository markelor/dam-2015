$(function() {
    var $ticker = $('#ticker');
    var $detener = $('#detener');
    var peticionAjax = function() {
        /*$.ajax('../servidor/generaContenidos.php', {
           ata: {
                user: 'Markel',
                pass: '1234'
            },
            method: 'POST',
            success: function(data, status, jqXHR) {
                $ticker.text(data);

            }
            */
        $.get('../servidor/generaContenidos.php', null, function(data) {
            $ticker.text(data);

        });

    };
    var interval = setInterval(peticionAjax, 1000);
    $detener.on('click', function(e) {

        clearInterval(interval);
    });

});
