
const guardarTestimonial = (req,res) =>{
    //Validar formulario

    const {nombre,correo,mensaje} = req.body;
    const errores = [];
    if (nombre.trim() === '') {
        errores.push({nombre: `El nombre esta vacio`});
        
    }

    if (correo.trim() === '') {
        errores.push({correo: `El correo esta vacio`});
        
    }

    if (mensaje.trim() === '') {
        errores.push({mensaje: `El mensaje esta vacio`});
        
    }
}

export {guardarTestimonial}