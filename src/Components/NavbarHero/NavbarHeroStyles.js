import styled from 'styled-components';

export const Nav = styled.nav`
    height: 80px;
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    position: relative;
    color: white;
    margin-top:-80px;
`
export const NavbarContainer = styled.div`
    display:flex;
    justify-content:center;
    
    
    
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



export const NavMenu = styled.ul`
    display:flex;
    list-style: none;
    font-size: 20px;
    
    
    
    
    @media screen and (max-width:720px ){
        display:none;
    }
`

export const NavItem = styled.li`
        
  
    
    
    &:hover{
        text-decoration:underline;
    }
`

export const NavLinks = styled.div`
    text-align:center;
    
    cursor: pointer;
    font-size:2rem;
    width:180px;
    
    
    
`


