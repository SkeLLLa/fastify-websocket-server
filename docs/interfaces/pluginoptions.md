[fastify-websocket-server](../README.md) > [PluginOptions](../interfaces/pluginoptions.md)

# Interface: PluginOptions

## Hierarchy

**PluginOptions**

## Index

### Properties

* [backlog](pluginoptions.md#backlog)
* [clientTracking](pluginoptions.md#clienttracking)
* [handleProtocols](pluginoptions.md#handleprotocols)
* [maxPayload](pluginoptions.md#maxpayload)
* [path](pluginoptions.md#path)
* [perMessageDeflate](pluginoptions.md#permessagedeflate)
* [verifyClient](pluginoptions.md#verifyclient)

---

## Properties

<a id="backlog"></a>

### `<Optional>` backlog

**● backlog**: *`undefined` | `number`*

*Defined in plugin.ts:14*

The maximum length of the queue of pending connections.

___
<a id="clienttracking"></a>

### `<Optional>` clientTracking

**● clientTracking**: *`undefined` | `false` | `true`*

*Defined in plugin.ts:31*

Specifies whether or not to track clients.

___
<a id="handleprotocols"></a>

### `<Optional>` handleProtocols

**● handleProtocols**: *`any`*

*Defined in plugin.ts:22*

A function which can be used to handle the WebSocket subprotocols. See description below.

___
<a id="maxpayload"></a>

### `<Optional>` maxPayload

**● maxPayload**: *`undefined` | `number`*

*Defined in plugin.ts:39*

The maximum allowed message size in bytes.

___
<a id="path"></a>

### `<Optional>` path

**● path**: *`undefined` | `string`*

*Defined in plugin.ts:27*

Accept only connections matching this path.
*__default__*: /

___
<a id="permessagedeflate"></a>

### `<Optional>` perMessageDeflate

**● perMessageDeflate**: *`boolean` | `PerMessageDeflateOptions`*

*Defined in plugin.ts:35*

Enable/disable permessage-deflate.

___
<a id="verifyclient"></a>

### `<Optional>` verifyClient

**● verifyClient**: *`VerifyClientCallbackAsync` | `VerifyClientCallbackSync`*

*Defined in plugin.ts:18*

A function which can be used to validate incoming connections.

___

