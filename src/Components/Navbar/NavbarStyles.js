import styled from 'styled-components';

export const Nav = styled.nav`
    height: 60px;
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    position: absolute;
    color: white;
    margin-top:-100px;
`
export const NavbarContainer = styled.div`
    display:flex;
    justify-content:center;
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
    text-align:center;
    margin:0 -15px;
    cursor: pointer;
    font-size:30px;
    width:180px;
`


