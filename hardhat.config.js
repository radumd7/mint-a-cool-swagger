/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
const { ALCHEMY_URL, METAMASK_PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: process.env.ALCHEMY_URL,
         accounts: [`0x${process.env.METAMASK_PRIVATE_KEY}`]
      }
   },
};
