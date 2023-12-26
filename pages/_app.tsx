import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import GlobalStyle from '../styledComponents/globalStyle'
import i18n from '../config/i18n'



function MyApp({ Component, pageProps }: AppProps) {
  return<>
  <GlobalStyle/>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </>
}

export default MyApp
