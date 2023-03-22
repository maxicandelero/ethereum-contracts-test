const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
 
const { abi, evm } = require('../compile');
 
let accounts;
let inboxContract;
const INITIAL_MESSAGE = 'Hello world!';
 
beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
  inboxContract = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
      arguments: [INITIAL_MESSAGE],
    })
    .send({ from: accounts[0], gas: '1000000' });
});
 
describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inboxContract.options.address);
  });

  it('has a default message', async () => {
    const message = await inboxContract.methods.message().call();
    assert.equal(message, INITIAL_MESSAGE);
  });

  it('can change the message', async () => {
    const NEW_MESSAGE = 'A new message';
    await inboxContract.methods.setMessage(NEW_MESSAGE).send({ from: accounts[0] });
    const message = await inboxContract.methods.message().call();
    assert.equal(message, NEW_MESSAGE);
  });
});