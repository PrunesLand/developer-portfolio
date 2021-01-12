import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BiXCircle} from 'react-icons/bi'


export const DropdownContainer = styled.aside`
    position:fixed;
    
    height: 100vh;
    width: 100%;
    
    background-color:orange;
    z-index:999;
    top:0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
    left:85%;
    top:2%;
    position:absolute;
    cursor:pointer;
`

export const CloseIcon = styled(BiXCircle)`
    font-size:3rem;
    color: blue;
    
`

export const DropdownWrapper = styled.div`
   
`

export const DropdownMenu = styled.ul`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    padding-top:120px;
`

export const DropdownItem = styled.div`
    padding:20px;
    width:100%;
    text-align:center;
    
`

export const DropdownLink = styled(Link)`
    font-size:40px;
    text-decoration:none;
    border-bottom:3px dotted blue;
    color: blue;
`