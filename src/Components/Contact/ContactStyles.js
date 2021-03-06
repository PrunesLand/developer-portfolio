import styled from 'styled-components'
import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from 'react-icons/ai'

export const ContactSection = styled.section`
    overflow:hidden;
    padding-top:8vh;
    background-color:#212D40;
    height:110vh;
    width:100%;
`

export const ContactContainer = styled.div`
    color:white;
    padding:3vh 20px 0 20px;
    font-size:30px;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (min-width:720px){
        flex-direction:row;
        padding-top:23vh;
    }
    
`


export const ImageWrapper = styled.div`
    height:40vh;
    width:100%;
    position:relative;
    
    @media screen and (min-width:720px){
        
    }
`

export const HeroWrapper = styled.div`
    width:100%;
    padding:10px;
    
`

export const HeroImg = styled.img`
    width:100%;
    position:absolute;
    max-height:300px;
    max-width:500px;
    padding:15px;

    @media screen and (min-width:720px){
       max-width:700px;
       max-height:600px;
       
    }
   
`

export const HeroText = styled.div`
    top:20vw;
    position:relative;
    width:100%;
    text-align:center;
    font-size:3rem;
    color:black;
    text-decoration:underline;
    
    

    
`
export const ContactText = styled.div`
    padding:3vh 15px;
    height:55vh;
    background-color:#364156;
    width:100%;
    font-size:1.2rem;
    box-shadow: 5px 5px 8px black;
    @media screen and (min-width:720px){
        font-size:2rem;
    }
`

export const TextList = styled.ul`
    width:100%;
    padding-top:3vh;
`

export const ListItem = styled.li`
    padding:10px;
    list-style:none;
    font-size:1rem;
    
    display:flex;
    flex-direction:row;

    p{
        padding:10px 0 0 5px;
    }
`

export const EmailIcon = styled(AiOutlineMail)`
    padding-top:5px;
    font-size:2.5rem;
`
export const GithubIcon = styled(AiFillGithub)`
    padding-top:5px;
    font-size:2.5rem;
`
export const LinkedIcon = styled(AiFillLinkedin)`
    padding-top:5px;
    font-size:2.5rem;
`

