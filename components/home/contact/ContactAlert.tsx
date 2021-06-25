import React from "react";

interface Props {
  status: "idle" | "success" | "error";
}

function ContactAlert({ status }: Props) {
  if (status === "success") {
    return (
      <div className="alert alert-success mt-3">
        Email successfully sent. We will response as soon as we can.
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="alert alert-danger mt-3">
        An error has occurred. Please try again later.
      </div>
    );
  }

  return null;
}

export default ContactAlert;
