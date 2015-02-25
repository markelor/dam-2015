var App = App || {
    Model: {}
};
App.Model.Persona=(function() {

    var _nombre, _edad, _genero;

    function Persona(nombre, edad, genero) {
        //ifternario
         _nombre = (typeof nombre === "string") ? nombre : "";
        _edad = (typeof edad === "number") ? edad : 0;
        _genero = (typeof genero === "string") ? genero : "";
        
    }
    Persona.prototype.getNombre = function(nombre) {

        return _nombre;
    };

    Persona.prototype.setNobre = function() {

        _nombre = (typeof nombre === "string") ? nombre : _nombre;
    };

    Persona.prototype.getEdad = function(edad) {

        return _edad;
    };

    Persona.prototype.setEdad = function() {

        _edad = (typeof edad === "number") ? edad : _edad;
    };

    Persona.prototype.getGenero = function(genero){
        return _genero;
    };

    Persona.prototype.setGenero = function() {

        _genero = (typeof genero === "string") ? genero : _genero;
    };
    return Persona;
})();
