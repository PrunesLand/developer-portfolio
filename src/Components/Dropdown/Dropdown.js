import React from 'react'
import {DropdownContainer, Icon, CloseIcon, DropdownWrapper, DropdownMenu, DropdownItem, DropdownLink} from './DropdownStyles'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

const Dropdown = ({isOpen, toggle}) => {

    const anchor = () => {
        var elmnt = document.getElementById("contact");
        elmnt.scrollIntoView();
        toggle();
    }

    return (
        <DropdownContainer isOpen={isOpen}>
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu >
                    <DropdownItem>
                        <DropdownLink to='#services'>
                            
                            Services</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownLink to='skills'>Skills</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownLink to='projects'>Projects</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownLink  onClick={anchor}>Contact Me</DropdownLink>
                    </DropdownItem>
                </DropdownMenu>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
