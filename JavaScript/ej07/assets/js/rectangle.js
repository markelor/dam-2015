var App = App || {
    Model: {}
};
App.Model.Rectangle = (function() {

    //Definir jerarquia
    var _lado2;

    function Rectangle(x, y, lado, lado2) {
        //CALL= Sirven para cambiar el contexto de this,
        // en el this pasaremos el parametro que queramos, iyectando desde fuera
        //BIND=Primero se le pasa el this
        App.Model.Shape.call(this, x, y, lado2);
        //ifternario
        _lado2 = (typeof lado2 === "number") ? lado2 : 0;
    }

    //Indicamos el "padre"
    Rectangle.prototype = Object.create(App.Model.Shape.prototype);
    Rectangle.prototype.constructor = Rectangle;

    Rectangle.prototype.getLado = function() {
        return _lado2;

    };
    Rectangle.prototype.setLado = function(lado) {
        _lado2 = (typeof lado2 === "number") ? lado2 : _lado2;

    };

    Rectangle.prototype.getAreaRectangulo = function() {
        //_area = _lado2*Square.prototype.getArea().call(this);
        _area = _lado2 * this.getLado();
        return _area;

    };


    return Rectangle;

})();
