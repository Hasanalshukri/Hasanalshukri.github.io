import http from 'node:http';
import { fileURLToPath } from 'url';
import path from 'path';
import { StringDecoder } from 'string_decoder';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = process.env.HOST ?? 'localhost';
const PORT = process.env.PORT ?? 3000;

const requestHandler = (req, res) => {
  const { headers, method, url } = req;
  let body = [];

  if (url === '/users' && method === 'POST') {
    const decoder = new StringDecoder('utf-8');
    req.on('data', (chunk) => {
      body.push(decoder.write(chunk));
    }).on('end', () => {
      body.push(decoder.end());
      body = body.join('');

      // Here, you can process the POST request body as needed
      console.log(body); // Log the POST request body for debugging

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'User created successfully.' }));
    });
  } else {
    // Handler for other routes or methods
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
};

const server = http.createServer(requestHandler);

server.listen(PORT, HOST, () => {
  console.log(`Server running at: http://${HOST}:${PORT}/`);
});
