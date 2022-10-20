import styled from 'styled-components'
const Ssection = styled.section`
background-color: #00000099;
width: 90%;
min-height: 500px;
margin: auto;
margin-top: 100px;
color:#fff;
border-radius: 40px;
padding: 10px;
box-shadow: 10px 10px 20px #000;
    .perfil{
    overflow: hidden;
    border:1px solid aqua;
    box-shadow: -8px -8px 20px aqua, 12px 12px 20px #6E00FF;
  
    width: 200px;
    border-radius: 100px;
    float: right;
    position: relative;

    }
    .stack{
        display: flex;
        flex-wrap: wrap;
        width: 40%;
        justify-content: space-around;
        img{
            width: 50px;
            transition: 0.2s ease-in;
            :hover{
                transform: scale(1.5);
                cursor: pointer;
            }
        }
    }
    h2{
        text-shadow: 2px 2px 0 purple;
    }
    p{
        text-shadow: 1px 1px 0 aqua;
    }
    
`
export default Ssection