import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
 html,body{
 
position: relative;
  
 }
 html{
  scroll-behavior: smooth;
 }
  body{
    background-image:url('https://i.imgur.com/O3Bxs16.gif');
background-attachment: fixed;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
background-size: cover;
    margin: 0;
  padding: 0;
  ::after{
   content: '';
   display: block;
    z-index: -1;
    position:fixed;
    background-color: #000;
    filter: opacity(0.6);
  
    width: 100%;
    height: 100%;
    top:0;
    bottom: 0;
  }
  .txt{
    display: inline;
  }
  .red{
    color:red;
  }
  .blue{color:blue}
  .black{
    color:#000;
  }
  .white{
    color:#fff;
  }
  }
  
`
export default GlobalStyle