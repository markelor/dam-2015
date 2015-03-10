$(function() {
    "use strict";

    // Obtener los elementos del DOM
    var status = document.getElementById('status'),
        input = document.getElementById('input'),
        content = $('#content');


    // Mi color asignado por el servidor
    var myColor = "purple";
    // Mi nick
    var myName = false;

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (!Modernizr.websockets) {
        return false;
    }

    // window.WebSocket = window.WebSocket || window.MozWebSocket;

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escuchar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.


    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');

    var socketOpen = function(e) {
        console.log("sockedOpened");
    };
    var socketClose = function(e) {
        console.log("el canal esta cerrado");
    };
    var socketError = function(e) {
        console.log("error"+error);
    };
    var handleMessage = function(e) {
        var json;
        try {
            json = JSON.parse(e.data);
        } catch (ex) {
            console.log('error' + e.data);

        }

        if (json) {
            switch (json.type) {
                case 'color':
                    myColor = json.data;
                    break;
                case 'history':
                    for (var i = 0; i < json.data.length; i++) {
                        var msg = json.data[i];
                        addMessage(
                            msg.author,
                            msg.text,
                            msg.color,
                            new Date(msg.time)
                        );
                    }
                    break;
                case 'message':
                    addMessage(
                        json.data.author,
                        json.data.text,
                        json.data.color,
                        new Date(json.data.time)
                    );
                    break;

            }

        }

    };

    input.addEventListener('keypress', function(e) {
        var key = e.keyCode;
        if (key === 13) { // 13 is enter
            var value = this.value;

            var myName = value;
            socket.send(input.value);
        }


    });

    socket.addEventListener('open',socketOpen);
    socket.addEventListener('close',socketClose);
    socket.addEventListener('onerror',socketError);
    socket.addEventListener('message',handleMessage);

    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
            +(dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':' + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) + ': ' + message + '</p>');
    }
});
