import Head from 'next/head'
import React from 'react'
import style from '../../styles/slug.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'

const Slug = () => {

  const [Blog, setBlog] = useState()

  const router = useRouter();


useEffect(() => {
 if(!router.isReady) return ; 
  const { slug } = router.query;
fetch(`/api/getblog?slug=${slug}`).then((a) => {
  return a.json();
})
.then((parsed) => {
  setBlog(parsed);
})

  }, [router.isReady])
  



  return (
    <div>
      <Head>
        <title>
        {Blog && Blog.title}
        </title>
      </Head>
      <main>
        <h1 className={style.title}>
        {Blog && Blog.title}
        </h1>
        <p className={style.content}>
          <br/>
          {Blog && Blog.content}<br/>
         
        </p>
        <h3 className={style.author}>
          Author : {Blog && Blog.author}
        </h3>

      </main>
    </div>
  )
}

export default Slug