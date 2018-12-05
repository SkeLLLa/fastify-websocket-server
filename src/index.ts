import {FastifyInstance, Plugin} from 'fastify';
import * as http from 'http';
import fastifyPlugin from 'fastify-plugin';
import {PluginOptions, WsPlugin} from './plugin';

const fastifyWebsocketServer: Plugin<
  http.Server,
  http.IncomingMessage,
  http.ServerResponse,
  PluginOptions
> = function wsServer(
  fastify: FastifyInstance,
  options: PluginOptions,
  next: fastifyPlugin.nextCallback
) {
  const pluginInsance = new WsPlugin(
    Object.assign({server: fastify.server}, options)
  );
  fastify.decorate('wss', pluginInsance);
  fastify.addHook('onClose', (fastify, done) => fastify.wss.close(done));
  next();
};

declare module 'fastify' {
  interface FastifyInstance<
    HttpServer = http.Server,
    HttpRequest = http.IncomingMessage,
    HttpResponse = http.ServerResponse
  > {
    wss: WsPlugin;
  }
}

export = fastifyPlugin(fastifyWebsocketServer, {
  fastify: '>=1.0.0',
  name: 'fastify-websocket-server',
});
