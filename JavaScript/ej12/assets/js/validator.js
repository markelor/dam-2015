HTMLFormElement.prototype.validate = function() {

    var validador = {

        require: function(val) {
            return !(val === undefined || val === null || /^\s+$/.test(val));
        },

        email: function(val) {
            return /^\w([\w.\-]*\w)?@ [a-zA-z0-9]([\w.\-]*\w)?\.[a-zA-z0-9]{2,3}$/.test(val);
        },
        password: function(val) {
            return (val.length >= 6) && /[a-z]/.test(val) && /[A-Z/.test(val)&&/[0-9]/.test(val);
        },
        comentarios:function(val){
        	return val.length<=50;
        }

    };

    var require = this.querySelectAll(".required");
    var validate = function() {


    };

    this.addEventListener('submit', validar, false);

};
