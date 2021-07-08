import React, { PropsWithChildren } from "react";
import styles from "./index.module.scss";

interface SectionProps {
  link: string;
}

function Section({ link, children }: PropsWithChildren<SectionProps>) {
  return (
    <section className={styles.section}>
      <div className={`${styles.anchor} mb-5 text-capitalize`}>
        <span id={link} className="d-block position-relative hidden" />
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <div className="container">{children}</div>
      </div>
    </section>
  );
}

export default Section;
