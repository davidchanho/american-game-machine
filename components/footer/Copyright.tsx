import React from "react";
import { companyName } from "../../context";

function Copyright() {
  return <small className="center-mobile">{companyName}™ 2021</small>;
}

export default Copyright;
