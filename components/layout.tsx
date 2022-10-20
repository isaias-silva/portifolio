import { createGlobalStyle } from "styled-components";
import Footer from "./footer";
import Header from "./header";


const GlobalStyle = createGlobalStyle`
 html,body{
 height: 100%;
  position: relative;
  
 }
  body{
    background-image:url('https://i.imgur.com/O3Bxs16.gif');
background-attachment: fixed;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
background-size: cover;
    margin: 0;
  padding: 0;
  

  }
  
`

export default function Layout({ children }: any) {
  return <>
    <GlobalStyle />
    <Header />
    {children}
    <Footer></Footer>
  </>
}