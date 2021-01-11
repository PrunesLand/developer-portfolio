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
    flex-direction:column;
    
    
`
export const HeroTitle = styled.h1`
    font-size:5vw;
    text-align:center;
    margin-top:15px;
    width:90%;

    @media screen and (min-width:600px){
        font-size: 30px;
    }
    
`

export const HeroNavWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
`

export const HeroImage = styled.img`
    display:flex;
    height:400px;
    
    
    

    @media screen and (min-width:600px){
        
        max-height:300px;
        height:80vw;
    }

`

export const ContentWrapper = styled.div`
    display:flex;
    flex-direction: column;
    padding:20px;
    @media screen and (min-width:580px){
        flex-direction:row;
        
    }
`

export const HeroText = styled.div`
    
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size:3.5vw;
    text-align:left;
    width: 50vw;
    max-height:150px;
    
    p{
        width:350px;
        padding-left:20px;    
         

    }

    
`

export const HeroWrapperTitle = styled.div`
    font-size:40px;
    padding:15px;
`