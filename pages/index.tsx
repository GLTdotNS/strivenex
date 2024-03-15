import Head from "next/head";

import styles from "../styles/Home.module.css";

import Landing from "../components/Landing/Landing";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StriveNex - Growing Your Business Made Simple</title>
        <meta name="description" content="STRIVENEX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="fade-in">
        <Landing />
      </main>
    </div>
  );
}
