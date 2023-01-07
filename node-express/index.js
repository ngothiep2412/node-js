const express = require("express");
const morgan = require("morgan");
const http = require("http");
const hostname = "localhost";
const port = 5000;

const app = express();
app.use(morgan("dev"));
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
