require('babel-register')
require('babel-polyfill')
const HDWalletProvider = require('truffle-hdwallet-provider')

module.exports = {
  networks: {
    dev: {
      provider: function() {
        return new HDWalletProvider(["8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63", "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3", "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f"], "https://palm-devnet.infura.io/v3/6071ae03c33343bba487b780a9851329", 0, 3)
      }, 
network_id:2021,
from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",  
gas: 2214156
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://ropsten.infura.io/v3/${process.env.ROPSTEN_INFURA_API_KEY}`
        )
      },
      network_id: '3',
    },
  },
  compilers: {
    solc: {
      version: '0.4.25'    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
}
