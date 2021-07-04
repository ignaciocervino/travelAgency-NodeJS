import { Viaje } from "../models/Viajes.js";

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

const paginaViajes =  async (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    //Consultar DB
    const viajes= await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Proximos viajes',
        viajes //Esto es object literal enhancement
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