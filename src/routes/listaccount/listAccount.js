const { Router } = require('express');
const router = Router();
const pool = require('../../database');

router.get('/', async (req, res) => {

    await pool.query('SELECT * FROM usuario')


})