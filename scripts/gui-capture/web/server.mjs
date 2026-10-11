import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';

const mime = {'.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.pdf': 'application/pdf'};

export async function captureServer({root, port = 18910, api = 'http://127.0.0.1:18889'}) {
  const upstream = new URL(api);
  const server = http.createServer(async (req, res) => {
    if (/^\/(api|archive|export|ws)(\/|\?|$)/.test(req.url)) {
      const proxy = http.request({hostname: upstream.hostname, port: upstream.port, method: req.method, path: req.url,
        headers: {...req.headers, host: upstream.host}}, response => {
        res.writeHead(response.statusCode, response.headers);
        response.pipe(res);
      });
      proxy.on('error', error => {res.writeHead(502); res.end(error.message);});
      req.pipe(proxy);
      return;
    }
    let pathname;
    try {pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);} catch {res.writeHead(400);res.end();return;}
    const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(path.resolve(root) + path.sep)) {res.writeHead(403);res.end();return;}
    try {
      const bytes = await fs.readFile(file);
      res.writeHead(200, {'content-type': mime[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store'});
      res.end(bytes);
    } catch {res.writeHead(404);res.end('Not found');}
  });
  server.on('upgrade', (req, socket, head) => {
    const proxy = http.request({hostname: upstream.hostname, port: upstream.port, method: 'GET', path: req.url,
      headers: {...req.headers, host: upstream.host}});
    proxy.on('upgrade', (response, upstreamSocket, upstreamHead) => {
      socket.write('HTTP/1.1 101 Switching Protocols\r\n' + Object.entries(response.headers).map(([k,v]) => `${k}: ${v}`).join('\r\n') + '\r\n\r\n');
      if (head.length) upstreamSocket.write(head);
      if (upstreamHead.length) socket.write(upstreamHead);
      socket.pipe(upstreamSocket).pipe(socket);
      socket.on('error', () => upstreamSocket.destroy());
      upstreamSocket.on('error', () => socket.destroy());
    });
    proxy.on('error', () => socket.destroy());
    proxy.end();
  });
  await new Promise(resolve => server.listen(port, '127.0.0.1', resolve));
  return server;
}
