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
    
    
`

export const HeroImage = styled.img`
    height:100vh;
    width: 100vw;  
    object-fit: cover;
    z-index: -1;
    
    

`

export const HeroText = styled.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size:40px;
    text-align:center;
`