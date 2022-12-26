const { Router } = require('express');
const router = Router();
const pool = require('../../database');

router.get('/', async (req, res) => {

   res.send( await pool.query("select * from usuario"));

});

module.exports = router;