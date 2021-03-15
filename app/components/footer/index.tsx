import { useAppContext } from "../../context";
import styles from "./Footer.module.scss";

export default function Footer() {
  const {
    companyInfo: { name },
  } = useAppContext();

  return <footer className={styles.footer}>{name}™ 2021</footer>;
}
