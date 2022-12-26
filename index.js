const express = require('express');
const path = require('path');

//initialitation
const app = express();
require('dotenv').config();

//setting 
app.set("port", process.env.PORT || 3000);

//midlewars
app.use(express.urlencoded({extended: false}));
app.use(express.json());
require('./src/database');

//Routes
app.use('/apiusuario/', require('./src/routes/index.js'));

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});