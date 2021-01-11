import styled from 'styled-components'

export const HeroSection = styled.section`
    overflow:hidden;
    height: 100vh;
    background-color:#dda77b;
    max-height: 1100px;
`

export const HeroWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
`
export const HeroTitle = styled.h1`
    font-size:5vw;
    text-align:center;
    margin-top:15px;
    width:90%;

    @media screen and (min-width:800px){
        font-size: 40px;
    }
    
`

export const HeroImage = styled.img`
    height:60vh;
    transform:translateY(100px)
    

`

export const HeroText = styled.div`
    
    
    flex-direction:column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size:40px;
    text-align:left;
    width: 40vw;
`