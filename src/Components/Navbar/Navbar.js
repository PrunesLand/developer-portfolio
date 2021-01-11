import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from '../Navbar/NavbarStyles'

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                {/* <NavLogo>
                    PrunesLand
                </NavLogo> */}
                <MobileIcon>
                    
                </MobileIcon>
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
