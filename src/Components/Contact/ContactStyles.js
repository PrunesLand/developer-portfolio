import styled from 'styled-components'

export const ContactSection = styled.section`
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
    text-align:center;
    padding:10px;
`

export const HeroWrapper = styled.div``

export const HeroImg = styled.img`
    height:35vh;
`

export const HeroText = styled.div`
    padding:15px;

    p{
        padding:5px;
    }
`
export const ContactText = styled.div`
    padding:15px;
    
`

export const TextList = styled.ul``

export const ListItem = styled.li`
    padding:10px;
    list-style:none;
`


