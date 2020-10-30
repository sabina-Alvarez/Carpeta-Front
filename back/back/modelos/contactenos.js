const mongoose = require ('mongoose');
let Schema = mongoose.Schema;

let Contactenos = new Schema({

    nombre:{
        type: String,
        require: [true,"necesitamos tu nombre"],
    },

    correo:{
        type: String,
        require:[true, "tu correo es necesario"],
    },

    telefono:{
        type: String,
        require:[true,"necesitamos tu telefono"],
    },

    ciudad:{
        type: String,
        require:[true, "tu ciudad es necesario"],
    },

    mensaje:{
        type:String,
        require:[true,"necesitamos tu mensaje"],
    },

});
module.exports = mongoose.model("contactenos",Contactenos);

