const mongoose = require ('mongoose');
let Schema = mongoose.Schema;

let Administradores = new Schema({
    usuario:{
        type: String, 
        require: [true,"el usuario es necesario"],

    },

    clave:{
        type:String,
        require:[true,"la contraseña es necesaria"],
    },

});

module.exports = mongoose.model("administracion",Administradores);