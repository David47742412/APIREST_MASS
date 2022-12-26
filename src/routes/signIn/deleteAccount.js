const { Router } = require('express');
const router = Router();
const pool = require('../../database');

router.delete('/:id', async (req, res) => {

    const user_id = req.params.id;

    await pool.query("DELETE FROM usuario where usuario_id = ?", user_id)

    res.send('usuario Eliminado');

})

module.exports = router;