var App = App || {
    Model: {}
};
App.Model.Square = (function() {

    //Definir jerarquia
    var _lado;

    function Square(x, y, lado) {
            //CALL= Sirven para cambiar el contexto de this,
            // en el this pasaremos el parametro que queramos, iyectando desde fuera
            //BIND=Primero se le pasa el this
            App.Model.Shape.call(this, x, y);
            //ifternario
            _lado = (typeof lado === "number") ? lado : 0;
        }
        //indicamos el padre
    Square.prototype = Object.create(App.Model.Shape.prototype);
    Square.prototype.constructor = Square;

    Square.prototype.getLado = function() {
        return _lado;

    };
    Square.prototype.setLado = function(lado) {
        _lado = (typeof lado === "number") ? lado : _lado;

    };

    Square.prototype.getArea = function() {
        //_area = _lado2*Square.prototype.getArea().call(this);
        _area = Math.pow(_lado, 2);
        return _area;

    };


    return Square;

})();
