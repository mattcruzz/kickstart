import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x20959F1E4EEC65b018e253f89CcCB0a17f3e1D29"
);

export default instance;
