module.exports = function (app) {
  app.get('/noticias', function (req, res) {
    var mysql = require('mysql');

    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'mayconribeiro',
      password: 'Admin@Root12345',
      database: 'portal_noticias',
    });

    connection.query('SELECT * FROM noticias', function (error, result) {
      res.render("noticias/noticias", {noticias : result});
    });

    //res.render("noticias/noticias");
  });
};
