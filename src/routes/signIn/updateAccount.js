const { Router } = require('express');
const router = Router();
const pool = require('../../database');
const helpers = require('../../lib/helpers');

router.patch('/:id' , async (req, res) => {

    

    const { usuario_nombre, usuario_apellido, usuario_numero, usuario_password, usuario_update, usuario_foto } = req.body;
        
    const user = {
            usuario_nombre,
            usuario_apellido,
            usuario_numero,
            usuario_password,
            usuario_update,
            usuario_foto
    };

    user_id = parseInt(req.params.id)

    user.usuario_update = helpers.getDateNow();
    
    await pool.query(`UPDATE usuario SET ? = ?  WHERE usuario_id = ?`, [user, user, user_id])

    res.send('usuario Actualizado');

});

module.exports = router;