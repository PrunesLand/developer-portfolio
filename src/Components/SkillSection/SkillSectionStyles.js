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

export const GridItemContainer = styled.div`
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
    
`

export const Logo2 = styled(SiCsswizardry)``

export const Logo3 = styled(SiJavascript)``

export const Logo4 = styled(SiReact)``

export const Logo5 = styled(SiMysql)``

export const Logo6 = styled(SiJava)``

export const Logo7 = styled(GrDomain)``

export const Logo8 = styled(SiGimp)``



// Grid Hero Section

export const GridHeroWrapper = styled.div`
    
    height:60vh;
    width:60vh;
`

export const GridHeroImg = styled.img`
    background-image:${({sampleImg}) => (sampleImg)};
`

export const GridText = styled.div``

export const GridTextTitle = styled.div``

export const GridTextContent = styled.div``

// Grid Header

export const GridHeader = styled.div`
    padding:10px;
`

export const GridHeadTitle = styled.h1`
    font-size:1.5rem;
`