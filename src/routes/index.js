const {Router} = require('express');
const router = Router();
router.get('/', (req, res)=>{
    res.json({nombre: "Jose"});
});
module.exports = router;