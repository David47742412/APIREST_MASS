const {Router} = require('express');
const router = Router();

router.get('/n', (req, res)=>{
    res.send("Hola");
})

router.use('/signIn', require('./signIn/createAccount.js'));

module.exports = router;