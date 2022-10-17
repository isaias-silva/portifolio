import { createGlobalStyle } from "styled-components";
import Header from "./header";


const GlobalStyle=createGlobalStyle`
 
  body{
    margin: 0;
  padding: 0;
  }
  
`

export default function Layout({children}:any){
    return <>
 <GlobalStyle/>
    <Header/>
    {children}
    </>
}