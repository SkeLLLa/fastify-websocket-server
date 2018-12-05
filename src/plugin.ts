import {
  Server,
  ServerOptions,
  VerifyClientCallbackAsync,
  VerifyClientCallbackSync,
  PerMessageDeflateOptions,
} from 'ws';

export interface PluginOptions {
  /**
   * The maximum length of the queue of pending connections.
   */
  backlog?: number;
  /**
   * A function which can be used to validate incoming connections.
   */
  verifyClient?: VerifyClientCallbackAsync | VerifyClientCallbackSync;
  /**
   * A function which can be used to handle the WebSocket subprotocols. See description below.
   */
  handleProtocols?: any;
  /**
   * Accept only connections matching this path.
   * @default /
   */
  path?: string;
  /**
   * Specifies whether or not to track clients.
   */
  clientTracking?: boolean;
  /**
   * Enable/disable permessage-deflate.
   */
  perMessageDeflate?: boolean | PerMessageDeflateOptions;
  /**
   * The maximum allowed message size in bytes.
   */
  maxPayload?: number;
}

export class WsPlugin extends Server {
  constructor(options: ServerOptions) {
    super(options);
  }
}
