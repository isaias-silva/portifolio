import type { NextPage } from 'next'
import Section from '../components/section'

const Home: NextPage = () => {
  const experiencia = <>
<div className='exp'>
  <h3>Essia</h3><span>estágio: 2021 ~ 2022</span>
  <p>
    estágio na área de informática, atividades como: criação páginas xml, estilização com css e edição de imagens.
  </p>
</div>
<div className='exp'>
  <h3>99freelas</h3><span>freelancer:</span>
  <p>
   trabalhos freelancer, desenvolvimento frontend, backend, automações, edição de imagens, criação de logo. 
  </p>
</div>
  </>
  return (<>
    <Section img='a' title='a' type='about'></Section>
    <Section element={experiencia} img='https://i.pinimg.com/originals/c0/e1/5f/c0e15fc5b0a8751878fb7ccf17c4fa89.jpg' title='Experiência:' type='normal'></Section>


  </>)
}
export default Home
