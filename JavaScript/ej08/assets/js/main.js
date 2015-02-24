(function() {


    //calcular minuscula

    var validar_email=/^\w([\w.\-]*\w)?@ [a-zA-z0-9]([\w.\-]*\w)?\.[a-zA-z0-9]{2,3}$/;
    console.log(validar_email.test("mendimarkel@gmail.com")===true);
    console.log(validar_email.test("mendi.markel@gmail.com")===true);
    console.log(validar_email.test("@gmail.com")===false);
    console.log(validar_email.test("mendimarkel@gmail")===false);
    console.log(validar_email.test(".mendimarkel@gmail.com")===false);



})();
