import styled from 'styled-components'
import {SiHtml5,SiCsswizardry,SiJavascript,SiReact,SiMysql,SiJava,SiGimp} from 'react-icons/si'
import {GrDomain} from 'react-icons/gr'


// Global Grid section

export const GridSection = styled.section`
    overflow: hidden;
    height:130vh;
    background-color:#212D40;
    width:100%;
    overflow:hidden;
    padding-top:8vh;
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
        padding:5vh 0;
    }
`

// Grid Buttons section

export const GridButtonWrapper = styled.div`
    
    
    height:40vh;
    width:100%;
    
    @media screen and (min-width:720px){
        height:40vw;
    }
    

`

export const GridItemContainer = styled.ul`
    display:inline-grid;
    grid-template-columns: auto auto auto;
    font-size:3.5rem;
    grid-gap:40px;
    
    padding:15px 15px 10px 15px;
    
    
`

// Grid buttons

export const Logo1 = styled(SiHtml5)`
    cursor:pointer;

    &:hover{
        fill: #eb6424;
    }
`

export const Logo2 = styled(SiCsswizardry)`
    cursor:pointer;

    &:hover{
        fill: #00a5cf;
    }
`

export const Logo3 = styled(SiJavascript)`
    cursor:pointer;

    &:hover{
        fill: #ffee32;
    }
`

export const Logo4 = styled(SiReact)`
    cursor:pointer;

    &:hover{
        fill: #48cae4;
    }
`

export const Logo5 = styled(SiMysql)`
    cursor:pointer;

    &:hover{
        fill: #023e8a;
    }
`

export const Logo6 = styled(SiJava)`
    cursor:pointer;

    &:hover{
        fill: red;
    }
`

export const Logo7 = styled(GrDomain)`
    cursor:pointer;
`

export const Logo8 = styled(SiGimp)`
    cursor:pointer;

    &:hover{
        fill: grey;
    }
`



// Grid Hero Section

export const GridHeroWrapper = styled.div`
    
    height:90vh;
    width:100%;
`

export const GridTextParent = styled.div`
    width:100%;
    text-align:center;
    padding:0 10px;
   
    
    
    
`

export const GridHeroImg = styled.img`
    width:90%;
    height:30vh;
    object-fit:cover;
    
    filter:blur(1px);
    opacity:80%;
    box-shadow: 5px 5px 8px black;
    
    @media screen and (min-width:720px){
        width:100%;
        height:60vh;
        max-height:400px;
        max-width:500px;
    }
`

export const GridImgWrapper = styled.div`
    position:relative;
    height:30vh;
    width:100%;
    display:flex;
    justify-content:center;
    padding-bottom:3vh;
    @media screen and (min-width:720px){
        width:100%;
        height:100%;
    }
    
`

export const GridText = styled.div`
    position:inherit;
    font-size:1.1rem;
    text-align:center;
    width:100%;
    padding-top:2.3vh;
    
`

export const GridTextTitle = styled.div`
    position:absolute;
    width:100%;
   font-size:2rem;
   padding: 12vh 0;
 color:white;
    z-index:10;
   @media screen and (min-width:720px){
       padding:23vh 0;
       font-size:2.5rem;
   }
   
    
`
export const GridTitleContainer = styled.div`
    position:absolute;
    width:50vh;
    height:29vh;
    
    
    
    
    
`

export const GridTextContent = styled.div`
    padding:10px;
    background-color:#364156;
    margin:0 4vh;
    box-shadow: 5px 5px 8px black;
    @media screen and (min-width:720px){
        padding:20px;
        margin: 0 10vw;
    }
    
`

// Grid Header

export const GridHeader = styled.div`
    
`

export const GridHeadTitle = styled.h1`
    font-size:2.5rem;
    padding:10px;
`