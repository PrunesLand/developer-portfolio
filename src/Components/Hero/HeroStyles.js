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
    padding-top:7.5vh;
    
`


export const HeroNavWrapper = styled.div`
    position:fixed;
    display:flex;
    width:100%;
    
    z-index:99;
    background-color:#dda77b;
`

export const HeroImage = styled.img`
    
    
    
    
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
    padding: 5px 15px ;
    background-color:green;
    display:block;
    justify-content: center;
    align-items: center;
    color: black;
    font-size:19px;
    text-align:left;
    width:50vh;

    p{
        width:300px;
        padding:5px;
    }

    @media screen and (min-width:720px){
        padding: 15px;
    }
    
`
export const HeroTextWrapper = styled.div`
    z-index:3;
    height:30vh;
    padding:10px;

    @media screen and (min-width:720px){
        height:400px;
        transform:translate(10px,75px);
    }
`

export const HeroWrapperTitle = styled.div`
    font-size:2.5rem;
    background-color:green;
    
    height:7.5vh;
    padding:0 1vh;
    text-align:center;
   
    z-index:3;
    
    @media screen and (min-width:720px){
        transform:translate(-20%, 40px);
        width:400px;
    }
`