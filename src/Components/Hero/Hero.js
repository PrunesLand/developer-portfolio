import React from 'react'
import Burger from '../Burger/Burger'
import heroImage from '../Images/photo-example.jpg'
import {HeroSection, HeroWrapper, HeroImage, HeroText,HeroTitle,HeroNavWrapper, HeroWrapperTitle, ContentWrapper, HeroTextWrapper} from './HeroStyles'

const Hero = ({toggle}) => {
    return (
        <div>
            <HeroSection>
                {/* <HeroNavWrapper>
                    <HeroTitle>
                        <h1>PrunesLand</h1>
                    </HeroTitle>
                    <Burger  toggle={toggle}/>
                </HeroNavWrapper> */}
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
