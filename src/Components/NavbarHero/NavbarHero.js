import React from 'react'
import {Nav, NavbarContainer, NavMenu, NavItem, NavLinks} from '../NavbarHero/NavbarHeroStyles'

const NavbarHero = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavMenu>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skills'>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>Contact Me</NavLinks>
                        </NavItem>                     
                    </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default NavbarHero
