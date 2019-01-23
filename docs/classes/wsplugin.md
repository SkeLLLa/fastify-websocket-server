[fastify-websocket-server](../README.md) > [WsPlugin](../classes/wsplugin.md)

# Class: WsPlugin

## Hierarchy

 `Server`

**↳ WsPlugin**

## Index

### Constructors

* [constructor](wsplugin.md#constructor)

### Properties

* [clients](wsplugin.md#clients)
* [fastify](wsplugin.md#fastify)
* [options](wsplugin.md#options)
* [path](wsplugin.md#path)
* [defaultMaxListeners](wsplugin.md#defaultmaxlisteners)

### Methods

* [addListener](wsplugin.md#addlistener)
* [address](wsplugin.md#address)
* [close](wsplugin.md#close)
* [emit](wsplugin.md#emit)
* [eventNames](wsplugin.md#eventnames)
* [getMaxListeners](wsplugin.md#getmaxlisteners)
* [handleUpgrade](wsplugin.md#handleupgrade)
* [listenerCount](wsplugin.md#listenercount)
* [listeners](wsplugin.md#listeners)
* [off](wsplugin.md#off)
* [on](wsplugin.md#on)
* [once](wsplugin.md#once)
* [prependListener](wsplugin.md#prependlistener)
* [prependOnceListener](wsplugin.md#prependoncelistener)
* [rawListeners](wsplugin.md#rawlisteners)
* [removeAllListeners](wsplugin.md#removealllisteners)
* [removeListener](wsplugin.md#removelistener)
* [setMaxListeners](wsplugin.md#setmaxlisteners)
* [shouldHandle](wsplugin.md#shouldhandle)
* [listenerCount](wsplugin.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WsPlugin**(options: *`ServerOptions`*, fastify: *`FastifyInstance`*): [WsPlugin](wsplugin.md)

*Overrides Server.__constructor*

*Defined in plugin.ts:43*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | `ServerOptions` |
| fastify | `FastifyInstance` |

**Returns:** [WsPlugin](wsplugin.md)

___

## Properties

<a id="clients"></a>

###  clients

**● clients**: *`Set`<`WebSocket`>*

*Inherited from Server.clients*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:191*

___
<a id="fastify"></a>

###  fastify

**● fastify**: *`FastifyInstance`*

*Defined in plugin.ts:43*

___
<a id="options"></a>

###  options

**● options**: *`ServerOptions`*

*Inherited from Server.options*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:189*

___
<a id="path"></a>

###  path

**● path**: *`string`*

*Inherited from Server.path*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:190*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/node/index.d.ts:1110*

___

## Methods

<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *"connection"*, cb: *`function`*): `this`

▸ **addListener**(event: *"error"*, cb: *`function`*): `this`

▸ **addListener**(event: *"headers"*, cb: *`function`*): `this`

▸ **addListener**(event: *"listening"*, cb: *`function`*): `this`

▸ **addListener**(event: *`string` | `symbol`*, listener: *`function`*): `this`

*Inherited from Server.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:208*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "connection" |
| cb | `function` |

**Returns:** `this`

*Inherited from Server.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:209*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| cb | `function` |

**Returns:** `this`

*Inherited from Server.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:210*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "headers" |
| cb | `function` |

**Returns:** `this`

*Inherited from Server.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:211*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "listening" |
| cb | `function` |

**Returns:** `this`

*Inherited from Server.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:212*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="address"></a>

###  address

▸ **address**(): `AddressInfo` | `string`

*Inherited from Server.address*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:195*

**Returns:** `AddressInfo` | `string`

___
<a id="close"></a>

###  close

▸ **close**(cb?: *`undefined` | `function`*): `void`

*Inherited from Server.close*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:196*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` cb | `undefined` | `function` |

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` | `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/node/index.d.ts:1124*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`<`string` | `symbol`>

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/node/index.d.ts:1125*

**Returns:** `Array`<`string` | `symbol`>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/node/index.d.ts:1121*

**Returns:** `number`

___
<a id="handleupgrade"></a>

###  handleUpgrade

▸ **handleUpgrade**(request: *`IncomingMessage`*, socket: *`Socket`*, upgradeHead: *`Buffer`*, callback: *`function`*): `void`

*Inherited from Server.handleUpgrade*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:197*

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `IncomingMessage` |
| socket | `Socket` |
| upgradeHead | `Buffer` |
| callback | `function` |

**Returns:** `void`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` | `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/node/index.d.ts:1126*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` | `symbol` |

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: *`string` | `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/node/index.d.ts:1122*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |

**Returns:** `Function`[]

___
<a id="off"></a>

###  off

▸ **off**(event: *`string` | `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Overrides EventEmitter.off*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/node/index.d.ts:1118*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: *"connection"*, cb: *`function`*): `this`

▸ **on**(event: *"error"*, cb: *`function`*): `this`

▸ **on**(event: *"headers"*, cb: *`function`*): `this`

▸ **on**(event: *"listening"*, cb: *`function`*): `this`

▸ **on**(event: *`string` | `symbol`*, listener: *`function`*): `this`

*Inherited from Server.on*

*Overrides EventEmitter.on*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:202*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "connection" |
| cb | `function` |

**Returns:** `this`

*Inherited from Server.on*

*Overrides EventEmitter.on*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:203*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| cb | `function` |

**Returns:** `this`

*Inherited from Server.on*

*Overrides EventEmitter.on*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:204*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "headers" |
| cb | `function` |

**Returns:** `this`

*Inherited from Server.on*

*Overrides EventEmitter.on*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:205*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "listening" |
| cb | `function` |

**Returns:** `this`

*Inherited from Server.on*

*Overrides EventEmitter.on*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:206*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` | `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/node/index.d.ts:1114*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` | `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/node/index.d.ts:1115*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *`string` | `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/node/index.d.ts:1116*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: *`string` | `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Overrides EventEmitter.rawListeners*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/node/index.d.ts:1123*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |

**Returns:** `Function`[]

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` | `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/node/index.d.ts:1119*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` | `symbol` |

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *`string` | `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/node/index.d.ts:1117*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/node/index.d.ts:1120*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="shouldhandle"></a>

###  shouldHandle

▸ **shouldHandle**(request: *`IncomingMessage`*): `boolean`

*Inherited from Server.shouldHandle*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/ws/index.d.ts:199*

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `IncomingMessage` |

**Returns:** `boolean`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` | `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /home/m03geek/dev/os/fastify-websocket-server/node_modules/@types/node/index.d.ts:1109*

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` | `symbol` |

**Returns:** `number`

___

