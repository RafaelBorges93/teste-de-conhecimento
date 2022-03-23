import Head from "next/head"
import { GlobalStyle } from "../styles/global"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cuponeria Store</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle/>

    </>
  ) 
}

export default MyApp
