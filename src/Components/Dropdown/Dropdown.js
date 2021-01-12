import React from 'react'
import {DropdownContainer, Icon, CloseIcon, DropdownWrapper, DropdownMenu, DropdownItem, DropdownLink} from './DropdownStyles'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    <DropdownItem>
                        <DropdownLink to='services'>Services</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownLink to='skills'>Skills</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownLink to='projects'>Projects</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownLink to='contact'>Contact Me</DropdownLink>
                    </DropdownItem>
                </DropdownMenu>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
