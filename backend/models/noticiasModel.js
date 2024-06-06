var pool = require('./bd');

async function getNoticias() {  /* MODELO DE LISTADO => noticias.js (controlador) */
        var query = ' select * from noticias order by id desc';
        var rows = await pool.query(query);
        return rows;
}

async function insertNoticia(obj) {
        try {
                var query = 'insert into noticias set ? ';
                var rows = await pool.query(query, [obj])
                return rows;
        } catch (error) {
                console.log(error);
                throw error;
        }
}


async function deleteNoticiaById(id) {
        var query = ' delete from noticias where id = ? ';
        var rows = await pool.query(query, [id]);
        return rows;
}

/* MOSTRAR MODIFICAR EL FORMULARIO + SELECT BYID */

async function getNoticiaById(id) {
        var query = 'select * from noticias where id = ?';
        var rows = await pool.query(query, [id]);
        return rows[0];
}

async function modificarNoticiaById(obj, id) {  
        try {
                var query = 'update noticias set ? where id=?';
                var rows = await pool.query(query, [obj, id]);
                return rows;
        } catch (error) {
                throw error;
        }
}


module.exports = { getNoticias, insertNoticia, deleteNoticiaById, getNoticiaById, modificarNoticiaById }