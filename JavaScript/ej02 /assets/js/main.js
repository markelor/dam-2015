(function() {

/* Calcular factorial recursividad
    var calcularFactorial = function(n) {

        if (n===1||n===0) {
            return 1;

        }else{
            return n*calcularFactorial(n-1);
        }
      
    
    };
        console.log(calcularFactorial(3)); 
        */

        //calcular factorial con for

        var calcularFactorial = function(n) {
            var factorial=1;
            for (var i = 1; n != i-1; i++) {
                factorial= factorial*i;
                
            }
            return factorial;
        };
        console.log(calcularFactorial(4)); 
    

})();


/*En primer lugar (y en una sola instrucción) se debe comprobar si el número 
es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario
indicando que el número proporcionado no es válido y el programa no muestra más mensajes.*/
