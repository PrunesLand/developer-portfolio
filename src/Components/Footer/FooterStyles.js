import styled from 'styled-components'
import {CgArrowUpR} from 'react-icons/cg'

export const FooterContainer = styled.footer`
    background-color:#11151C;
    height:250px;
    width:100%;
`

export const FooterWrapper = styled.div`
    color:white;
    font-size:30px;
    text-align:center;
    
`

export const FooterText = styled.div`
    padding:15px;

    h3{
        font-size:2rem;
    }

    p{
        padding-top:3vh;
        font-size:0.8rem;
    }
`

export const FooterScroll = styled.div`
    padding:10px;
    font-size:3.5rem;
    
`

export const FooterIcon = styled(CgArrowUpR)`
    cursor: pointer;
    
`