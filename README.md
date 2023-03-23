# Ethereum Test Contract

This is a brief test for an Ethereum Smart Contract.

## Execute a test

Run `npm install` and then `npm test`. This project it's using [Mocha](https://mochajs.org/) as testing library, the code will run in a local test network generated by [Ganache CLI](https://trufflesuite.com/docs/ganache/).

## Deploy in Goerli test network

If you want to deploy the code in the Goerli test network, you must to change the `provider` values in the [deploy.js](deploy.js) file.
You should add your own MetaMask's mnemonic phrase and your API Key from [Infura](https://www.infura.io/).