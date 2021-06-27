'use strict'

const express = require('express');
const app = express();
const path = require('path')
const hbs = require('express-handlebars')

const bodyParser = require('body-parser')
app.use(bodyParser())

app.set('views', path.join(__dirname, 'views'))

app.engine('.hbs', hbs({
  layoutsDir:path.join(app.get('views'), 'layouts'),
  partialsDir:path.join(app.get('views'), 'partials'),
  extname:'.hbs',
  defaultLayout:'main'  
}))

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
     res.render('index')
});

app.post('/hello', (req, res) => {
  
  res.render('saludo', {name: req.body.name} )     
});
  

app.listen(3000, () => console.log('Listening on port 3000!'));


