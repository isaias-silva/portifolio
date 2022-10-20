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
    a{
      color:aqua;
      display :flex ;
    text-decoration: none;
    
    }
}

`

export default SHeader 