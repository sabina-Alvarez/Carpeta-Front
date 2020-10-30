const express = require('express');
const app = express();
const productos = require("./../modelos/productos");

//mostrar productos
app.get('/productos', (req, res) => {

    productos.find({}).exec((err,prod) => {
        if (err) {
        res.json({
            mensaje:"error"
            });
        }else{
            res.json({
                mostrar:prod
            });
        }
    });
});
//guardar productos
app.post('/guardarProducto', (req, res) => {

    let data= req.body;
    let produc =new productos (data);
    produc.save((err,prod) => {
        if (err){
            res.json({
                mensaje:"error"
            });
        }else{
            res.json({
                mostrar: prod
            });
        }
    });

});

//actualizar

app.put('/actualizarProducto/:id', (req, res) => {
    let id = req.params.id;
    let data = req.body;

    const { categoria, nombreProducto, precioProducto, cantidadProducto } = data;
    let actualizar = { categoria, nombreProducto, precioProducto, cantidadProducto };

    productos.findByIdAndUpdate(id, actualizar, { new: true, runValidators: true }, (err, prod) => {
        if (err) {
            return res.json({
                mensaje: 'error el actualizar'
            });
        }else {
            return res.json({
            mostrar: prod
        });

    }
    
    });
});
//eliminar
app.delete('/eliminarProducto/:id', function(req, res) {
    let id = req.params.id;
    productos.findByIdAndDelete(id).exec((err, prod) => {
        if (err) {
            return res.json({
                mensaje: 'error al eliminar'
            });
        }
        if (!prod) {
            return res.send({
                mensaje:"error al buscar"
            });
        }else{
        return res.json({

            producto: prod
        });
    }
    });
});

//mostrar por id o buscar por id

app.get('/buscarProducto/:id', function(req, res) {
    let id = req.params.id;
    productos.findById(id).exec((err, prodId) => {
        if (err) {
            return res.json({
                mensaje: "error al eliminar"
            });
        }if (!prodId) {
                return res.send({
                    mensaje:"error al buscar"
                });
        }else{
        return res.json({
            mostrar: prodId
        });
    }
    });
});


module.exports = app;

