const http = require("http");
const hostname = "localhost"
const port = 3333

const server = http.createServer((req, res) => {
	res.setHeader("content-type", "text/plain");
	res.end("Hello World");
});

server.listen(port, hostname, () => {
	console.info("STARTED SERVER");
});