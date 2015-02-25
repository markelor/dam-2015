var App = App || {
    Model: {}
};
var curso, grupo;

App.Model.Estudiante = (function() {
    function Estudiante(nombre, edad, genero, curso, grupo) {
        //CALL= Sirven para cambiar el contexto de this,
        // en el this pasaremos el parametro que queramos, iyectando desde fuera
        //BIND=Primero se le pasa el this
        App.Model.Persona.call(this, nombre, edad, genero);
        //Indicamos el "padre"
        _curso = (typeof curso === "number") ? curso : 1;
        _grupo = (typeof grupo === "number") ? grupo : 1;
    }


    Estudiante.prototype = Object.create(App.Model.Persona.prototype);
    Estudiante.prototype.constructor = Estudiante;

    Estudiante.prototype.getCurso = function() {

        return _curso;
    };

    Estudiante.prototype.setCurso = function(curso) {
        _curso = (typeof curso === "number") ? curso : _curso;

    };

    Estudiante.prototype.getGrupo = function() {

        return _grupo;
    };

    Estudiante.prototype.setGrupo = function(grupo) {
        _grupo = (typeof grupo === "number") ? grupo : _grupo;

    };
    return Estudiante;

})();
