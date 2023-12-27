import type { NextPage } from 'next'
import Head from 'next/head'
import Section from '../components/section'

import { useTranslation } from 'react-i18next'

type Experience = {
  title?: string,
  period?: string,
  description?: string,
  position?: string
}
const Home: NextPage = () => {

  const { t } = useTranslation()

  const experienceArray: Array<Experience> = t('experience', { returnObjects: true })
  const experiencia = experienceArray.map((x, i) => {
    return <div className='exp' key={i}>
      <h3>{x.title}</h3>
      <span>{x.position}</span>: <span>{x.period}</span>
      <p>
        {x.description}
      </p>
    </div>

  })


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
    <Section element={<div className='blox'>{experiencia}</div>} img='https://i.pinimg.com/originals/c0/e1/5f/c0e15fc5b0a8751878fb7ccf17c4fa89.jpg'
      title={t('pharses.experience')} type='normal'></Section>
  </>)
}
export default Home
