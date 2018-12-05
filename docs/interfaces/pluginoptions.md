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

**● backlog**: * `undefined` &#124; `number`
*

*Defined in plugin.ts:13*

The maximum length of the queue of pending connections.

___
<a id="clienttracking"></a>

### `<Optional>` clientTracking

**● clientTracking**: * `undefined` &#124; `false` &#124; `true`
*

*Defined in plugin.ts:30*

Specifies whether or not to track clients.

___
<a id="handleprotocols"></a>

### `<Optional>` handleProtocols

**● handleProtocols**: *`any`*

*Defined in plugin.ts:21*

A function which can be used to handle the WebSocket subprotocols. See description below.

___
<a id="maxpayload"></a>

### `<Optional>` maxPayload

**● maxPayload**: * `undefined` &#124; `number`
*

*Defined in plugin.ts:38*

The maximum allowed message size in bytes.

___
<a id="path"></a>

### `<Optional>` path

**● path**: * `undefined` &#124; `string`
*

*Defined in plugin.ts:26*

Accept only connections matching this path.
*__default__*: /

___
<a id="permessagedeflate"></a>

### `<Optional>` perMessageDeflate

**● perMessageDeflate**: * `boolean` &#124; `PerMessageDeflateOptions`
*

*Defined in plugin.ts:34*

Enable/disable permessage-deflate.

___
<a id="verifyclient"></a>

### `<Optional>` verifyClient

**● verifyClient**: * `VerifyClientCallbackAsync` &#124; `VerifyClientCallbackSync`
*

*Defined in plugin.ts:17*

A function which can be used to validate incoming connections.

___

