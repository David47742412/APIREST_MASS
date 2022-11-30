const bcryp = require('bcryptjs');
const jwt = require('jsonwebtoken');

const helpers = {
}
helpers.encrypPassword = async (password)=>{
    const hast = await bcryp.hash(password, 10);
    return hast;
};

helpers.matchPassword = async (password, savePassword)=>{
    try {
        return await bcryp.compare(password, savePassword);
    } catch (error) {
        console.log('ocurrio un error');
    }
};

/*
helpers.getToken = async (payload) => {
    return jwt.sign(payload, semilla);
}
*/

helpers.getDateNow = async () => {
    const date = new Date(Date.now());
    let year, month, day ,horas,minutos,segundos;
    year = String(date.getFullYear());
    month = String(date.getMonth() + 1);
    if (month.length == 1) {
      month = "0" + month;
    }
    day = String(date.getDate());
    if (day.length == 1) {
      day = "0" + day;
    }
    horas = String(date.getHours() )
    if(horas.length == 1) {
      horas = "0" + horas;
    }
    minutos = String(date.getMinutes() )
    if(minutos.length == 1) {
      minutos = "0" + minutos;
    }
    segundos = String(date.getSeconds());
    if(segundos.length == 1){
      segundos = "0" + segundos;
    }
    return year + "-" + month + "-" + day + " " + horas + ":" + minutos + ":" + segundos;

  }


module.exports = helpers;