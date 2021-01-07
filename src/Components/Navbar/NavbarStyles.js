import styled from 'styled-components';

export const Nav = styled.nav`
    height: 60px;
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    position: fixed;
    color: white;
`
export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width: 100%;
    padding: 0 24px;
    
`

export const NavLogo = styled.div`
    display:flex;
    justify-content: flex-start;
    font-size: 40px;

    @media screen and (max-width:768px){
        width:100%;
        justify-content:center;
    }
    
`

export const MobileIcon = styled.div``

export const NavMenu = styled.ul`
    display:flex;
    list-style: none;
    font-size: 20px;
    padding-top: 10px;
    
    @media screen and (max-width:768px ){
        display:none;
    }
`

export const NavItem = styled.li`
    
`

export const NavLinks = styled.div`
    padding: 0 1rem;
    cursor: pointer;
`


