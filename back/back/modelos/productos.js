const mongoose = require ('mongoose');
let Schema = mongoose.Schema;

let Productos = new Schema({
    categoria: {
        type: String,
        require: [true, "la categoria es necesaria"],
    },
    nombreProducto:{
        type: String,
        require: [true, "el nombre del producto es necesario"],

    },
    precioProducto: {
        type: Number,
        require: [true, "el precio del producto es necesario"],
    },

    cantidadProducto: { 
        type: Number,
        require: [true,"la cantidad de productos es necesaria"],
    },


});

module.exports = mongoose.model("productos",Productos);