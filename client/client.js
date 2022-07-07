const request = require("request");

request("http://localhost:3000", (err, res, body) => {
  console.log(body);
});