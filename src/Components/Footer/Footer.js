import React from 'react'
import {FooterContainer, FooterWrapper, FooterText, FooterScroll, FooterIcon} from './FooterStyles'


const Footer = () => {

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterText>
                <h3>PrunesLand's Portfolio</h3>
                <p>This site was made with ReactJS</p>
                </FooterText>
                <FooterScroll>
                    <FooterIcon onClick={scrollTop} />
                    
                </FooterScroll>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
