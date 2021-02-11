import Head from "next/head";
import Cases from "../components/Cases";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Work Utils</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Work Utils</h1>
        <Cases />
      </main>
    </div>
  );
}
