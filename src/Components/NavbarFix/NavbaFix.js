import React, {useState} from 'react'
import {NavWrapper,NavTitle} from './NavbarFixStyles'
import Burger from '../Burger/Burger'

const NavbaFix = ({toggle}) => {

    const [navbarColor, setColor] = useState(false);

    const changeBackground = () => {
        
        if(window.scrollY >= 700){
            setColor(true)
        }else{
            setColor(false)
        }

        console.log(window.scrollY);
    }
    window.addEventListener('scroll', changeBackground);

    
    
    
    return (
        <>
            <NavWrapper navbarColor={navbarColor}>
                    <NavTitle>
                        <h1>PrunesLand</h1>
                    </NavTitle>
                    <Burger  toggle={toggle}/>
            </NavWrapper>      
        </>
    )
}

export default NavbaFix
