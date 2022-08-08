import http from "http";
import { readFile } from "fs/promises";

const hostname = "127.0.0.1";
const port = 8888;

const server = http.createServer((req, res) => listen(req, res));

async function listen(req, res) {
  const { filePath, statusCode, contentType } = resolveFile(req.url);
  const file = await readFile(filePath);
  res.setHeader("Content-Type", contentType);
  res.writeHead(statusCode);
  res.end(file);
}

function resolveFile(url) {
  switch (url) {
    case "/":
      return {
        filePath: "public/index.html",
        statusCode: 200,
        contentType: "text/html",
      };
    case "/fixed":
      return {
        filePath: "public/fixed.html",
        statusCode: 200,
        contentType: "text/html",
      };
    case "/assets/font/fira-mono-400.woff2":
      return {
        filePath: `public${url}`,
        statusCode: 200,
        contentType: "font/woff2",
      };
    case "/assets/font/fira-mono-700.woff2":
      return {
        filePath: `public${url}`,
        statusCode: 200,
        contentType: "font/woff2",
      };
    default:
      return {
        filePath: "public/404.html",
        statusCode: 404,
        contentType: "text/html",
      };
  }
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
