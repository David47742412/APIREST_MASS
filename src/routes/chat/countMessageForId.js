const { Router } = require('express');
const router = Router();
const pool = require('../../database');
const helpers = require('../../lib/helpers');

router.get('/', async (req, res) => {
    res.json(
        await pool.query("SELECT count(*) as mensaje_id from mensaje")
    );
});

module.exports = router;