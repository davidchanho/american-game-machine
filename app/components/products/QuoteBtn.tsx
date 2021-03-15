import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

function QuoteBtn() {
  return (
    <Link href="/contact">
      <Button variant="primary">Get A Quote</Button>
    </Link>
  );
}

export default QuoteBtn;
