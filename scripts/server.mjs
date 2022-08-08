import http from "http";
import { readFile } from "fs/promises";

const hostname = "127.0.0.1";
const port = 8888;

const server = http.createServer((req, res) => listen(req, res));

async function listen(req, res) {
  const { filePath, status } = resolveFile(req.url);
  const file = await readFile(filePath);
  res.setHeader("Content-Type", "text/html");
  res.writeHead(status);
  res.end(file);
}

function resolveFile(url) {
  return url === "/"
    ? { filePath: "public/index.html", status: 200 }
    : { filePath: "public/404.html", status: 404 };
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
