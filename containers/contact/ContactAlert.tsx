import React from "react";

interface Props {
  status: "idle" | "success" | "error";
}

const renderSuccess = () => {
  return (
    <div className="alert alert-success mt-3">
      Email successfully sent. We will response as soon as we can.
    </div>
  );
};

const renderError = () => {
  return (
    <div className="alert alert-danger mt-3">
      An error has occurred. Please try again later.
    </div>
  );
};

function ContactAlert({ status }: Props) {
  if (status === "success") {
    return renderSuccess();
  }

  if (status === "error") {
    return renderError();
  }

  return null;
}

export default ContactAlert;
