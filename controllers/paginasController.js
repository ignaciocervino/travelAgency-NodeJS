import { Viaje } from "../models/Viajes.js";
import { Testimonial } from "../models/Testimoniales.js";
const paginaInicio = (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    res.render('Inicio',{
        pagina: 'Inicio',
        clase: 'home'
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

const paginaTestimoniales = async (req,res)=>{//request es lo que yo envio, response es lo que express me responde
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);

    }
    
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
        console.log(error);
    }
}

export {
    paginaInicio, paginaNosotros, paginaViajes,paginaTestimoniales,paginaDetalleViaje
}