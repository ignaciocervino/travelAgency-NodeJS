import express from 'express';

const router = express.Router();

router.get('/', (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    res.send('Inicio');
});

router.get('/nosotros', (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    res.send('Nosotros');
});

router.get('/contacto', (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    res.send('Contacto');
});

export default router;
