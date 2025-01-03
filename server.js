const app = require("./app");
const http = require("http");
const server = http.createServer(app)
console.log("ok")
server.listen(5600);
