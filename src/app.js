const fs = require("fs");
const path = require("path");

const express = require("express");
const { render } = require("ejs");
const app = new express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

/* Module 3 */
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

// Read AccountData and UserData
const accountData = fs.readFileSync(
  path.join(__dirname, "json", "accounts.json"),
  "utf8"
);
const accounts = JSON.parse(accountData);
const userData = fs.readFileSync(
  path.join(__dirname, "json", "users.json"),
  "utf8"
);
const users = JSON.parse(userData);

/*  Module 4
  1. update index route  
  2. Add title into index.ejs
  3. Take all info exist into accounts.json 
*/
app.get("/", (req, res) =>
  res.render("index", { title: "Account Summary", accounts: accounts })
);

/* 
  1. Create /saving, /checking, /credit account-route
  2. Point into specific part of accounts json 
*/
app.get("/savings", (req, res) =>
  res.render("account", { account: accounts.savings })
);

app.get("/checking", (req, res) =>
  res.render("account", { account: accounts.checking })
);
app.get("/credit", (req, res) =>
  res.render("account", { account: accounts.credit })
);

app.get("/profile", (req, res) => res.render("profile", { user: users[0] }));

/* Module 5 */
// GET
app.get("/transfer", (req, res) => res.render("transfer"));


//Create
app.post('/transfer', (req, res) => {
 accounts[req.body.from].balance -= req.body.amount;
  accounts[req.body.to].balance += parseInt(req.body.amount, 10);
  let accountsJSON = JSON.stringify(accounts, null, 4);
  fs.writeFileSync(
    // specify the absolute path using: path.join & __dirname
    path.join(__dirname, 'json', 'accounts.json'),
    accountsJSON,
    'utf8'
  );
  res.render('transfer', { message: 'Transfer Completed' });
});

app.get('/payment', (req, res) => res.render('payment', {account: accounts.credit}));

app.post('/payment', (req, res) => {
  accounts.credit.balance -= req.body.amount; // x -= y <=> x = x-y;
  accounts.credit.available += parseInt(req.body.amount);
  let accountsJSON = JSON.stringify(accounts, null, 4);

  // write this calculation into json 
  fs.writeFileSync(
    path.join(__dirname, 'json', 'accounts.json'),
    accountsJSON,
    'utf8'
  );

  res.render('payment', {
    message: 'Payment Successful',
    account: accounts.credit,
  });
});

app.listen(3000, () => {
  console.log("PS Project Running on port 3000!");
});
