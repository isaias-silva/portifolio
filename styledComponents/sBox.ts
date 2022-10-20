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

.box{
    background-color:#222;
    padding: 5px;
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
        font-size: 32px;
        right: 0;
        transition:0.4s linear;
       border-radius: 100px;
       width: 40px;
       :hover{
        cursor: pointer;
        background-color: red;
        color:#fff
       }
    }
}
`
export default Sbox