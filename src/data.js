const fs = require("fs");

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

  const writeJSON = () => {
    return (console.log('writeJSON'));

    fs.writeFileSync(
        // specify the absolute path using: path.join & __dirname
        path.join(__dirname, 'json', 'accounts.json'),
        accountsJSON,
        'utf8'
      );
    
  };






