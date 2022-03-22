import React from "react";
import BuyType from "./BuyType";
import Input from "./Input";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button } from "@mui/material";

export default function form() {
  return (
    <div className="form">
      <div className="f-container">
        <h3>Max Bupa is now Niva Bupa Health Insurance</h3>
        <p>Avail discount upto 7.5% on premium when you buy online</p>
        <div className="buying-for">
          <BuyType src="/campaign_myself.svg" title="indiviual" />
          <BuyType src="/campaign_me_spouse.png" title="husband and wife" />
          <BuyType src="/campaign_family.svg" title="Family" />
        </div>
        <div className="f-input">
          <Input label="Name" placeholder="Enter your name" />
          <Input label="DOB" placeholder="Enter your DOB" datatype="Date" />
          <Input
            label="Mobile(will be linked to your policy)"
            placeholder="Enter your mobile number"
          />
        </div>
        <p>
          By clicking View Plans, you authorize Niva Bupa to call/SMS on your
          registered mobile number and also consent to override your existing
          registry in DNCR. Further, you agree to get quote and policy details
          on WhatsApp
        </p>
        <Button variant="contained">
          VIEW PLANS <ArrowRightAltIcon />
        </Button>
      </div>
    </div>
  );
}
