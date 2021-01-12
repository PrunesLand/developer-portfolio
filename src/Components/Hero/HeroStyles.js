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
    transform:translateY(-25px);
    
`
export const HeroTitle = styled.h1`
    font-size:5vw;
    text-align:center;
    margin-top:10px;
    width:90%;
    

    @media screen and (min-width:500px){
        font-size: 25px;
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
    z-index:2;
    border-radius:15px;
    width:280px;

    @media screen and (min-width:720px){
        
        height:430px;
        
    }

`

export const ContentWrapper = styled.div`
    display:flex;
    flex-direction: column;
    

    @media screen and (min-width:720px){
        flex-direction:row;
        
    }
`

export const HeroText = styled.div`
    
    display:block;
    justify-content: center;
    align-items: center;
    color: black;
    font-size:19px;
    text-align:left;
    width:380px;

    p{
        width:300px;
        padding:5px;
    }

    @media screen and (min-width:720px){
        padding: 15px;
    }
    
`
export const HeroTextWrapper = styled.div`
    border-radius:15px;
    padding:10px 0 10px 5px;
    background-color:green;
    transform:translateY(-20px);
    z-index:3;
    height:285px;
    
    @media screen and (min-width:720px){
        height:400px;
        transform:translate(10px,75px);
    }
`

export const HeroWrapperTitle = styled.div`
    font-size:40px;
    background-color:green;
    border-radius: 10px;
    height:50px;
    width:350px;
    text-align:center;
    transform:translate(5%, 40px);
    z-index:3;

    @media screen and (min-width:720px){
        transform:translate(-20%, 40px);
        width:400px;
    }
`