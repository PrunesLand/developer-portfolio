import styled from 'styled-components'

export const InfoSection = styled.section`
    overflow:hidden;
    height: 170vh;
    background-color:#11151C;
    min-height:1130px;
    max-height:1300px;
    text-align:center;
    padding-top:8vh;
    
    @media screen and (min-width:890px){
        
        min-height:800px;
        max-height:800px;
    }

    @media screen and (min-width:1315px){
        
        min-height:90vh;
        max-height:900px;
    }



    

    
`

export const InfoItemWrapper = styled.div`
    padding:20px 15px;
    display:flex;
    justify-content:center;
    text-align:center;
    
    @media screen and (min-width:720px){
        
    }
`

export const InfoWrapper = styled.div`
    padding:10px;
    justify-content:center;
    width:100%;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    padding-top:3vh;
    

    @media screen and (min-width:720px){
        flex-direction:row;
        padding-top:6vh;
    }
    

`
export const InfoHeading = styled.div`
    
   
    padding:15px 0 0 0;

    @media screen and (min-width:720px){
        padding-top:5vh;
    }
`

export const InfoItem = styled.div`
    
    padding: 0 5px 0 5px;
    height:40vh;
    min-width:300px;
    max-width:400px;
    
    background-color:#364156;
    
    
`

export const InfoHeadingTitle = styled.h1`
    
    font-size:4.5vh;
`

export const InfoTitle = styled.h1`
    padding-top:15px;
    text-align:center;
    font-size:1.7rem;
    
`
export const InfoImgWrapper = styled.div`
    height:25vh ;
`

export const InfoImg = styled.img`
    height: 100%;
    padding:15px;
`

export const InfoText = styled.div`
    font-size:2vh;
    margin: 0 10px 0 10px;
    padding:8px 0;
    
`