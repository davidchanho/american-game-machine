import React, { PropsWithChildren } from "react";

interface SectionProps {
  link: string;
}

function Section({ link, children }: PropsWithChildren<SectionProps>) {
  return (
    <section className="min-vh-100 mx-auto d-flex align-items-center justify-content-center">
      <div className="mb-5 text-capitalize">
        <span id={link} className="d-block position-relative hidden mb-3" />
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <div className="container">{children}</div>
      </div>
    </section>
  );
}

export default Section;
