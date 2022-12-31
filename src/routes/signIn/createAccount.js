const {Router} = require('express');
const { check } = require('express-validator');
const pool = require('../../database');
const router = Router();
const bcrypt = require('bcryptjs')
const helpers = require('../../lib/helpers');

router.post('/', async (req, res)=>{

        const { usuario_nombre,
                usuario_apellido, 
                usuario_numero, 
                usuario_email, 
                usuario_password, 
                usuario_token, 
                usuario_create, 
                usuario_update, 
                usuario_foto ,
                usuario_dni,
                usuario_latitud,
                usuario_longitud
            } = req.body;
            
        const user = {
            usuario_nombre,
            usuario_apellido,
            usuario_numero,
            usuario_email,
            usuario_password,
            usuario_token,
            usuario_create,
            usuario_update,
            usuario_foto,
            usuario_dni,
            usuario_latitud,
            usuario_longitud
        }

        user.usuario_create = await helpers.getDateNow();

        user.usuario_foto = await "https://cdn.discordapp.com/attachments/1038961932671143986/1058419940111171694/13.png"
        
        user.usuario_update = await helpers.getDateNow();

        user.usuario_password = await helpers.encryptPassword(usuario_password);
    
        user.usuario_token = await helpers.getToken({
            usuario_correo: user.usuario_email,
            usuario_password: user.usuario_password
        });

        await pool.query('INSERT INTO usuario set ?', [user]);
    
        res.send(user);
});

module.exports = router;