import styled from 'styled-components'
const Sbox = styled.div`
background-color: #00000090;
width: 100%;
height: 100vh;
position: fixed;
top:0;
overflow: hidden;
transition: 1s ease-in-out;
display: flex;
justify-content: center;
align-items: center;
z-index: 100000000000000;
backdrop-filter: blur(4px);
.box{
    background-color:#222;
    padding: 25px;
    border-radius: 10px;
    color:#fff;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    img{width: 100px;
    
    }
    box-shadow: 4px 4px 4px #000;
    button.close{
        position: absolute;
        background: none;
        border:none;
        font-size: 18px;
        right: 0;
        top:0;
        transition:0.4s linear;
        border-radius: 100px;
        color:#fff;
        width: 30px;
        height: 30px;
       :hover{
        cursor: pointer;
        background-color: #00000090;
        color:#fff
       }
    }

}
@media screen and (max-width: 745px){
  .box{
    width: 70%;
  }
}
`
export default Sbox