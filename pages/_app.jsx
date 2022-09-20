import '../styles/globals.css'
import MainContainer from '../components/MainContainer'
import { DefaultSeo } from 'next-seo'
import SEO from '../components/SeoConfig'
import TagManager from 'react-gtm-module'
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-NFKJK6C'
    }

    TagManager.initialize(tagManagerArgs)

  }, [])

  return (
    <MainContainer>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
