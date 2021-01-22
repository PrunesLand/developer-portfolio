import React, {useState} from 'react'
import {NavWrapper,NavTitle, NavSelection, NavItem} from './NavbarFixStyles'
import Burger from '../Burger/Burger'
import Fade  from 'react-reveal/Fade'

const NavbaFix = ({toggle}) => {

    const [navbarColor, setColor] = useState(false);
    const [navToggle, setToggle] = useState(false);

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

    const changeBackground = () => {
        
        if(window.scrollY >= 670){
            setColor(true)
        }else{
            setColor(false)
        }

        
    }
    window.addEventListener('scroll', changeBackground);

    const hideTitle = () => {
        if(window.scrollY >= 670){
            setToggle(true)
        }else{
            setToggle(false)
        }
    }
    window.addEventListener('scroll', hideTitle);
    
    
    
    return (
        <>
            <NavWrapper navbarColor={navbarColor}>
                <Fade Top delay={400}>

                    <NavTitle showTitle={navToggle}>
                        <h1>Pranaya Anargya</h1>
                    </NavTitle>
                </Fade>
                    <Burger  toggle={toggle}/>
                    <NavSelection showTitle={navToggle}>
                        <NavItem onClick={jumpServ}>Services</NavItem>
                        <NavItem onClick={jumpSkill}>Skill</NavItem>
                        <NavItem onClick={jumpProj}>Projects</NavItem>
                        <NavItem onClick={jumpCont}>Contact Me</NavItem>
                    </NavSelection>
            </NavWrapper>      
        </>
    )
}

export default NavbaFix
