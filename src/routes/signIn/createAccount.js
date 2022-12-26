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

        user.usuario_foto = await "https://i.ibb.co/YThSnKy/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg"
        
        user.usuario_update = await helpers.getDateNow();

        user.usuario_password = await bcrypt.hash(usuario_password, 12);
    
        user.usuario_token = await helpers.getToken({
            usuario_correo: user.usuario_email,
            usuario_password: user.usuario_password
        });

        await pool.query('INSERT INTO usuario set ?', [user]);
    
        res.send(user);
});

module.exports = router;