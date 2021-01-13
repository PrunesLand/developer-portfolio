import styled from 'styled-components'

export const InfoSection = styled.section`
    overflow:hidden;
    height: 150vh;
    background-color:grey;


    @media screen and (min-width:720px){
        height:91vh;
        
    }
`

export const InfoItemWrapper = styled.div`
    padding:15px;

    @media screen and (min-width:720px){
        padding-top:60px;
    }
`

export const InfoWrapper = styled.div`
    padding:15px;
    justify-content:center;
    width:100%;
    display:flex;
    flex-wrap:wrap;
    
    

`
export const InfoHeading = styled.div`
    width:100%;
    text-align:center;
    padding:40px 0 5px 0;;
`

export const InfoItem = styled.div`
    
    padding: 0 5px 0 5px;
    height:40vh;
    min-width:300px;
    max-width:400px;
    border-radius:15px;
    background-color:white;
    
    
`

export const InfoTitle = styled.h1`
    padding:10px;
`

export const InfoImg = styled.img``

export const InfoText = styled.div`
    padding-top:10px;
    margin: 0 10px 0 10px;
`