import React from "react";
import styles from "../styles/contact.module.css";
import Head from "next/dist/shared/lib/head";
const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <main className={styles.content}>
        <form method="post" className={styles.form}>
          {/* full name  */}
          <p className={styles.p}>
            <label htmlFor="fullname" className={styles.label}>
              Full Name
            </label>
            <input type="text" name="fullname" placeholder="jhon sam"></input>
          </p>
          {/* email */}
          <p className={styles.p}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
            ></input>
          </p>

          {/* description */}
          <p>
            <label htmlFor="desc">Message</label>
            <textarea name="desc"></textarea>
          </p>

          <p>
            <button>Submit</button>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Contact;
