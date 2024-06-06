var express = require('express');
var router = express.Router();

var noticiasModel = require('./../../models/noticiasModel'); /* PASO ARCHIVO DE MODELOS */
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/', async function (req, res, next) {

    var noticias = await noticiasModel.getNoticias(); 

    noticias = noticias.map(noticia => {
        if (noticia.img_id) {
            const imagen = cloudinary.image(noticia.img_id, {
                width: 70,
                height: 70,
                crop: 'fill'
            });
            const imagen2 = cloudinary.image(noticia.img2_id, {
                width: 70,
                height: 70,
                crop: 'fill'
            });
            const imagen3 = cloudinary.image(noticia.img3_id, {
                width: 70,
                height: 70,
                crop: 'fill'
            });
            return {
                ...noticia,
                imagen,
                imagen2,
                imagen3
            }
        } else {
            return {
                ...noticia,
                imagen: '',
                imagen2: '',
                imagen3: ''

            }
        }
    });

    res.render('admin/noticias', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        noticias  /* TOMA LAS COLUMNAS */
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', { /* ME REDIREIGE A  /AGREGAR.hbs */
        layout: 'admin/layout'
    });
});


router.post('/agregar', async (req, res, next) => {
    try {
        var img_id = '';
        var img2_id = '';
        var img3_id = '';
        console.log(req.body);

        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            imagen2 = req.files.imagen2;
            imagen3 = req.files.imagen3;

            img_id = (await uploader(imagen.tempFilePath)).public_id;
            img2_id = (await uploader(imagen2.tempFilePath)).public_id;
            img3_id = (await uploader(imagen3.tempFilePath)).public_id;
        }

        if (req.body.volanta != "" && req.body.fecha != "" && req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await noticiasModel.insertNoticia({
                ...req.body,
                img_id,
                img2_id,
                img3_id
            });
            res.redirect('/admin/noticias')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargó la novedad'
        })
    }
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    let noticia = await noticiasModel.getNoticiaById(id);
    if (noticia.img_id) {
        await (destroy(noticia.img_id));
    }
    if (noticia.img2_id) {
        await (destroy(noticia.img2_id));
    }
    if (noticia.img3_id) {
        await (destroy(noticia.img3_id));
    }

    await noticiasModel.deleteNoticiaById(id);
    res.redirect('/admin/noticias')
});

router.get('/modificar/:id', async (req, res, next) => {

    let id = req.params.id;
    let noticia = await noticiasModel.getNoticiaById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        noticia
    });
});

router.post('/modificar', async (req, res, next) => {
    try {
        let img_id = req.body.img_original;
        let img2_id = req.body.img2_original;
        let img3_id = req.body.img3_original;

        let borrar_img_vieja = false;
        let borrar_img2_vieja = false;
        let borrar_img3_vieja = false;

        if (req.body.img_delete === "1") {
            img_id = null;
        } else {

            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;

                img_id = (await uploader(imagen.tempFilePath)).public_id;

                borrar_img_vieja = true;
            }
        }

        if (req.body.img2_delete === "1") {
            img2_id = null;
        } else {

            if (req.files && Object.keys(req.files).length > 0) {
                imagen2 = req.files.imagen2;

                img2_id = (await uploader(imagen2.tempFilePath)).public_id;

                borrar_img2_vieja = true;
            }
        }

        if (req.body.img3_delete === "1") {
            img3_id = null;
        } else {

            if (req.files && Object.keys(req.files).length > 0) {
                imagen3 = req.files.imagen3;

                img3_id = (await uploader(imagen3.tempFilePath)).public_id;

                borrar_img3_vieja = true;
            }
        }

        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }
        if (borrar_img2_vieja && req.body.img2_original) {
            await (destroy(req.body.img2_original));
        }
        if (borrar_img3_vieja && req.body.img3_original) {
            await (destroy(req.body.img3_original));
        }
        var obj = {
            volanta: req.body.volanta,
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
            img_id,
            img2_id,
            img3_id

        }

        await noticiasModel.modificarNoticiaById(obj, req.body.id);
        res.redirect('/admin/noticias');
    }
    catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modificó la novedad'
        })
    }
})

module.exports = router;