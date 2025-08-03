const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'by5cdsyn2oc5fg3ab4yd-mysql.services.clever-cloud.com',
  user: 'urzlhjuml3lmia5p',
  password: 'ZXvVBuRICUjp21nq8OIg',
  database: 'by5cdsyn2oc5fg3ab4yd'
});


module.exports = db;
