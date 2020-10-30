const express = require('express');
const app = express();
const contactenos = require("./../modelos/contactenos");

//mostrar
app.get('/mensajes', (req, res) => {

    contactenos.find({}).exec((err,mjs) => {
        if (err) {
        res.json({
            mensaje:"error"
            });
        }else{
            res.json({
                mensajes:mjs
            });
        }
    });

});
//guardar
app.post('/mensajes', (req, res) => {

    let data= req.body;
    let mnsj =new contactenos (data);
    mnsj.save((err,mensaje) => {
        if (err){
            res.json({
                mensaje:"error"
            });
        }else{
            res.json({
                mensajes: mensaje
            });
        }
    });

});

module.exports = app;

