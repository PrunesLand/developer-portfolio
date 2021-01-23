import React from 'react'
import heroImage from '../Images/developer_pic.png'
import {HeroSection, HeroWrapper, HeroImage, HeroText, HeroWrapperTitle, ContentWrapper, HeroTextWrapper, HeroTextTitle} from './HeroStyles'
import Fade from 'react-reveal/Fade';

const Hero = () => {
    return (
        <div>
            <HeroSection>
                
                <HeroWrapper>
                    <div style={{zIndex:10}}>  

                    <Fade Left delay={700}>
                        <HeroWrapperTitle >
                            Front-End developer
                        </HeroWrapperTitle>
                    </Fade>
                    </div>

                    <ContentWrapper>
                    
                    <Fade delay={100}>

                        <HeroImage src={heroImage} />
                    </Fade>
                    <HeroTextWrapper>

                    <Fade delay={1000}>

                    <HeroText>
                        <HeroTextTitle>Hi, I'm <u>Pranaya</u>!</HeroTextTitle>
                        <p>I am a <b>Front-End Developer</b> and I specialize in <b style={{color: '#7bdff2'}}>React Framework</b>.</p>   
                        
                        <p>I'm a developer that is keen on building and deploying sites for <b style={{color: '#e59500'}}>Independent Media</b> and <b style={{color: '#f25f5c'}}>Start-Ups</b>.</p>
                    </HeroText>
                    </Fade>
                    </HeroTextWrapper>
                    </ContentWrapper>
                </HeroWrapper>
            </HeroSection>
        </div>
    )
}

export default Hero
