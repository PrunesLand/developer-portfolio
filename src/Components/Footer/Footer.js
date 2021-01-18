import React from 'react'
import {FooterContainer, FooterWrapper, FooterText, FooterScroll} from './FooterStyles'
import {CgArrowUpR} from 'react-icons/cg'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterText>
                <h3>PrunesLand's Portfolio</h3>
                <p>This site was made with reactjs</p>
                </FooterText>
                <FooterScroll>
                    <CgArrowUpR />
                </FooterScroll>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
