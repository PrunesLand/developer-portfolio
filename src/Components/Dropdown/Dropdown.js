import React from 'react'
import {DropdownContainer, Icon, CloseIcon, DropdownWrapper, DropdownMenu, DropdownItem, DropdownLink} from './DropdownStyles'

const Dropdown = ({isOpen, toggle}) => {

    

    const jumpCont = () => {
        var elmnt = document.getElementById('contact');
        elmnt.scrollIntoView();
        toggle();
    }
    const jumpServ = () => {
        var elmnt = document.getElementById('services');
        elmnt.scrollIntoView();
        toggle();
    }
    const jumpSkill = () => {
        var elmnt = document.getElementById('skill');
        elmnt.scrollIntoView();
        toggle();
    }
    const jumpProj = () => {
        var elmnt = document.getElementById('project');
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
                        <DropdownLink onClick={jumpServ}>Services</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownLink onClick={jumpSkill}>Skills</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownLink onClick={jumpProj}>Projects</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownLink  onClick={jumpCont}>Contact Me</DropdownLink>
                    </DropdownItem>
                </DropdownMenu>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
