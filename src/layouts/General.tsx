import React from "react";

import styles from "./General.module.css";

import Footer from "../components/Footer";
import Header from "../components/Header";

interface Props {
  author: string;
  firstYear: number;
  children: React.ReactNode;
}

export default function GeneralLayout(props: Props) {
  return (
    <div className={styles.layout}>
      <Header title={props.author} />
      <div className={styles.children}>{props.children}</div>
      <Footer firstYear={props.firstYear} author={props.author} />
    </div>
  );
}
