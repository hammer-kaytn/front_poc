// const HDWalletProvider = require("truffle-hdwallet-provider")
const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
// const NETWORK_ID = '3' // Ethereum, Ropsten testnet's network id
const NETWORK_ID = "1001"; // Klaytn, Baobab testnet's network id

// const RPC_URL = 'https://ropsten.infura.io/'
const RPC_URL = "https://api.baobab.klaytn.net:8651/";

// Change it to your own private key that has enough KLAY to deploy contract
const PRIVATE_KEY =
  "0xd89f2b7e182eba827b5632a944cc7cf92dc721c80eab6349c945bf031cdf9330";

module.exports = {
  networks: {
    /* ropsten: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, RPC_URL),
      network_id: NETWORK_ID,
      gas: '8500000',
      gasPrice: null,
    }, */

    baobab: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, RPC_URL),
      network_id: NETWORK_ID,
      gas: "8500000",
      gasPrice: null,
    },
  },
  compilers: {
    solc: {
      version: "0.5.0",
    },
  },
};
