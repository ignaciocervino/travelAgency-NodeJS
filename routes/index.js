import express from 'express';

const router = express.Router();

router.get('/', (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    res.send('Inicio');
});

router.get('/nosotros', (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    res.render('nosotros');//Va escanear el archivo
});



export default router;
