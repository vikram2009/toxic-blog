import React from 'react'
import Head from 'next/head'
import styles from '../styles/about.module.css'
import Link from 'next/link'
import Image from 'next/image'
//svg imports
import githubsvg from '../assets/github.svg'
import mailsvg from '../assets/mail.svg'
const about = () => {
  const name = "<VikramSrinivas/>"
  return (

<div>
  <Head>
    <title>
      About
    </title>

    </Head>
    <main className={styles.main}>
    <img src='https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='NOT ABLE TO LOAD PIC!' className={styles.logo}></img>

<Link href='https://vikramsrinivas.me'>
  <a target="_blank">
<h2>
  
    
 <span><code>
  {name}
  </code>
 </span>
  
</h2>
  </a>
</Link>

{/* links :- */}
<div className={styles.acclinks}>
<Link href='https://github.com/vikram2009'>
  <a target="_blank">
    
  <Image src={githubsvg}/>

  </a>
  </Link>
  
  <Link href='mailto:vikramksm@hotmail.com'>
  <a target="_blank">
    
<Image src={mailsvg}  />

  </a>
  </Link>

</div>

    </main>
</div>

  )
}

export default about