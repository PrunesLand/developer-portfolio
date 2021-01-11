import React from 'react'
import Burger from '../Burger'
import heroImage from '../Images/photo-example.jpg'
import {HeroSection, HeroWrapper, HeroImage, HeroText,HeroTitle} from './HeroStyles'

const Hero = () => {
    return (
        <div>
            <HeroSection>
                <HeroWrapper>
                    <HeroTitle>
                        <h1>PrunesLand</h1>
                    </HeroTitle>
                    <Burger />
                </HeroWrapper>
                <HeroWrapper>
                    {/* <HeroText>
                        <h2>Front-End developer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nulla magni. Quasi placeat at numquam!</p>
                    </HeroText>
                    <HeroImage src={heroImage} /> */}
                </HeroWrapper>
            </HeroSection>
        </div>
    )
}

export default Hero
