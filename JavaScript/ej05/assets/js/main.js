(function() {


    //calcular minuscula

    var calcularMinuscula = function(palabra) {
        minuscula = true;

        if (typeof n === "string") {
            if (palabra === palabra.toLowerCase()) {
                minuscula = "solo minuscula";

            } else if (palabra === palabra.toUpperCase()) {

                minuscula = "solo mayuscula";
            } else {
                minuscula = "minuscula y mayuscula";

            }

        } else {
            minuscula="escribe un string";

        }


        return minuscula;

    };
    console.log(calcularMinuscula("aaaa"));
    console.log(calcularMinuscula("aaB"));
    console.log(calcularMinuscula("Baaa"));
    console.log(calcularMinuscula("BB"));



})();
