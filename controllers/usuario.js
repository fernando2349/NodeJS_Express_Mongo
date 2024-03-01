const express = require('express');
const Usuario = require ('../models/cursos_model');
const joi = require('@hapi/joi');
const { schema } = require('../models/usuarios_model');
const ruta = express.Router();

//Endpoint TIPO GET: un punto de acceso o una URL específica que un servicio o aplicación expone para realizar operaciones o intercambiar información. Cada endpoint está asociado con una acción o recurso específico.
ruta.get('/', (req,res)=>{
    res.json('Respuesta a peticion Get de UISUARIOS funcinando correctamente...');
});

//Entpoint de tipo POST para el recurso Usuario
ruta.post('/', (req, res) => {
    let body = req.body;

    const {error, value} = schema.validate({nombre: body.nombre, email: body.email});
    if(!error){
        let resultado = crearUsuario(body);

        resultado.then( user => {
            res.json({
                valor: user
            })
        }).catch( err => {
            res.status(400).json({
                err
            })
        });

    }else{
        res.status(400).json({
            error
        })
    }
}); 


//Funcion asincronica para crear un objeto de tipo usuario
async function crearUsuario(body){
    let usuario = new Usuario({
        email   : body.email,
        nombre  : body.nombre,
        password: body.password
    });
}




module.exports = ruta;