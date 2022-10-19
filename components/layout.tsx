import { createGlobalStyle } from "styled-components";
import Footer from "./footer";
import Header from "./header";


const GlobalStyle = createGlobalStyle`
 html,body{
 height: 100%;
  position: relative;
  
 }
  body{
    background-image:url('https://t4.ftcdn.net/jpg/02/92/01/37/360_F_292013767_ydul6gWvbBOIz5OGGpX7VEoBUhbUiKJX.jpg');
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