/*const express = require('express');
const app = express();
const path = require('path');

var publicDir = require('path').join(__dirname,'/public'); 
app.use(express.static(publicDir));

//RUTAS:
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/views/home.html'));
});
/*
app.post('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/views/home.html'));
});
*/

/*app.get('/registro', (req, res) => {
	res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, '/views/login.html'));
});

/*
app.listen(3000, () =>
	console.log('Servidor corriendo')
);
*/
/*
app.listen(process.env.PORT || 3000, () =>
	console.log('Servidor corriendo')
);

http.listen((process.env.PORT || 5000), function(){
  console.log('listening on *:5000');
});
*/
////////////////////////////////////// CÓDIGO MOISÉS
const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('puerto',process.env.PORT || 3000)

app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});