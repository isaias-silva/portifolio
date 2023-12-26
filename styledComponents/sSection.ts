import styled from 'styled-components'
const Ssection = styled.section`
background-color: #00000099;
width: 80%;
min-height: 500px;
margin: auto;
margin-top: 100px;
margin-bottom: 50px;
color:#fff;
border-radius: 10px;
box-shadow: 4px 4px 7px #000;
position: relative;
overflow: hidden;
padding: 15px;

a{
    text-decoration: none;
    color:pink;
    font-weight: bold;
    transition: 0.2s linear;
    text-overflow: clip ellipsis;
    :hover{
        text-shadow: 0px 0px 4px #fff;
    }
}


img.wall{
   width: 50%;
  
    border-radius: 10px;
    position: absolute ;
    top:120px;
    right:15px;
    opacity:1;

}
.blox{
    height: 100%;
    padding: 20px;
    width: 40%;
    min-height: 100%;
    
}

.legend{
    position: relative;
    width: 100%;

    .exp{
        width: 100%;
        box-shadow: 2px 2px 5px aqua,-2px -2px 5px purple;
        margin-top: 20px;
        margin-left: 5px;
        padding: 10px;
        border-radius: 10px;
        word-wrap: break-word;
        background-color: #01010199;
        
     
    }
}
.stack-group{
    width: 95%;
    min-height: 40px;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .image{
      margin: 8px;
    img{
        width: 40px;
    }
    }
    
}
.perfil{
    overflow: hidden;
    width: 340px;
    height: 340px;
    border-radius: 100%;
    float: right;
    position: relative;
    border: 6px solid #00000099;
    box-sizing: border-box;


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
                transform: scale(1.6);
                cursor: pointer;
            }
        }
    }
    .contacts{
        display: flex;
        width: 50%;
        flex-wrap: wrap;
       justify-content: space-between;
       a{
        margin:1px;
       }
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