import type { NextPage } from 'next'
import Link from 'next/link'
import { createGlobalStyle } from 'styled-components'
import Header from '../components/header'

const GlobalStyle=createGlobalStyle`
 
  body{
    margin: 0;
  padding: 0;
  }
  
`
const Home: NextPage = () => {
  return (<>
  <GlobalStyle/>
  <Header/>
  </>)
}
export default Home
