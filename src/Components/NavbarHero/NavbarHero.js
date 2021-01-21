import React from 'react'
import {Nav, NavbarContainer, NavMenu, NavItem, NavLinks} from '../NavbarHero/NavbarHeroStyles'

const NavbarHero = ({toggle}) => {

    const jumpCont = () => {
        var elmnt = document.getElementById('contact');
        elmnt.scrollIntoView();
        
    }
    const jumpServ = () => {
        var elmnt = document.getElementById('services');
        elmnt.scrollIntoView();
        
    }
    const jumpSkill = () => {
        var elmnt = document.getElementById('skill');
        elmnt.scrollIntoView();
        
    }
    const jumpProj = () => {
        var elmnt = document.getElementById('project');
        elmnt.scrollIntoView();
        
    }

    return (
        <Nav>
            <NavbarContainer>
                <NavMenu>
                        <NavItem>
                            <NavLinks onClick={jumpServ}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={jumpSkill}>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={jumpProj}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={jumpCont}>Contact Me</NavLinks>
                        </NavItem>                     
                    </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default NavbarHero
