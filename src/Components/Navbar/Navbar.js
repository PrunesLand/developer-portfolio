import React from 'react'
import {Nav, NavbarContainer, NavMenu, NavItem, NavLinks} from '../Navbar/NavbarStyles'

const Navbar = () => {
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

export default Navbar
