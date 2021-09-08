var app = require('./config/server')

var rotaNoticias = require('./app/routes/noticias')(app);

var rotaHome = require('./app/routes/home')(app);

var formInclusao = require('./app/routes/formulario_inclusao')(app);

app.listen(3000, function(){
    console.log('Servidor On');
});

//var msg = require('./mod_teste')
