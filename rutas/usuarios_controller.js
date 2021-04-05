const express = require('express');
const app = express();

const data = [
    {
        id: 123,
        usuario: 'user1'
    },
    {
        id: 123,
        usuario: 'user2'
    }
];

//Listar Usuarios

app.get('/usuarios', (req, res) => {
    res.json({ 
        data:data
    });
});

//Guardar Usuarios

app.post('/usuarios', (req, res) => {
    res.json({
        message:"Guardado"
    });
});

//Borrar Usuarios

app.delete('/usuarios/:id', (req, res) => {
    res.json({
        message:"Eliminado"
    });
});


//Actualizar Usuarios

app.put('/usuarios/:id', (req, res) => {
    res.json({
        message:"Actualizado"
    });
});

module.exports = app;