import styled from 'styled-components'

export const ContactSection = styled.section`
    overflow:hidden;
    
    background-color:lightblue;
    height:100vh;
    width:100%;
`

export const ContactContainer = styled.div`
    color:white;
    
    font-size:30px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    @media screen and (min-width:720px){
        flex-direction:row;
    }
    
`


export const ImageWrapper = styled.div`
    height:40vh;
    
    position:relative;
    
`

export const HeroWrapper = styled.div`
    width:100%;
    
`

export const HeroImg = styled.img`
    width:100%;
    position:absolute;
    max-height:350px;
    padding:15px;
   
`

export const HeroText = styled.div`
    top:23vw;
    position:relative;
    width:100%;
    text-align:center;
    font-size:3rem;
    color:black;
    text-decoration:underline;

    @media screen and (min-width:720px){
        top:15vw;
        font-size:2rem;
    }
`
export const ContactText = styled.div`
    padding:5vh 15px;
    height:55vh;
    background-color:green;
    width:100%;
`

export const TextList = styled.ul`
    width:100%;
`

export const ListItem = styled.li`
    padding:10px;
    list-style:none;
    font-size:1.2rem;
    
    display:flex;
    flex-direction:row;
`


