const { Router } = require('express');
const router = Router();
const pool = require('../../database');
const bcrypt = require('bcryptjs');
const {  } = require('../../lib/helpers');

router.get('/:usuario_email/:usuario_password', async (req, res) => {


    const password = req.params.usuario_password;

    const email = req.params.usuario_email;

    const info = await pool.query("SELECT usuario_password FROM usuario WHERE usuario_email = ?", [email]);

    const value = await bcrypt.compareSync(password, info[0].usuario_password);

    res.json({
        value: value
    });
    
    // try {
    //     if (info.toString() !== "" && await matchPassword(password, info[0].usuario_password)) {
                
    //         res.json({ 
    //             success: true
    //         });
    
    //     } else if (info.toString() === "") {
    //         res.status(404);
    //         res.json({
    //             Datos_bd: info,
    //         });
    //     } else {
    //         res.json({
    //             Datos_bd: info,
    //             match: await matchPassword(password, info[0].usuario_password)
    //         });
    //     }
    // } catch (err) {
    //    res.send(err);
    // } 

})

module.exports = router;