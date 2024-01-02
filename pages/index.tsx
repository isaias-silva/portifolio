import type { NextPage } from 'next'
import Head from 'next/head'
import Section from '../components/section'

import { useTranslation } from 'react-i18next'


const Home: NextPage = () => {

  const { t } = useTranslation()



  return (<>
    <Head>
      <meta name='description' content={t('pharses.desc')} />
      <meta name='author' content='isaias santos' />
      <meta name='keywords' content={t('pharses.keywords')} />
      <meta name='robots' content='index,follow' />
      <title>
        {t('pharses.wellcome')}
      </title>

    </Head>
    <Section type='about'></Section>

  </>)
}
export default Home
