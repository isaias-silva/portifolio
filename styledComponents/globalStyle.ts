import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
 html,body{
 
position: relative;
  
 }
 html{
  scroll-behavior: smooth;
 }
  body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(to bottom, #202020,#fff);
background-attachment: fixed;

background-size: cover;
    margin: 0;
  padding: 0;
  ::after{
   content: '';
   display: block;
    z-index: -1;
    position:fixed;
    background-color: #000;
    background-image: url('background.png');
    background-attachment: fixed;
    filter: opacity(0.6);
  
    width: 100%;
    height: 100%;
    top:0;
    bottom: 0;
  }
  ::-webkit-scrollbar{
  width: 8px;}

::-webkit-scrollbar-track {
  background: #202020;       
}

::-webkit-scrollbar-thumb {
  background-color: purple;
  background-image:linear-gradient(purple, aqua);   
  border-radius: 20px;       

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
  .center{text-align:center;
  margin:auto;
  }
  h2.center{
  font-size: 32px;
  }
  
  }
  @keyframes neonOnOff{
  from {

    opacity: 0;
    margin-left: 100px;
  }
  to {
  
    opacity: 1;
    margin-left:0;
  }
}
.neon{
  opacity: 0;
  animation: neonOnOff 1s forwards;
}
  @media screen and (max-width: 745px){
  body{
    background-attachment: fixed;
    background-image:url('https://i.pinimg.com/originals/9f/2e/e6/9f2ee60cc592305f22bf2346848e06f6.jpg');

  }
}
`
export default GlobalStyle