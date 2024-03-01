const express = require('express');
const Curso = require ('../models/cursos_model');
const ruta = express.Router();

//Endpoint tipo GET
ruta.get('/', (req,res)=>{
    res.json('Respuesta a peticion Get de UISUARIOS funcinando correctamente...');
});




module.exports = ruta;