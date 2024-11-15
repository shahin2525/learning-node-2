const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/read-file" && req.method === "GET") {
    const readAbleStream = fs.createReadStream(
      process.cwd() + "/texts/read.txt"
    );

    readAbleStream.on("data", (buffer) => {
      res.write(buffer);
    });
    readAbleStream.on("end", () => {
      res.end("hello world");
    });
  }
});

server.listen(8000, () => {
  console.log("server is running 8000");
});
