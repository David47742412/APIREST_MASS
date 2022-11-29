const {Router} = require('express');
const router = Router();

router.get('/n', (req, res)=>{
    res.send("Hola");
})

router.use('/signIn', require('./signIn/createAccount.js'));

router.use('/listar', require('./listaccount/listAccount.js'));

router.use('/update', require('./signIn/updateAccount.js'))

router.use('/delete', require('./signIn/deleteAccount.js'))

module.exports = router;