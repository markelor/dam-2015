(function() {
    //Definir jerarquia
function Persona(nombre,edad,genero){
    this.nombre=nombre;
    this.edad=edad;
    this.genero=genero;
    this.objDetalles= function(){};
}
function Estudiante(nombre,edad,genero,curso,grupo){
    this.base=Persona;
    this.base=(nombre,edad,genero,objDetalles);
    this.curso=curso;
    this.grupo=grupo;
    this.registrar=function(){};
}
Estudiante.prototype=new Persona;

function Profesor(nombre,edad,genero,nivel,asignatura){
    this.base=Persona;
    this.base=(nombre,edad,genero,objDetalles);
    this.asignatura=asignatura;
    this.nivel=nivel;
    this.asignar=function(){};
}
Profesor.prototype=new Persona;


})();
