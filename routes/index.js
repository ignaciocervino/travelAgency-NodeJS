import express from 'express';

const router = express.Router();

router.get('/', (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    res.render('Inicio');
});

router.get('/nosotros', (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    
    res.render('nosotros');
});



export default router;
