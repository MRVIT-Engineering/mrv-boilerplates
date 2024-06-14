import * as http from 'http';

import { router } from './router/Router';

const PORT = 5001;

router.get('/', (_, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello' }));
});

const server = http.createServer((req, res) => {
  router.handle(req, res);
});

server.listen(PORT, () => {
  console.log('Server started listening on PORT: ', PORT);
});
