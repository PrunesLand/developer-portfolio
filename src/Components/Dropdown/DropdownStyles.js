import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const DropdownContainer = styled.div`
    display:none;

    @media screen and (min-width:550){
    position:fixed;
    height: 100vh;
    background-color:orange;
        
    }
`

export const Icon = styled.div``

export const CloseIcon = styled.div``

export const DropdownWrapper = styled.div``

export const DropdownMenu = styled.ul``

export const DropdownItem = styled.li``

export const DropdownLink = styled(Link)``