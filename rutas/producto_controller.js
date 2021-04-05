const express = require('express');
const app = express();

const data = [
    {
        id: 123,
        nombre: 'Polos'
    },
    {
        id: 123,
        nombre: 'Polos'
    }
];

//Listar Producto

app.get('/producto', (req, res) => {
    res.json({
        data:data
    });
});

//Guardar Producto

app.post('/producto', (req, res) => {
    res.json({
        message:"Guardado"
    });
});

//Borrar Producto

app.delete('/producto/:id', (req, res) => {
    res.json({
        message:"Eliminado"
    });
});


//Actualizar producto

app.put('/producto/:id', (req, res) => {
    res.json({
        message:"Actualizado"
    });
});

module.exports = app;