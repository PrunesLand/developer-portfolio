import React, {useState} from 'react'
import {NavWrapper,NavTitle, NavSelection, NavItem} from './NavbarFixStyles'
import Burger from '../Burger/Burger'

const NavbaFix = ({toggle}) => {

    const [navbarColor, setColor] = useState(false);
    const [navToggle, setToggle] = useState(false);

    const changeBackground = () => {
        
        if(window.scrollY >= 650){
            setColor(true)
        }else{
            setColor(false)
        }

        
    }
    window.addEventListener('scroll', changeBackground);

    const hideTitle = () => {
        if(window.scrollY >= 680){
            setToggle(true)
        }else{
            setToggle(false)
        }
    }
    window.addEventListener('scroll', hideTitle);
    
    
    
    return (
        <>
            <NavWrapper navbarColor={navbarColor}>
                    <NavTitle showTitle={navToggle}>
                        <h1>PrunesLand</h1>
                    </NavTitle>
                    <Burger  toggle={toggle}/>
                    <NavSelection showTitle={navToggle}>
                        <NavItem>Services</NavItem>
                        <NavItem>Skill</NavItem>
                        <NavItem>Projects</NavItem>
                        <NavItem>Contact Me</NavItem>
                    </NavSelection>
            </NavWrapper>      
        </>
    )
}

export default NavbaFix
