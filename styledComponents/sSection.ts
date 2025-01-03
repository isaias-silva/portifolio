import styled from 'styled-components'
const Ssection = styled.section.attrs(props => {
    size: Number;

})`

background-color: #00000099;
width: ${(props) => props.size || 90}%;

margin: auto;
margin-top: 90px;
margin-bottom: 50px;
color:#fff;
border-radius: 10px;
box-shadow: 3px 3px 4px #000;
position: relative;
overflow:hidden;
padding: 15px;
backdrop-filter: blur(4px);
display:flex;
flex-direction: row-reverse;
justify-content: space-between;

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


img.wall, .wall-block{

    border-radius: 10px;
width: 50%;
    right:15px;
    opacity:1;

}
img.wall.experience{
    top:0;
  right: 0;
  height: 100%;
  width: 400px;
  
}
.wall-block{
   
    display:flex;
  flex-direction:column-reverse;
  align-items: center;
  justify-content: center;
 
    img{
        width: 100%;
        border-radius: 10px;
    }
}

h3.large{
    font-size: 28px;
   }
.blox{
    height: 100%;
    padding: 10px;
    width: 40%;
    min-height: 100%;
   p{
    font-size: 16px;
    text-align: justify;
   }
   p.large{
    font-size:18px;
   }
 
    
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
    width: 100%;
    min-height: 30px;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .conhecimento{
      margin: 8px;
    img{
        width: 50px;
        transition: ease-in 0.1s;
        :hover{
            cursor: pointer;
            transform: scale(1.2)
        }
    }
    }
    
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
        width:99%;
        padding:0;
        text-align: center;
    
        flex-direction:column;
        img.wall.experience{
            width:100%;
        }
        h2{
            border-bottom: 1px inset aqua;
          width: 80%;
          margin:auto
        }

            
                .stack,.contacts{
                    width: 100%;
                }
                ul{
                    li{list-style: none;
                    }
                }

                img.wall, .wall-block{
                    width: 100%;
                    position: relative;
                margin: auto;
                left:0;
                }
                .wall-block{
                    margin-bottom: 50px;
                }
.blox{
    left:0;
    right:0;
    width:100%;
    padding:0;
    position:relative;
    margin: 0;
    p{ text-align:center;}
    p.large{
       
    padding:15px;
    font-size: 16px;
   }

}
.stack-group{
    display:flex;
    justify-content: center
}

h3.large{
    font-size: 18px;
   }
   



                div.legend{
                width:90% ;
                margin: auto;
                display: flex;
                flex-wrap: wrap;
                padding:0;
                
                    justify-content: center;
                    .exp{
                    margin: auto;
                 
                    margin-bottom: 20px;
                p{
                    text-align: center;
width: 100%;
                } 
                }
}


}
    
`
export default Ssection