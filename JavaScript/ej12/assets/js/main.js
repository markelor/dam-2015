window.onload = function() {
    var p1 = document.getElementById("1");
    p2 = document.getElementById("2");
    p3 = document.getElementById("3");
    a1=document.getElementById("a1");
     a1=document.getElementById("a2");
      a1=document.getElementById("a3");


    var ocultar1 = function() {
        if (a1) {
            p1.style.display='none';

            var li = document.createElement("li");
            li.innerText = "Elemento" + (ul.children.length + 1);
            ul.appendChild(li);
        }
    };
    if (btn) {
        btn.addEventListener("click", ocultar1, false);
    }


};

