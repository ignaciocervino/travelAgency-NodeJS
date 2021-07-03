// const express = require('express');//Common JS no propia de js
import express from 'express';//Version de imports

const app = express();

//Definir puerto
const port  = process.env.PORT || 4000;


app.get('/', (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    res.send('Inicio');
});

app.listen (port,()=>{
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
});