import type { NextPage } from 'next'
import Head from 'next/head'
import Section from '../components/section'
import experience from '../data/experience.json'
const Home: NextPage = () => {
  
  const experiencia = experience.map((x,i)=>{
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
    <title>
      bem vindo!
    </title>
  </Head>
    <Section img='a' title='a' type='about'></Section>
    <Section element={experiencia} img='https://i.pinimg.com/originals/c0/e1/5f/c0e15fc5b0a8751878fb7ccf17c4fa89.jpg' title='Experience:' type='normal'></Section>
  </>)
}
export default Home
