import React, { useEffect } from "react";
import factory from "../ethereum/factory";

const CampaignIndex = () => {
  useEffect(() => {
    const fetchData = async () => {
      const campaigns = await factory.methods.getDeployedCampaigns().call();

      console.log(campaigns);
    };

    fetchData();
  });

  return <h1>Campaigns Index!</h1>;
};

export default CampaignIndex;
