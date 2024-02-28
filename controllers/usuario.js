const express = require('express');
const Usuario = require ('../models/cursos_model');
const ruta = express.Router();

//Endpoint TIPO GET: un punto de acceso o una URL específica que un servicio o aplicación expone para realizar operaciones o intercambiar información. Cada endpoint está asociado con una acción o recurso específico.
ruta.get('/', (req,res)=>{
    res.json('Respuesta a peticion Get de UISUARIOS funcinando correctamente...');
});





module.exports = ruta;