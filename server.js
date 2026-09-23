const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    fs.readFile(path.join(__dirname, "index.html"), "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Unable to load the application.");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
    return;
  }

  if (req.url === "/script.js") {
    fs.readFile(path.join(__dirname, "script.js"), (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "application/javascript"
      });
      res.end(data);
    });
    return;
  }

  if (req.url === "/style.css") {
    fs.readFile(path.join(__dirname, "style.css"), (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/css"
      });
      res.end(data);
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Page not found");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
