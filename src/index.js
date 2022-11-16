const express = require('express');
const path = require('path');

//initialitation
const app = express();


//setting 
app.set("port", process.env.PORT || 3000);

//midlewars
app.use(express.urlencoded({extended: false}));
app.use(express.json())

//Routes
app.use('/api', require('./routes'));

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});