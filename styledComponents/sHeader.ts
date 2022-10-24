import styled from 'styled-components'

const SHeader = styled.header`
    width: 100%;
    display: flex;
    position: fixed;
    top:0;
    justify-content: space-between;
    background-color: #02020299;
  
    border-bottom: 1px solid #2F2F2F;
    z-index: 100000000000;
    color:aqua;
    .title, .menu{
        display: flex;
    
        ul{ list-style: none;
            li{
                position: relative;
                display: inline-block;
                top: 50%;
                margin: 15px;
                a{
                    padding-bottom: 8px;
                    color: aquamarine;
                    text-decoration: none;
                    border-bottom:1px solid #00000000 ;
                    transition: 0.4s ease-in-out;
                :hover{
                        color:white;
                        text-shadow: 0 0 10px aqua;
                        border-bottom: 1px solid aqua;
                    }
                }
            }
        }
    }
.title{
    justify-content: center;
    align-items: center;
    a{
      color:aqua;
      display :flex ;
    text-decoration: none;
    img{width:80px;
        height:80px;
        border-radius: 100%;
        box-shadow: 14px 1px 1px aquamarine;
        transition: 0.2s linear;
    }
    h1{text-shadow:-1px -1px 1px #000,1px 1px 1px #000;
        transition: 0.2s linear;
        font-size: 24px;
        margin-top: 30px;
    }
    :hover{
        img{
            box-shadow: 16px 1px 1px purple;
            
        }
        h1{
            text-shadow:3px 1px 1px purple;
        }
    }
    }
}
.menuhamburguer{
    display: none;
    position: absolute;
    right: 0;
    top:20px;
    label{

       
    
    
    
    span{
        position: relative;
        display: block;
        width: 30px;
        height: 4px;
        background-color: aqua;
        box-shadow: 1px 2px 0 purple;
        margin: 4px;
        border-radius: 10px;
        transition: 0.2s linear;
       
    }
    #burguer{
        display: none;
        :checked ~ span{
                    :nth-child(2){
                 
                        rotate: 45deg;
                        
                    }
                    :nth-child(3){
                        opacity: 0;
                    }
                    :nth-child(4){
                        rotate: -45deg;
                        top:-15px
                    }
                    
                
            
        }
    }
    }
   
}
@media screen and (max-width: 745px){
   height: auto;
   min-height:100px ;
   position: relative;
    top:0;
    .title{
        width: 40%;
        a{
        h1{
            font-size: 16px;
        }}
    }
   .menu{
    ul{
       
        li{ margin:0;
        top:0;
        left:-15px;
        font-size: 14px;
     margin: 3px;
     display: block;
 
        a{
            border:none;
        :hover{
            border: none;
        }
            }
           
       
 
        }
    }
    .invisible{
        display: none;
    }
   }
   .menuhamburguer{
    display: block;
    z-index: 10000000000000;
   }
}

`

export default SHeader 