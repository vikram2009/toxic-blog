import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
import { useRouter } from 'next/router'
//svg imports 
import homesvg from '../assets/home.svg'
import aboutsvg from '../assets/about.svg'
import moon from '../assets/dark.svg'
import sun from '../assets/light.svg'
import blogsvg from '../assets/blog.svg'
import contactsvg from '../assets/contact.svg'
//next-themes and heroicons imports
import {useTheme} from 'next-themes'


export const NavBar = () => {
        const {systemTheme , theme , setTheme}  = useTheme();
        const renderThemeChanger = () => {
                const currentTheme = theme === 'system' ? systemTheme : theme;

                if(currentTheme == 'dark'){
                        return ( 
                                <Image src={sun} role={'button'} onClick={() => setTheme('light')} />       
                        )
                }else{
                        return (
                                <Image src={moon} role={'button'} onClick={() => setTheme('dark')} />  
                        )
                }
        }
        const router = useRouter();

    const [progress, setProgress] = useState(0)
  useEffect(() => {
        router.events.on('routeChangeStart' , () => {
                setProgress(40);
                        })

                        router.events.on('routeChangeComplete' , () => {
                                setProgress(100);
                                        })


  })
    return (

        <div>
        <div>
        <LoadingBar
          color=' #d53369 '
          progress={progress}
          waitingTime={600}
          onLoaderFinished={() => setProgress(0)}
        />
        </div>
        <nav className={styles.navbar}>

            <ul>
        

{/* Home */}
        <Link href='/' ><li>
        <Image  src={homesvg}/>
        &nbsp;Home</li></Link>
        
{/* About */}
        <Link href='/about' ><li>
        <Image src={aboutsvg}/>
        &nbsp;About</li></Link>
        
{/* Blog */}
<Link href='/blog' ><li>
<Image src={blogsvg}/>
        &nbsp;Blog</li></Link>

{/* Contact */} 
<Link href='/contact' ><li>
        <Image src={contactsvg}/>
        &nbsp;Contact</li></Link>
<li>
{renderThemeChanger()}
</li>

            </ul>
           
</nav>
        </div>

    )
}
