import React, { useState } from "react";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

function Recaptcha() {
  const [token, setToken] = useState("");

  const handleVerify = (token: string) => {
    setToken(token);
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.reCaptcha}
      useEnterprise={true}
    >
      <GoogleReCaptcha onVerify={handleVerify} />
    </GoogleReCaptchaProvider>
  );
}

export default Recaptcha;
