import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog-Vikram-Srinivas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Blog
        </h1>
<br/>
        <p className={styles.description}>
          Get started by pasting this into ur favorite terminal{' '}
          <code className={styles.code}>npm i nextjs-blog-vikramsrinivas</code>
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vikramsrinivas.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
           vikramsrinivas.me
          </span>
        </a>
      </footer>
    </div>
  )
}
