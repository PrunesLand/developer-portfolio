import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from '../Navbar/NavbarStyles'
const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo>
                    Pranaya Anargya
                </NavLogo>
                <MobileIcon>
                    
                </MobileIcon>
                <NavMenu>
                        <NavItem>
                            <NavLinks>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Contact Me</NavLinks>
                        </NavItem>                     
                    </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
