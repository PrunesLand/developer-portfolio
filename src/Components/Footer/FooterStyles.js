import styled from 'styled-components'
import {CgArrowUpR} from 'react-icons/cg'

export const FooterContainer = styled.footer`
    background-color:darkgreen;
    height:30vh;
    width:100%;
`

export const FooterWrapper = styled.div`
    color:white;
    font-size:30px;
    text-align:center;
    
`

export const FooterText = styled.div`
    padding:15px;
`

export const FooterScroll = styled.div`
    padding:10px;
    font-size:3rem;
    
`

export const FooterIcon = styled(CgArrowUpR)`
    cursor: pointer;
`