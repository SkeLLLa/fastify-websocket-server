# fastify-websocket-server

Fastify plugin that creates websocket server on your fastify instance.

## ToC

- [fastify-websocket-server](#fastify-websocket-server)
  - [ToC](#toc)
  - [Why not use `fastify-ws`?](#why-not-use-fastify-ws)
  - [Getting started](#getting-started)
    - [Installation](#installation)
    - [Usage](#usage)
  - [Docs](#docs)

## Why not use `fastify-ws`?

- It doesn't support all `ws` options in it's constructor.
- It doesn't expose types and doesn't support typescript out of the box.

## Getting started

### Installation

```
npm i fastify-websocket-server
```

### Usage

```js
const fastify = require('fastify')()
const websocketPlugin = require('fastify-websocket-server');
 
fastify.register(websocketPlugin, {
  // The same options that `ws` supports
}).after((err) => {
  if (err) { throw err; }
  fastify.wss
    .on('connection', (ws) => {
      ws.on('message', (msg) => {
        socket.send(msg)); // echo message
      }
    })
})
fastify.listen(3000);
```
## Docs

Docs available via [link](docs/README.md).
