const { Router } = require('express');
const router = Router();
const pool = require('../../database');
const helpers = require('../../lib/helpers');

router.get('/:id', async (req, res) => {

    res.send(await pool.query('SELECT * FROM mensaje where mensaje_id = ?', [req.params.id]));

})

module.exports = router