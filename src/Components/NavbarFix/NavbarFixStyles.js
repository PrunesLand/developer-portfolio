import styled from 'styled-components'

export const NavWrapper = styled.nav`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    width:100%;
    position:fixed;
    z-index: 998;
    transition: 0.3s ease-in-out;
    background-color: ${({navbarColor}) => (navbarColor? 'green': 'transparent')};
    height:70px;
`
export const NavTitle = styled.div`
    font-size:5vw;
    padding:5px 0 0 25px;

    @media screen and (min-width:720px){
        display: ${({showTitle}) => (showTitle? 'none' : 'inherit')};
        font-size:5vh;
    }

    

`
export const NavSelection = styled.ul`
    list-style:none;
    display:none;

    @media screen and (min-width:650px){
        display: ${({showTitle}) => (!showTitle? 'none' : 'inherit')};
    }
    
    
`

export const NavItem = styled.li`
    
    font-size: 30px;
    padding:5px 0 0 25px;
    width:180px;
`