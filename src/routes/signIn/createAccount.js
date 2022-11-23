const {Router} = require('express');
const pool = require('../../database');
const router = Router();
const hash = require('bcrypt')

router.post('/', async (req, res)=>{
    const {usuario_nombre, usuario_apellido, usuario_numero, usuario_email, usuario_password} = req.body;
    const user = {
        usuario_nombre,
        usuario_apellido,
        usuario_numero,
        usuario_email,
        usuario_password
    }

    user.usuario_password = hash(user.usuario_password);

    await pool.query('INSERT INTO usuario set ?', [user]);
    res.send("Se ha enviado correctamente");
});

module.exports = router;