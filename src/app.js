const fs = require('fs');

// Initialize framework Express and add reference of the framework into a property
const express = require('express');
const app = new express();

const path = require('path');

// Make a connection with View
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Route
app.get('/', (req, res) => res.render('index', { accounts: accounts }));

app.get('/savings', (req, res) =>
  res.render('account', { account: accounts.savings })
);
app.get('/checking', (req, res) =>
  res.render('account', { account: accounts.checking })
);
app.get('/credit', (req, res) =>
  res.render('account', { account: accounts.credit })
);

app.get()

// Read AccountData and UserData
const accountData = fs.readFileSync(
  path.join(__dirname, 'json', 'accounts.json'),
  'utf8'
);
const accounts = JSON.parse(accountData);
console.log(accountData);
const userData = fs.readFileSync(
  path.join(__dirname, 'json', 'users.json'),
  'utf8'
);
const users = JSON.parse(userData);
console.log(users);

// Listen to PORT = 3000
app.listen(3000, () => console.log('PS Project Running on port 3000'));
