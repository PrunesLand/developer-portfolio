import styled from 'styled-components'

export const ProjectsSection = styled.section`
    overflow:hidden;
    background-color:#11151C;
    height:100vh;
    width:100%;
    padding-top:8vh;
`

export const ProjectsWrapper = styled.div`
    color:white;
    font-size:1.3rem;
    text-align:center;
    width:100%;
    
    
`

export const ProjectsHeader = styled.h1`
   text-align:center;
   padding:15px;
   font-size:3rem;
    
`

export const ProjectsList = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media screen and (min-width:720px){
        flex-direction:row;
    }

    img{
        padding:15px;
        height:60vh;
    }
    
`

export const ListWrapper = styled.ul`
    
    
    justify-content:space-around;
    padding:60px;
    height:10vh;
    width:30vh;
    
`

export const ListItem = styled.li`
    background-color:green;
    color:white;
    text-align:center;
    list-style:none;
    height:95px;
    padding:25px 0;
`

export const ListLink = styled.a`
    text-decoration:none;
    justify-content:center;
    align-items:center;
    
`

