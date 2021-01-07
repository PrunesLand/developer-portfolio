import React from 'react'
// import heroImage from '../Images/heroImage.jpg'
import {HeroSection, HeroWrapper, HeroImage, HeroText} from './HeroStyles'

const Hero = () => {
    return (
        <div>
            <HeroSection>
                <HeroWrapper>
                    <HeroImage />
                    <HeroText>
                        <h2>Front-End developer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nulla magni. Quasi placeat at numquam!</p>
                    </HeroText>
                </HeroWrapper>
            </HeroSection>
        </div>
    )
}

export default Hero
