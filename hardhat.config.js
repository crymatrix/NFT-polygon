require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  network: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://rpc-mainnet.matic.network`,
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
