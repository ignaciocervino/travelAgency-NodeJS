const paginaInicio = (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    res.render('Inicio',{
        pagina: 'Inicio',
    });
}

const paginaNosotros = (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    
    res.render('viajes', {
        pagina: 'Viajes'
    });
}

const paginaTestimoniales = (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}

export {
    paginaInicio, paginaNosotros, paginaViajes,paginaTestimoniales
}