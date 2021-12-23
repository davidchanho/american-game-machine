import React from "react";
import { Alert } from "react-bootstrap";

interface Props {
  status: "idle" | "success" | "error";
}

function ContactAlert({ status }: Props) {
  if (status === "success") {
    return (
      <Alert variant="success" className="mt-3">
        Email successfully sent. We will response as soon as we can.
      </Alert>
    );
  }

  if (status === "error") {
    return (
      <Alert variant="danger" className="mt-3">
        An error has occurred. Please try again later.
      </Alert>
    );
  }

  return null;
}

export default ContactAlert;
