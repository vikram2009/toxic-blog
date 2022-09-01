import '../styles/globals.css'
import { NavBar } from '../components/NavBar'
import {ThemeProvider} from 'next-themes'


function MyApp({ Component, pageProps }) {

 

  return (
    <>
    <ThemeProvider enableSystem={true} attribute>

    <NavBar />

  <Component {...pageProps} />
    </ThemeProvider>

  </>
)
}

export default MyApp
