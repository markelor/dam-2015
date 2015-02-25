var App = App || {
    Model: {}
};
App.Model.Circle = (function() {

    //Definir jerarquia
    var _radius;
    var _area;

    function Circle(x, y, radius) {
            //CALL= Sirven para cambiar el contexto de this,
            // en el this pasaremos el parametro que queramos, iyectando desde fuera
            //BIND=Primero se le pasa el this
            App.Model.Shape.call(this, x, y);
            //ifternario
            _radius = (typeof radius === "number") ? radius : 0;
        }
        //Indicamos el "padre"
    Circle.prototype = Object.create(App.Model.Shape.prototype);
    Circle.prototype.constructor = Circle;

    Circle.prototype.getRadius = function() {
        return _radius;

    };
    Circle.prototype.setRadius = function(radius) {
        _radius = (typeof radius === "number") ? radius : _radius;

    };


    Circle.prototype.getArea = function Area() {
        _area = Math.PI * Math.pow(_radius, 2);
        return _area;

    };



    return Circle;

})();
