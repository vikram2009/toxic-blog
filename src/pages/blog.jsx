import Head from 'next/head'
import React, { useEffect } from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'
import { useState } from 'react'
const Blog = () => {
const [blogs, setblogs] = useState([])
  useEffect(() => {
    
  fetch('./api/blogs').then((a) => {
    return a.json();
  })
    .then((parsed) => {
      setblogs(parsed);
    })
  }, [])
  

  return (
    <div>
        <Head>
            <title>
                Blog
            </title>

        </Head>




<main className={styles.content}>

{blogs.map((blogitem => {
    return <div key={blogitem.id}>

    <Link href={`/blogspot/${blogitem.slug}`}>
      <a>
        <h1>{blogitem.title}</h1>
      
      </a>
      </Link>
      </div>
}))}



  


</main>

    </div>
  )
}

export default Blog