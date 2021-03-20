import React, { useState } from "react";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

function Recaptcha() {
  const [token, setToken] = useState("");

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.reCaptcha}
      useEnterprise={true}
    >
      <GoogleReCaptcha
        onVerify={(token) => {
          setToken(token);
        }}
      />
    </GoogleReCaptchaProvider>
  );
}

export default Recaptcha;
