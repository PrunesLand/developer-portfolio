import React from 'react'

import heroImage from '../Images/photo-example.jpg'
import {HeroSection, HeroWrapper, HeroImage, HeroText,HeroTitle,HeroNavWrapper, HeroWrapperTitle, ContentWrapper, HeroTextWrapper} from './HeroStyles'

const Hero = () => {
    return (
        <div>
            <HeroSection>
                <HeroNavWrapper>
                    <HeroTitle>
                        PrunesLand
                    </HeroTitle>
                    
                </HeroNavWrapper>
                <HeroWrapper>
                        <HeroWrapperTitle>
                            Front-End developer
                        </HeroWrapperTitle>
                    <ContentWrapper>

                    <HeroImage src={heroImage} />
                    <HeroTextWrapper>

                    <HeroText>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nulla magni. Quasi placeat at numquam!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis in eveniet animi? Ad dolorum maxime doloribus reprehenderit, eligendi sint porro adipisci quis et voluptatibus, explicabo, ipsum hic. Reprehenderit, aliquid assumenda!</p>
                    </HeroText>
                    </HeroTextWrapper>
                    </ContentWrapper>
                </HeroWrapper>
            </HeroSection>
        </div>
    )
}

export default Hero
