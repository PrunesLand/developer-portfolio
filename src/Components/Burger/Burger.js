import React from 'react';
import {MobileIcon} from './BurgerStyles';
import { BiMenuAltRight } from "react-icons/bi";

const Burger = ({ toggle }) => {

    return (
        <>
            <MobileIcon onClick={toggle}>
                <BiMenuAltRight />
            </MobileIcon>     
        </>
    )
}

export default Burger
