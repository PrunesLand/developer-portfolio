import React from 'react'
import heroImage from '../Images/photo-example.jpg'
import {HeroSection, HeroWrapper, HeroImage, HeroText, HeroWrapperTitle, ContentWrapper, HeroTextWrapper} from './HeroStyles'

const Hero = () => {
    return (
        <div>
            <HeroSection>
                
                <HeroWrapper>
                        <HeroWrapperTitle>
                            Front-End developer
                        </HeroWrapperTitle>
                    <ContentWrapper>

                    <HeroImage src={heroImage} />
                    <HeroTextWrapper>

                    <HeroText>
                        <p>Hi, I'm <u>Pranaya</u>!</p>
                        <p>I am a <u>Front-End Developer</u> that specializes in React Framework.</p>
                        
                        <p>I'm a developer that is keen on building and deploying sites for <u>independent media</u> and <u>start-ups</u></p>
                    </HeroText>
                    </HeroTextWrapper>
                    </ContentWrapper>
                </HeroWrapper>
            </HeroSection>
        </div>
    )
}

export default Hero
