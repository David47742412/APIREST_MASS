const {Router} = require('express');
const router = Router();

router.get('/n', (req, res)=>{
    res.send("Hola");
})

router.use('/signin', require('./signIn/createAccount.js'));

router.use('/listar', require('./listaccount/listAccount.js'));

router.use('/update', require('./signIn/updateAccount.js'));

router.use('/delete', require('./signIn/deleteAccount.js'));

router.use('/messageDatailtCreate', require('./chat/createMessageDetail.js'));

router.use('/messageCreate', require('./chat/createmessage.js'));

router.use('/messageListar', require('./chat/listarMessage.js'));

router.use('/messageDetailListar', require('./chat/listarMessageDatail.js'));

router.use('/getMessage', require('./chat/getMensaje.js')); // mensaje_id

router.use('/getUser', require('./signIn/getUser.js'));

router.use('/isaccount', require('./listaccount/getAccount.js'));

router.use('/listarMensajesView', require('./chat/detalleMessage_View.js'));

router.use('/mensajeIdForDetail', require('./chat/countMessageForId.js'));

module.exports = router;