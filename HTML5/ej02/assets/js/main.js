window.onload = function() {
    var loaded = false;

    var boton1 = document.getElementById("1");
    var boton2 = document.getElementById("2");
    var boton3 = document.getElementById("3");
    var boton4 = document.getElementById("4");
    var boton5 = document.getElementById("5");
    var boton6 = document.getElementById("6");
    var boton7 = document.getElementById("7");
    var boton8 = document.getElementById("8");
    var volume = document.getElementById("volume");
    var progress = document.getElementById("progress");
    var video = document.getElementsByTagName("video")[0];
    playlist=documentQueryselectorAll("#tracklist")

    var canplay = function() {
        loaded = true;
        volume.value = video.volume * 100;
        progress.value = 0;
    };
    var iniciar = function() {
        if (loaded) {
            video.play();
        }
    };
    var iniciarPausarVideo = function() {
        if (loaded) {
            if (video.played)
                video.pause();
        } else {
            video.play();
        }
    };

    var pausar = function() {
        e.preventDefault();
        if (loaded) {
            video.pause();
        }
    };
    var parar = function() {
        if (loaded) {
            video.pause();
            video.currentTime = 0;
        }
    };
    var avanzar = function() {
        e.preventDefault();
        if (loaded) {
            video.currentTime += 20;
        }
    };
    var retroceder = function() {
        e.preventDefault();
        if (loaded) {
            video.currentTime -= 20;
        }
    };
    var inicio = function() {
        e.preventDefault();
        if (loaded) {
            video.currentTime = 0;
        }
    };
    var fin = function() {
        e.preventDefault();
        if (loaded) {
            video.currentTime = video.duration;
        }
    };
    var fin = function() {
        e.preventDefault();
        if (loaded) {
            video.currentTime = video.duration;
        }
    };
    var barraProgress = function() {
        progress.value = player.currentTime / player.duration * 100;
    };
    if (loaded) {
        var volumen = function() {
            video.volumen=this.value/100;
        }
    };

    video.addEventListener("canplay", canplay, false);
    video.addEventListener("click", iniciarPausarVideo, false);
    boton1.addEventListener("click", iniciar, false);
    boton2.addEventListener("click", pausar, false);
    boton3.addEventListener("click", parar, false);
    boton4.addEventListener("click", avanzar, false);
    boton5.addEventListener("click", retroceder, false);
    boton6.addEventListener("click", inicio, false);
    boton7.addEventListener("click", fin, false);
    boton7.addEventListener("timeupdate", barraProgress, false);
    boton7.addEventListener("input", volumen, false);
    //boton8.addEventListener("click", pantallaCompleta, false);


};
