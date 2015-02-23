(function() {


    //calcular palindromo

    var palindromo = function(cadena) {
        //con for
        /*var ok=true;

        for (var i = 0; cadena.length!=i ; i++) {
           if (cadena.charAt(i)!=cadena.charAt(cadena.length-1-i)) {
            ok=false;
            break;
           }
            
        }
        return ok;
        */

        //con reverse
         esPalindromo = "";
        if (typeof cadena === "string") {
            darVuelta=cadena.trim().toLowerCase().replace(/\s/g,"").split("").reverse().join("");
            
           
            if (darVuelta=== cadena.trim().toLowerCase().replace(/\s/g,"")) {
                esPalindromo = "Es palindromo";

            } else {
                esPalindromo = "No es palindromo";

            }
            return esPalindromo;

        }else{
            throw Error("No es un string");
        }

    };


    console.log(palindromo("algla"));
    console.log(palindromo("alglab"));
    console.log(palindromo("aa"));
    console.log(palindromo("aasdahsicdha"));
    console.log(palindromo("La aL"));
     console.log(palindromo("La ruta nos aporto otro paso natural"));


})();
