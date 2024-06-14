import { IncomingMessage, ServerResponse } from 'http';

export default class MainController {
  sayHello(req: IncomingMessage, res: ServerResponse) {
    console.log('METHOD ', req.method);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello there');
  }
}
