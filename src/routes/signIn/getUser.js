const { Router } = require('express');
const router = Router();
const pool = require('../../database');
const helpers = require('../../lib/helpers');

router.get('/:id', async (req, res) => {

    res.json({
        usuario: await pool.query('select * from usuario where usuario_id = ?', [req.params.id])
    });

})

module.exports = router;