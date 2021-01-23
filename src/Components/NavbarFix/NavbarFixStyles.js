import styled from 'styled-components'


export const NavWrapper = styled.nav`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    text-align:center;
    width:100%;
    position:fixed;
    z-index: 998;
    transition: 0.3s ease-in-out;
    background-color: ${({navbarColor}) => (navbarColor? '#7D4E57': 'transparent')};
    height:8vh;
`
export const NavTitle = styled.div`
    font-size:5vw;
    padding-left:2.5vh;
    

    @media screen and (min-width:720px){
        display: ${({showTitle}) => (showTitle? 'none' : 'inherit')};
        font-size:2rem;
    }

    

`
export const NavSelection = styled.ul`
    list-style:none;
    display:none;
    
    @media screen and (min-width:720px){
        display: ${({showTitle}) => (!showTitle? 'none' : 'inherit')};
    }
    
    
`

export const NavItem = styled.li`
    cursor:pointer;
    font-size: 1.5rem;
    padding:5px 0 0 25px;
    width:180px;
    color:white;

    &:hover{
       text-decoration:underline;
    }
`