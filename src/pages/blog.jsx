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
    
    <Link href={`./mw/${todo}`}>
    <h1 className={styles.blognames}>
      {todo}
    </h1>
    </Link>
  )
})}


</main>

    </div>
  )
}

export default Blog