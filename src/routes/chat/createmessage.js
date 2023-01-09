const { Router } = require('express');
const router = Router();
const pool = require('../../database');
const helpers = require('../../lib/helpers');

router.get('/:mensaje_contenido/:mensaje_create/:mensaje_update', async (req, res) => {

    const { mensaje_contenido, mensaje_create, mensaje_update }= req.params;

    const message = {
        mensaje_contenido,
        mensaje_create,
        mensaje_update
    }

    message.mensaje_create = await helpers.getDateNow();

    message.mensaje_update = await helpers.getDateNow();

    message.mensaje_contenido = message.mensaje_contenido == undefined ||
                                message.mensaje_contenido == "" ||
                                message.mensaje_contenido == null? "mensaje nulo" : message.mensaje_contenido;

    await pool.query("INSERT INTO mensaje set ? ", [message]);
    

    res.send(
        await pool.query('select * from apoyo_id as mensaje_id')
    );

});

module.exports = router;