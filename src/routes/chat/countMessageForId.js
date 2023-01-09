const { Router } = require('express');
const router = Router();
const pool = require('../../database');
const helpers = require('../../lib/helpers');

router.get('/', async (req, res) => {
    res.send(
        await pool.query("SELECT * FROM apoyo_id")
    );
});

module.exports = router;