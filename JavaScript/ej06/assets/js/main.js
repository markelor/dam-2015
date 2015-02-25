(function() {
    //Definir jerarquia;
    var p1 = new App.Model.Persona("markel", 24, "m");
    console.log(p1.getNombre());
    console.log(p1.getEdad());
    console.log(p1.getGenero());
    console.log(p1);

    var e1 = new App.Model.Estudiante("markel", 24, "m", 2, 1);
    console.log(e1.getNombre());
    console.log(e1.getEdad());
    console.log(e1.getGenero());
    console.log(e1.getCurso());
    console.log(e1.getGrupo());
    console.log(e1);





})();
