import React from 'react'
import {NavWrapper,NavTitle} from './NavbarFixStyles'
import Burger from '../Burger/Burger'

const NavbaFix = ({toggle}) => {
    return (
        <>
            <NavWrapper>
                    <NavTitle>
                        <h1>PrunesLand</h1>
                    </NavTitle>
                    <Burger  toggle={toggle}/>
            </NavWrapper>      
        </>
    )
}

export default NavbaFix
