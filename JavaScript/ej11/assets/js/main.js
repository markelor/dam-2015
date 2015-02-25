window.onload = function() {
    var ul = document.getElementById("lista");
    btn = document.getElementById("add");
        //ultimoLi=document.getElementsById("boton");

    var add = function() {
        if (ul) {


            var li = document.createElement("li");
            li.innerText = "Elemento" + (ul.children.length + 1);
            ul.appendChild(li);
        }
    };
    if (btn) {
        btn.addEventListener("click", add, false);
    }


};
