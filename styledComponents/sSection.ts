import styled from 'styled-components'
const Ssection = styled.section`
background-color: #00000099;
width: 90%;
min-height: 500px;
margin: auto;
margin-top: 100px;
margin-bottom: 0;
color:#fff;
border-radius: 40px;
padding: 10px;
box-shadow: 10px 10px 20px #000;
position: relative;
a{
    text-decoration: none;
    color:pink;
    font-weight: bold;
    transition: 0.2s linear;
    text-overflow: clip ellipsis;
    :hover{
        text-shadow: 1px 1px 10px #fff;
    }
}
div.legend{
    position: relative;
    width: 50%;
    .exp{
        width: 70%;
        box-shadow: 2px 2px 10px aqua,-2px -2px 10px purple;
        margin-top: 5px;
        margin-left: 5px;
        padding: 5px;
        border-radius: 10px;
     word-wrap: break-word;
        background-color: #01010199;
        h3{
            text-shadow: 1px 1px 1px aqua;
        }
        p{
            text-shadow: 1px 1px 1px purple;
        }
       
    }
}

 img.wall{
   width: 400px;
    border-radius: 10px;
    position: absolute ;
    right:0;
    max-height: 400px;
}

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
    .contacts{
        display: flex;
        width: 50%;
        flex-wrap: wrap;
       justify-content: space-around;
       a{
        margin:1px;
       }
    }
    h2{
        text-shadow: 2px 2px 0 purple;
    }
   
    @media screen and (max-width: 745px){
        h2{
            border-bottom: 1px inset aqua;
            box-shadow: 0 10px 10px #000;
        }

  text-align: center;

  .perfil{
    float:none;
    margin:auto;
    width: 30%;
  }
  .stack,.contacts{
    width: 100%;
  }
ul{
    li{list-style: none;
    }
}

   img.wall{
    width: 70%;
    position: relative;
 margin: auto;
}
div.legend{
  width  :90% ;
  margin: auto;
 display: flex;
 flex-wrap: wrap;
 
    justify-content: space-between;
    .exp{
       margin: auto;
    }
}

}
    
`
export default Ssection