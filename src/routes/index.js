const {Router} = require('express');
const router = Router();

router.get('/n', (req, res)=>{
    res.send("Hola");
})

router.use('/signin', require('./signIn/createAccount.js'));

router.use('/listar', require('./listaccount/listAccount.js'));

router.use('/update', require('./signIn/updateAccount.js'));

router.use('/delete', require('./signIn/deleteAccount.js'));

router.use('/messageDatailtCreate', require('./chat/createMessageDetail'));

router.use('/messageCreate', require('./chat/createmessage'));

router.use('/messageListar', require('./chat/listarMessage'));

router.use('/isaccount', require('./listaccount/getAccount'))

module.exports = router;