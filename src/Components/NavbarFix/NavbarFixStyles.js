import styled from 'styled-components'

export const NavWrapper = styled.nav`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    width:100%;
    position:fixed;
    z-index: 998;
    background-color:#dda77b;
`
export const NavTitle = styled.div`
    font-size:5vw;
    
    padding:5px 0 0 25px;
    
    
    
    

    @media screen and (min-width:720px){
        font-size: 5vh;
    }

`