import Head from 'next/head'
import React, { useEffect } from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'
import { useState } from 'react'


const Blog = () => {

  const {names} = require("../blogdata/blogs.json")


  
  
  return (
    
    <div>
        <Head>
            <title>
                Blog
            </title>

        </Head>
<main className={styles.content}>

{names.map((todo) => {
  return(
    <h1>
      {todo}
    </h1>
  )
})}


</main>

    </div>
  )
}

export default Blog