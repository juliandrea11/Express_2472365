const express = require('express') // importar el paquete express
const app = express()
const hbs = require ('hbs')// Solamente para trabajar a nivel de pantallas
const port = 8282 //Definir el puerto

//Servidor contenido estático
//Establecer el directorio donde se encuentran los 
//archivos html
app.use (express.static('public'));

//Motor de la plantilla 
hbs.registerPartials(__dirname + '/public/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/public/views');

app.get('/', (req, res) => {
    //res.send ('Hola mundo')
    res.render('ventas', {
        nombre: 'Ventas'
    })
})

app.get('*', (req, res) => {
    res.sendFile (__dirname +'/public/views/404.html'); //Llamar a la página -> dirname: directorio raiz donde estoy ubicado
})


app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`)
})