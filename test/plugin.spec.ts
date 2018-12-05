import 'jest';
import fastifyPlugin = require('../src/index');
import * as fastify from 'fastify';
import {Server, IncomingMessage, ServerResponse} from 'http';
import WebSocket from 'ws';
import {AddressInfo} from 'net';

describe('Fastify WS plugin', () => {
  test('fastify plugin registers', async (done) => {
    expect.assertions(4);
    const server: fastify.FastifyInstance<
      Server,
      IncomingMessage,
      ServerResponse
    > = fastify.default();
    server.register(fastifyPlugin);
    await server.ready();
    expect(server.wss).toBeDefined();
    server.wss.on('connection', (socket) => {
      socket.send('hello client');
      socket.on('message', (msg) => {
        expect(msg).toEqual('hello server');
        server.close(() => {
          done();
        });
      });
    });
    server.listen(0, (err) => {
      expect(err).toBeFalsy();
      const addr = server.server.address() as AddressInfo;
      const client = new WebSocket('ws://localhost:' + addr.port);
      client.on('open', () => {
        client.send('hello server');
        client.onmessage = (msg) => {
          expect(msg.data).toEqual('hello client');
        };
        client.close();
      });
    });
  });
});
