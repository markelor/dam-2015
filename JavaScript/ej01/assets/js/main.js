(function() {

    var validarDni = function(dni) {

        //
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        ok = false;
        if (dni && typeof dni === "string" && dni.length === 9) {
            var num = parseInt(dni);
            if (num >= 0 && num <= 99999999) {
                var char = dni.charAt(dni.length - 1).toUpperCase();
                ok = char === letras[num % 23];


            }


        }


        return ok;
    };


    console.log(validarDni("44345365P"));
    console.log(validarDni("123456789A"));

})();


/*En primer lugar (y en una sola instrucción) se debe comprobar si el número 
es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario
indicando que el número proporcionado no es válido y el programa no muestra más mensajes.*/
