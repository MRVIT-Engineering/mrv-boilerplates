import * as http from 'http';
import { URL } from 'url';

export const server = http.createServer((request, response) => {
  console.log('Request url is ', request.url);

  const requestUrl = new URL(
    request.url || '',
    `http://${request.headers.host}`
  );
  console.log('Pathname is ', requestUrl.pathname);

  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Everything ok');
});
