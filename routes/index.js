import express from 'express';

const router = express.Router();

router.get('/', (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    res.render('Inicio');
});

router.get('/nosotros', (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    
    const viajes = 'Viaje a Alemania';
    
    
    res.render('nosotros' , {
        //To lo que se le envia a la vista
        textoViajes : viajes,
    });//Va escanear el archivo
});



export default router;
