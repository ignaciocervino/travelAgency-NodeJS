// const express = require('express');//Common JS no propia de js
import express from 'express';//Version de imports
import router from './routes/index.js'//En la nueva version hay que agregar la extension
import db from './config/db.js';
const app = express();


//Conectar la base de datos
db.authenticate()
    .then(()=>console.log('Base de datos conectada'))
    .catch(error=>console.log(error));

//Definir puerto
const port  = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine','pug');

//Obtener el año actual
app.use((req,res,next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de viajes";
    next();
});

//Definir la carpeta publica
app.use(express.static('public'));

//Agregar router
app.use('/',router);//Sporta get,post,put,patch y delete


app.listen (port,()=>{
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
});