import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing/Landing";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>STRIVENEX</title>
        <meta name="description" content="STRIVENEX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="fade-in">
        <Landing />
      </main>
    </div>
  );
}
