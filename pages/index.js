import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <p>
        <font size="+10">
          <center>No</center>
        </font>
      </p>
      <p>
        <center>
          <a href="https://www.comebackalive.in.ua/" className={styles.link}>
            Donate to Ukraine
          </a>
        </center>
      </p>
    </div>
  );
}
