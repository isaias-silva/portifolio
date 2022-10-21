import styled from 'styled-components'

const SHeader = styled.header`
    width: 100%;
    display: flex;
    position: fixed;
    top:0;
    justify-content: space-between;
    background-color: black;
    border-bottom: 1px solid #2F2F2F;
    z-index: 100000000000;
    color:aqua;
    .title, .menu{
        display: flex;
    
        ul{ list-style: none;
            li{
             
                margin: 15px;
               padding-bottom:10px ;
                display: inline-block;
                position: relative;
              border-bottom:1px solid black ;
                top: 50%;
                transition: 0.4s ease-in-out;
                :hover{
                        color:white;
                        text-shadow: 0 0 10px aqua;
                        border-bottom: 1px solid aqua;
                    }
                a{
                    color: aquamarine;
                    text-decoration: none;
                    
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
        box-shadow: 5px 1px 1px blue;
        transition: 0.2s linear;
    }
    h1{text-shadow:5px 1px 1px blue;
        transition: 0.2s linear;
        font-size: 24px;
        margin-top: 30px;
    }
    :hover{
        img{
            box-shadow: 5px 1px 1px purple;
            
        }
        h1{
            text-shadow:5px 1px 1px purple;
        }
    }
    }
}
@media screen and (max-width: 745px){
   height: 120px;
    position: relative;
    top:0;
   .menu{
    ul{
        li{margin:0;
        top:0;
        font-size: 12px;
        display: block;
        border:none;
        :hover{
            border: none;
        }
        }
    }
   }
}

`

export default SHeader 