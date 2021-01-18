import styled from 'styled-components'
import {SiHtml5,SiCsswizardry,SiJavascript,SiReact,SiMysql,SiJava,SiGimp} from 'react-icons/si'
import {GrDomain} from 'react-icons/gr'


// Global Grid section

export const GridSection = styled.section`
    height:100vh;
    background-color:maroon;
    width:100%;
    overflow:hidden;
    
`
export const GridContainer = styled.div`
    color:white;
    font-size:30px;
    text-align:center;
    
`
export const GridMainWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    justify-content:center;
    align-items:center;
    
    
    @media screen and (min-width:720px){
        flex-direction:row;
    }
`

// Grid Buttons section

export const GridButtonWrapper = styled.div`
    
    
    width:40vh;
    height: 40vh;
    width:100%;
    justify-content:center;
    padding:20px;

`

export const GridItemContainer = styled.ul`
    display:inline-grid;
    grid-template-columns: auto auto auto;
    font-size:3.5rem;
    grid-gap:40px;
    background-color:green;
    padding:15px 15px 10px 15px;
    border-radius:15px;
    
`

// Grid buttons

export const Logo1 = styled(SiHtml5)`
    cursor:pointer;
`

export const Logo2 = styled(SiCsswizardry)`
    cursor:pointer;
`

export const Logo3 = styled(SiJavascript)`
    cursor:pointer;
`

export const Logo4 = styled(SiReact)`
    cursor:pointer;
`

export const Logo5 = styled(SiMysql)`
    cursor:pointer;
`

export const Logo6 = styled(SiJava)`
    cursor:pointer;
`

export const Logo7 = styled(GrDomain)`
    cursor:pointer;
`

export const Logo8 = styled(SiGimp)`
    cursor:pointer;
`



// Grid Hero Section

export const GridHeroWrapper = styled.div`
    padding:85px 0;
    height:60vh;
    width:60vh;
`

export const GridTextParent = styled.div`
    padding:20px;
    
    
    
`

export const GridHeroImg = styled.img`
    
`

export const GridText = styled.div`
    position:inherit;
    font-size:20px;
    
`

export const GridTextTitle = styled.div``

export const GridTextContent = styled.div``

// Grid Header

export const GridHeader = styled.div`
    padding:10px;
`

export const GridHeadTitle = styled.h1`
    font-size:1.5rem;
`