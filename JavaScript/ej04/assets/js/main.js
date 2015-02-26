(function() {


    //par o impar

    var esPar = function(num) {
        var par = true;
        if(num&& typeof num==="number"){
            par="escribe un numero";
            }

        if (num % 2 === 0) {
            par = true;
        } else {
            par = false;
        }

        return par;
    };

    console.log(esPar(34));
     console.log(esPar(35));
      console.log(esPar("a"));


})();
