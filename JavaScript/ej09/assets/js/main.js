window.onload = function() {

    var enlaces = document.getElementsByTagName("a");
    console.log("numero de enlaces:" + enlaces.length);
    enlaces = document.querySelectorAll("a");
    console.log("numero de enlaces:" + enlaces.length);
    console.log(enlaces[enlaces.length - 2].href);
    enlaces = document.querySelectorAll('a[href="http://prueba"]');
    console.log(enlaces);


    var count = 0;
    for (var i = enlaces.length - 1; i >= 0; i--) {
        if (enlaces.item(i).href === "http://prueba/") {
            count++;
        }

    }
    console.log(count);
    var parrafos = document.querySelectorAll("p");
    if (parrafos.length > 2) {
        enlaces = parrafos[2].querySelectorAll("a");
    }

    enlaces = document.querySelectorAll("body > p > a:nth-child(3)");
    console.log(enlaces.length);

};
