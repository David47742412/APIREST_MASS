const { Router } = require('express');
const router = Router();
const pool = require('../../database');
const helpers = require('../../lib/helpers');

router.patch('/:id' , async (req, res) => {

    

    const { usuario_nombre, usuario_apellido, usuario_numero, usuario_password, usuario_update, usuario_foto, usuario_token } = req.body;
        
    const user = {
            usuario_nombre,
            usuario_apellido,
            usuario_numero,
            usuario_password,
            usuario_update,
            usuario_foto,
            usuario_token
    };

    user_id = parseInt(req.params.id)

    user.usuario_password = await helpers.encryptPassword(usuario_password);

    user.usuario_update = await helpers.getDateNow();

    user.usuario_foto = "https://cdn.discordapp.com/attachments/1038961932671143986/1058419940111171694/13.png";

    await pool.query(`UPDATE usuario SET ? = ?  WHERE usuario_id = ?`, [user, user, user_id]);

    res.send('usuario Actualizado');

});

module.exports = router;