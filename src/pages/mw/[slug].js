import Head from "next/head";
import React from "react";
import styles from "../../styles/slug.module.css";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();

  const { slug } = router.query;
  const { blogs } = require("../../blogdata/blogs.json");
  let buffer;
  let author;
  if (slug === blogs.Next.name) {
    buffer = blogs.Next.content;
    author = blogs.Next.author;
  } else if (slug === blogs.Welcome.name) {
    buffer = blogs.Welcome.content;
    author = blogs.Welcome.author;
  }
  return (
    <div>
      <Head>
        <title>{slug}</title>
      </Head>
      <main>
        <div className={styles.container}>
          <h1 className={styles.title}>{slug}</h1>

          <p className={styles.content}>{buffer}</p>

          <h1 className={styles.author}>Author : {author}</h1>
        </div>
      </main>
    </div>
  );
};

export default Slug;
