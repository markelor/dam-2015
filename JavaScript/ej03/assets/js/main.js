(function() {


        //calcular palindromo

        var palindromo = function(cadena) {
            var ok=true;

            for (var i = 0; cadena.length!=i ; i++) {
               if (cadena.charAt(i)!=cadena.charAt(cadena.length-1-i)) {
                ok=false;
                break;
               }
                
            }
            return ok;
        };

        console.log(palindromo("algla")); 
        console.log(palindromo("alglab")); 
        console.log(palindromo("aa")); 
        console.log(palindromo("aasdahsicdha")); 
    

})();


