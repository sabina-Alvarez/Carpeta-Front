const express = require('express');
const app = express();
const administracion = require("./../modelos/administracion");



//guardar usario ( usuario y contraseña)
app.post('/user', (req, res) => {
    let data = req.body;
    let { usuario } = data;
    let user = new administracion (data);

    administracion.find({ usuario }).exec((err, ad) => {
        if (!ad.length) {
            user.save((error, UserDb) => {
                if (error) { 
                    res.json({
                        mensaje:"error"
                    });
                }else{ 
                    res.json({
                        mensaje: UserDb
                    });
                }
            });
        } else { 
            res.json({ mostrar: ad });
        }  
    });
        
});

//login 
app.post('/user/login', (req, res) => {
    let data = req.body;
    const { usuario, clave } = data;

    administracion.find({ usuario, clave }).exec((err, userVal) => {

        if (!userVal.length) {
            return res.json({
                mensaje: "error en la busqueda",
                
            });
            
        }else{
            return res.json({
                mostrar: userVal
            });
        };
    });
});
        



module.exports = app;