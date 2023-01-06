const { Router } = require('express');
const router = Router();
const pool = require('../../database');
const helpers = require('../../lib/helpers');

router.post('/', async (req, res) => {

    const { mensaje_contenido, mensaje_create, mensaje_update } = req.body;

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

    pool.query("INSERT INTO mensaje set ? ", [message]);

    res.send(
        
    );

});

module.exports = router;