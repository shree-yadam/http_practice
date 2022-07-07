const http = require("http");

const server = http.createServer((req,res) => {
  res.end(`Requested path: ${req.url}\nRequest method: ${req.method}`);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});