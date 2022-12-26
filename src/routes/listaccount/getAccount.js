const { Router } = require('express');
const router = Router();
const pool = require('../../database');
const bcrypt = require('bcryptjs');
const {  } = require('../../lib/helpers');

router.get('/:usuario_email/:usuario_password', async (req, res) => {


    const password = req.params.usuario_password;

    const email = req.params.usuario_email;

    const info = await pool.query("SELECT usuario_password FROM usuario WHERE usuario_email = ?", [email]);
    
    try {
        if (info.toString() !== "" && await matchPassword(password, info[0].usuario_password)) {
                
            res.json({ 
                success: true
            });
    
        } else {
            res.json({
                success: false
            })
        }
    } catch (err) {
       res.json({
        success: false
       });
    } 

})

module.exports = router;