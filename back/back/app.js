const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT | 3000;
const mongoose = require ('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require("./controladores/administracion"));
app.use(require("./controladores/contactenos"));
app.use(require("./controladores/productos"));


app.listen(port, () => {
    console.log(`Api listening at http://localhost:${port}`)
});



mongoose.connect('mongodb://localhost:27017/madressolteras',
 {
    useNewUrlParser: true,
    useUnifiedTopology: true

}, (err, res) => {
    if (err) throw err;
    console.log("Conectado a la DB");
});
