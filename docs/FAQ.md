# Frequently Asked Questions


## Using luma.gl in isorender applications

> Q: I am using luma.gl in an isorender application and I get an error message from luma.gl on the server

For typical isorender scenarios, you just need to the application not to fail while intializing the luma.gl library, you don't actually instantiate e.g. WebGL contexts on the server.

luma.gl is designed to support isorender application, i.e. the library can be loaded without problems under Node.js, as long as the application doesn't actually try to use WebGL (i.e. create WebGL contexts).

However when luma.gl discovers that headless gl is not available it tries to give a helpful message explaining the situation. This can safely be ignored.

Remember that you **can** actually create WebGL contexts under Node.js, as long as the headless `gl` is installed in your `node_modules` directory. More information on [using luma.gl with Node.js](docs/getting-started/using-with-node.md).
