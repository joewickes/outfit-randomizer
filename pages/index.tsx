import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Outfit Randomizer</title>
        <meta name='description' content='An app to randomize your outfit' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Outfit Randomizer!</h1>

        <p className={styles.description}>
          Get started by hitting the "Randomize" button
        </p>

        <div>
          <button className={styles.lgBtn}>Randomize</button>
        </div>
      </main>

      <footer className={styles.footer}>A Not a Company site</footer>
    </div>
  );
};

export default Home;
