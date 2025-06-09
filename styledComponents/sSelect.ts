import styled from 'styled-components'

const Sselect = styled.div`
width: 10%;
select{ 
margin: 0;
width: 100%;
height: 30px;
border-radius: 10px;
text-align: center;
color: #fff;
background-color: #00000080;
}
@media screen and (max-width: 745px){
    select{width: 30%}
}
`
export default Sselect