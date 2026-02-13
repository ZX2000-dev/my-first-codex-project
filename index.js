import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("ok");
    return;
  }

  if (req.url === "/ping") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("pong");
    return;
  }

  if (req.url === "/time") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(new Date().toISOString());
    return;
  }

  if (req.url === "/json") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello from my first project!\n");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
