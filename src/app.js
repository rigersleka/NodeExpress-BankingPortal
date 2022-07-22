const fs = require('fs');

const express = require('express');
const { path } = require('path');
const app = new express();

app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Index' });
});

app.listen(8080);
console.log('PS Project Running on port 3000!');
