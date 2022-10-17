import styled from 'styled-components'

const SHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: black;
    color:aqua;
    .title, .menu{
        display: flex;
    
        ul{ list-style: none;
            li{
             
                margin: 15px;
               padding-bottom:10px ;
                display: inline-block;
                position: relative;
              border:1px solid black ;
                top: 50%;
                :hover{
                        color:white;
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

export default (SHeader)