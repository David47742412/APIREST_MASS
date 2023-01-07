const { Router } = require('express');
const router = Router();
const pool = require('../../database');
const helpers = require('../../lib/helpers');

router.get('/', async (req, res) => {

    const message = await pool.query('select u.usuario_id, u.usuario_nombre, m.mensaje_contenido from mensaje_detalle md '
    + 'join usuario u on u.usuario_id = md.usuario_id join mensaje m on m.mensaje_id = md.mensaje_id');

    res.json(message);

})

module.exports = router;