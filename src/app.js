const fs = require('fs');

// Initialize framework Express and add reference of the framework into a property
const express = require('express');
const app = new express();

const path = require('path');
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Index Route
app.get('/', (req, res) => res.render('index', { title: 'Index' }));

// Listen to PORT = 3000
app.listen(3000, () => console.log('PS Project Running on port 3000'))