import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import GlobalStyle from '../styledComponents/globalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return<>
  <GlobalStyle/>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </>
}

export default MyApp
