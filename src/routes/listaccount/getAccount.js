const { Router } = require('express');
const router = Router();
const pool = require('../../database');
const bcrypt = require('bcryptjs');
const helpers = require('../../lib/helpers');

router.get('/:usuario_email/:usuario_password', async (req, res) => {


    const password = req.params.usuario_password;

    const email = req.params.usuario_email;

    const info = await pool.query("SELECT usuario_password FROM usuario WHERE usuario_email = ?", [email]);
    
    try {
        if (info.toString() !== "" && await helpers.matchPassword(password, info[0].usuario_password) ) {
            
            const usuario = await pool.query("SELECT * FROM usuario WHERE usuario_email = ?", [email])

            res.send({ 
                success: true,
                usuario: usuario
            });
    
        } else {
            res.send({
                success: false
            })
        }
    } catch (err) {
       console.log(err);
    } 

})

module.exports = router;