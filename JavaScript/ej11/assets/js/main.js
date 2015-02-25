window.onload = function() {
    var ul = document.getElementById("lista");
    btn = document.getElementById("add");


    var add = function(e) {
        e.stopPropagation();
        if (ul) {

            var li = document.createElement("li");
            li.innerText = "Elemento" + (ul.children.length + 1);
            ul.appendChild(li);
        }
    };
    var remove = function(e) {
        if (confirm("Seguro que deseas eliminar?")) {
            this.removeChild(e.target);
            console.log(this);
        }
    };

    var log = function(e) {
        console.log(e);



    };
    if (btn) {
        btn.addEventListener("click", add, false);

    }
    if (ul) {
        ul.addEventListener("click", remove, false);
    }
    document.addEventListener("click", log, false);
};
