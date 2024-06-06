var express = require('express');
var router = express.Router();
var noticiasModel = require('./../models/noticiasModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/noticias', async function(req, res, next){
    let noticias = await noticiasModel.getNoticias(); 
    noticias = noticias.map(noticias => {
        if (noticias.img_id) {
            const imagen = cloudinary.url(noticias.img_id, {
                width: 960,
                height: 400,
                crop: 'fill'
            });
            const imagen2 = cloudinary.url(noticias.img2_id, {
                width: 960,
                height: 400,
                crop: 'fill'
            });
            const imagen3 = cloudinary.url(noticias.img3_id, {
                width: 960,
                height: 400,
                crop: 'fill'
            });
            return {
                ...noticias,
                imagen,
                imagen2,
                imagen3
            }
        } else {
            return {
                ...noticias,
                imagen: '',
                imagen2: '',
                imagen3: ''

            }
        }
    });
    res.json(noticias);
});


/* CONTACTO EMAIL */

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'solroa088@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} se contacto a traves de la web y requiere más infomación a este correo: ${req.body.email} <br> Además, hizo el seguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`
    }
    const transport = nodemailer.createTransport ({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)
    
    res.status(201).json({
        error: false, 
        message: 'Mensaje enviado'
    })
})

module.exports = router;
