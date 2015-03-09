window.onload=function(){

    boton = document.getElementById('calcular');
    input = document.getElementById('number');
    result=document.getElementById('result');

    var worker = new Worker(assets/js/primes.js);


    console.log(etiqueta.value);
    boton.addEventListener("click", function(e) {
        var num = input.value;
        worker.postMessage(num);
        
    });
    worker.addEventListener('message',function(e){
        var primes=e.data;
        result.innerHTML=primes.join(" ");

    });

};
