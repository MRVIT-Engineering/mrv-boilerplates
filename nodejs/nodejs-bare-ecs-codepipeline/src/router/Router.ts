import { IncomingMessage, ServerResponse } from 'http';
import { URL } from 'url';

type RouteHandler = (req: IncomingMessage, res: ServerResponse) => void;

interface Route {
  method: string;
  path: string;
  handler: RouteHandler;
}

class Router {
  private routes: Route[] = [];

  public get(path: string, handler: RouteHandler) {
    this.addRoute('GET', path, handler);
  }

  public post(path: string, handler: RouteHandler) {
    this.addRoute('POST', path, handler);
  }

  public put(path: string, handler: RouteHandler) {
    this.addRoute('PUT', path, handler);
  }

  public delete(path: string, handler: RouteHandler) {
    this.addRoute('DELETE', path, handler);
  }

  private addRoute(method: string, path: string, handler: RouteHandler) {
    this.routes.push({ method, path, handler });
  }

  public handle(req: IncomingMessage, res: ServerResponse) {
    const requestUrl = new URL(req.url || '', `http://${req.headers.host}`);
    const { pathname } = requestUrl;
    const method = req.method || 'GET';

    for (const route of this.routes) {
      if (route.method === method && route.path === pathname) {
        return route.handler(req, res);
      }
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}

export const router = new Router();
