import type { NextPage } from 'next'
import Head from 'next/head'
import Section from '../components/section'
import experience from '../public/locale/experience.json'
const Home: NextPage = () => {


  const experiencia = experience.map((x, i) => {
    return <div className='exp' key={i}>
      <h3>{x.title}</h3>
      <span>{x.cargo}</span>: <span>{x.periodo}</span>
      <p>
        {x.descricao}
      </p>
    </div>

  })


  return (<>
    <Head>
      <meta name='description' content='portifólio de zack santos ou isaias santos, desenvolvedor fullstack' />
      <meta name='author' content='isaias santos' />
      <meta name='keywords' content='programador, desenvolvedor, fullstack, typescript, javascript, nodejs, freelancer, isaias, zack santos' />
      <meta name='robots' content='index,follow' />
      <title>
        bem vindo!
      </title>

    </Head>
    <Section type='about'></Section>
    <Section element={<div className='blox'>{experiencia}</div>} img='https://i.pinimg.com/originals/c0/e1/5f/c0e15fc5b0a8751878fb7ccf17c4fa89.jpg' title='Experience:' type='normal'></Section>
  </>)
}
export default Home
