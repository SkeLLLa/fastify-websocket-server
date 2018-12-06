# fastify-websocket-server

Fastify plugin that creates websocket server on your fastify instance.

[![NPM Version](https://img.shields.io/npm/v/fastify-websocket-server.svg)](https://www.npmjs.com/package/fastify-websocket-server)
[![Downloads Count](https://img.shields.io/npm/dm/fastify-websocket-server.svg)](https://www.npmjs.com/package/fastify-websocket-server)
[![Vunerabilities Count](https://snyk.io/test/npm/fastify-websocket-server/badge.svg)](https://snyk.io/test/npm/fastify-websocket-server/badge.svg)
[![Build Status](https://gitlab.com/m03geek/fastify-websocket-server/badges/master/pipeline.svg)](https://gitlab.com/m03geek/fastify-websocket-server/commits/master)
[![Coverage Status](https://gitlab.com/m03geek/fastify-websocket-server/badges/master/coverage.svg)](https://gitlab.com/m03geek/fastify-websocket-server/commits/master)
[![License](https://img.shields.io/npm/l/fastify-websocket-server.svg)](https://gitlab.com/m03geek/fastify-websocket-server/blob/master/LICENSE)

## ToC

- [fastify-websocket-server](#fastify-websocket-server)
  - [ToC](#toc)
  - [Why not use `fastify-ws`?](#why-not-use-fastify-ws)
  - [Getting started](#getting-started)
    - [Installation](#installation)
    - [Usage](#usage)
  - [Docs](#docs)
  - [Roadmap](#roadmap)
    - [Support for "typed" websockets](#support-for-%22typed%22-websockets)
    - [Better support for JSON messages](#better-support-for-json-messages)

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

## Roadmap

Any ideas or PR welcome

### Support for "typed" websockets

Allow setting message types via query param or some header. This will set default message mode.

### Better support for JSON messages

The idea is if websocket message type is set to JSON to add following:

- support JSON message validation against schema, just like Fastify does.
- use `fast-json-stringify` module to serialize messages with schemas
