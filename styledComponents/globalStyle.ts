import { createGlobalStyle } from "styled-components";
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