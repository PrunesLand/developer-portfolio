import React from 'react'
import styled from 'styled-components'
import { BiMenuAltRight } from "react-icons/bi";

const Burger = () => {

    const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display:block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate(-70%, 3vw);
        font-size: 3rem;
        cursor: pointer;
        color: #fff;
        
    }
    `

    return (
        <>
            <MobileIcon>
                <BiMenuAltRight />
            </MobileIcon>     
        </>
    )
}

export default Burger
