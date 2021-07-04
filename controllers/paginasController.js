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


//Muestra un viaje por su slug
const paginaDetalleViaje = async (req,res)=>{
    const {slug} = req.params;
    //Para hacer la consulta a la DB uso try-catch
    try {
        const viaje = await Viaje.findOne({where : {slug}});

        res.render('viaje',{
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        
    }
}

export {
    paginaInicio, paginaNosotros, paginaViajes,paginaTestimoniales,paginaDetalleViaje
}