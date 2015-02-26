HTMLFormElement.prototype.validate = function() {

    var form = this;

    var validador = {


        required: function(val) {
            return !(val === undefined || val === null || val.length === 0 || /^\s+$/.test(val));
        },

        email: function(val) {
            return /^\w([\w.\-]*\w)?@ [a-zA-z0-9]([\w.\-]*\w)?\.[a-zA-z0-9]{2,3}$/.test(val);
        },
        password: function(val) {
            //this.required(value) &&
            return (val.length >= 6) && /[a-z]/.test(val) && /[A-Z/.test(val)&&/[0-9]/.test(val);
        },
        comentarios: function(val) {
            return val.length <= 50;
        }

    };

    var required = this.querySelectorAll(".required");
    var email = this.querySelectorAll(".email");
    var comentario = this.querySelectorAll("textarea");


    var validate = function(e) {


        //validar required
        var err = [];
        for (var i = 0; i < required.length; i++) {
            var input = required.item(i);
            validateRequired.call(input);

        }

        console.log(form);

        //validar email
        for (var j = 0; j < email.length; j++) {
            if (!validador.email(email[j].value)) {
                //Añadir el error
                err.push("El email no es correcto");

            }
        }


        //validar comentario

        for (var pos = 0; pos < comentario.length; pos++) {
            if (!validador.comentarios(comentario[pos].value)) {
                //Añadir el error

                err.push("No puedes escribir mas de 50 caracteres");


            }
        }
        console.log(err);

    };
    var validateRequired = function(e) {
        err=[];

        if (input.type === 'checkbox' && !input.checked) {
            err.push(input.name + " no está checked.");
        } else if (input.type === 'password') {
            if (!validador.password(input.value)) {
                //Añadir el error
                err.push("Password no correcto");
            }
        } else {
            if (!validador.required(input.value)) {
                //Añadir el error
                err.push(input.name + " es requerido");
            }
        }

        if (err.length) {
            //Solo si hay errores
            e.preventDefault();
            //showError.call(this);
        }


    };
    var showError=function(msgError){
        var span=document.createElement();
        span.classList.add(help-block);
        span.innertext=msgError;
        this.parentNode.classList.add("has-error");
        this.nextSibling.classList.remove("hidden");

    };

    this.addEventListener('submit', validate, false);
    for (var i = required.length - 1; i >= 0; i--) {
        required[i].addEventlistener("blur", validateRequired, false);

    }

};
