import styled from 'styled-components'

export const ProjectsSection = styled.section`
    overflow:hidden;
    background-color:darkmagenta;
    height:100vh;
    width:100%;
    
`

export const ProjectsWrapper = styled.div`
    color:white;
    font-size:30px;
    
    width:100%;
    
`

export const ProjectsHeader = styled.h1`
   text-align:center;
   padding:15px;
    
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