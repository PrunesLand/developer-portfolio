import  styled  from 'styled-components'

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 720px){
        display:block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate(-70%, 2vw);
        font-size: 3rem;
        cursor: pointer;
        color: #fff;
        z-index: 90;
        
    }
`