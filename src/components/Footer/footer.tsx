import React from "react";
import styles from "./footer.module.css";
import { AUTHOR, BUSINESS_NAME } from "@/statics/constant";
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className={styles.footer}>
      <span className={styles.footerLeft}>
        <span>{BUSINESS_NAME} &nbsp;</span>
        <span>All Rights Reserved © {currentYear}.</span>
      </span>
      <span className={styles.footerRight}>
        Conceptualized & Developed by :{" "}
        <span className={styles.developer}>{AUTHOR}</span>
      </span>
    </div>
  );
}

export default Footer;
