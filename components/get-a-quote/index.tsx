import React from "react";
import { Button } from "react-bootstrap";

function GetAQuote() {
  return (
    <Button
      variant="light"
      size="lg"
      href="/#contact"
      className="mt-3"
      role="button"
    >
      Get a Quote
    </Button>
  );
}

export default GetAQuote;
