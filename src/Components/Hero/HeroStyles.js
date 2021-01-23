import styled from 'styled-components'

export const HeroSection = styled.section`
    overflow:hidden;
    height: 100vh;
    background-color:#212D40;
    max-height: 1100px;
`

export const HeroWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-top:7.5vh;
    
`


export const HeroNavWrapper = styled.div`
    position:fixed;
    display:flex;
    width:100%;
    
    z-index:99;
    
`

export const HeroImage = styled.img`
    
    
    box-shadow:5px 5px 8px black;
    z-index:-10;
    width:36.5vh;

    @media screen and (min-width:720px){
        
        height:430px;
        
    }

`

export const ContentWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    padding:10px 0;
    @media screen and (min-width:720px){
        flex-direction:row;
        
    }
`

export const HeroText = styled.div`
    padding: 10px 15px ;
    background-color:#364156;
    display:block;
    justify-content: center;
    align-items: center;
    color: black;
    font-size:1rem;
    text-align:left;
    width:50vh;
    box-shadow: 5px 5px 8px black;

    p{
        width:48vh;
        padding:5px;
    }

    @media screen and (min-width:720px){
        padding: 15px;
    }
    
`
export const HeroTextWrapper = styled.div`
    z-index:3;
    height:30vh;
    padding:15px;

    @media screen and (min-width:720px){
        height:400px;
        transform:translate(10px,75px);
    }
`

export const HeroWrapperTitle = styled.div`
    font-size:4.3vh;
    background-color:#364156;
    width:45vh;
    height:8vh;
    padding:0.5vh 1vh;
    text-align:center;
    color:white;
    z-index:99;
    font-weight: bolder;
    box-shadow: 5px 5px 8px black;
    white-space:nowrap;
    @media screen and (min-width:720px){
        transform:translate(-5%, 40px);
        width:75vh;
        height:10vh;
        font-size:6vh;
    }
`

export const HeroTextTitle = styled.p`

    font-weight:bold;

    @media screen and (min-width:720px){
        font-size:2rem;

    }
`