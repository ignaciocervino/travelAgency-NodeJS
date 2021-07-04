import express from 'express';

const router = express.Router();

router.get('/', (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    res.render('Inicio',{
        pagina: 'Inicio',
    });
});

router.get('/nosotros', (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
});

router.get('/viajes', (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    
    res.render('viajes', {
        pagina: 'Viajes'
    });
});

router.get('/testimoniales', (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
});



export default router;
