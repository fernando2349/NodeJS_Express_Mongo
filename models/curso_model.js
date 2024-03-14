const mongosee = require('mongoose');

const cursoShema = new mongosee.Schema({
    titulo: {
        type:String,
        required: true 
    },
    descripcion: {
        type:String,
        required:false 
    },
    estado: {
        type: Boolean,
        default: true 
    },
    imagen:{
        type: Number,
        default: 0
    },
    calificacion: {
        type: Number,
        default: 0
    }
});

module.exports = mongosee.model('curso', cursoShema);