import Web3 from "web3";
require("dotenv/config");

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // we are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server or the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    process.env.RINKEBY_TEST // connect to rinkeby test network (infura node)
  );
  web3 = new Web3(provider);
}

export default web3;
