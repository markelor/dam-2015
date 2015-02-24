(function() {
    //Definir jerarquia
 var s1 = new App.Model.Shape();
    s1.move(5,5);
    console.log(s1.getX());
    console.log(s1.getY());

    var s2 = new App.Model.Shape();
    s2.move(10,10);
    console.log(s2.getX());
    console.log(s2.getY());

     var s3 = new App.Model.Circle(10,3,2);
    console.log(s3.getArea());

    var s4 = new App.Model.Square(10,3,2);
    console.log(s4.getArea());
    

    var s5 = new App.Model.Rectangle(10,3,9,4);
    console.log(s5.getAreaRectangulo());
    




})();
