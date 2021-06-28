import React, { PropsWithChildren } from "react";
import styles from "./index.module.scss";

interface SectionProps {
  title: string;
}

function Section({ title, children }: PropsWithChildren<SectionProps>) {
  return (
    <section className={styles.section}>
      <div className={`${styles.anchor} mb-5 text-capitalize`}>
        <span id={title} className="d-block position-relative hidden" />
        <p className={`${styles.title} text-center`}>{title}</p>
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <div className="container">{children}</div>
      </div>
    </section>
  );
}

export default Section;
