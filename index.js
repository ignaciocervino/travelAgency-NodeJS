// const express = require('express');//Common JS no propia de js
import express from 'express';//Version de imports
import router from './routes/index.js'//En la nueva version hay que agregar la extension
const app = express();

//Definir puerto
const port  = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine','pug');

//Agregar router
app.use('/',router);//Sporta get,post,put,patch y delete


app.listen (port,()=>{
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
});