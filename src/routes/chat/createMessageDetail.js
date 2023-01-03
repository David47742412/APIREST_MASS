const { Router } = require('express');
const router = Router();
const pool = require('../../database');

router.post('/', async (req, res) => {

    const { mensaje_id, usuario_id  } = req.body

    const messageDetail = {
        mensaje_id,
        usuario_id
    };

    pool.query("INSERT INTO mensaje_detalle SET ?", [messageDetail]);
    
    res.send("Mensaje_detalle creado");

})

module.exports = router;