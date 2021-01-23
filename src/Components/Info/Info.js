import React from 'react'
import { InfoData } from './InfoData'
import {InfoSection, InfoWrapper, InfoItem,InfoTitle,InfoImg,InfoText, InfoHeading, InfoItemWrapper, InfoHeadingTitle, InfoImgWrapper} from './InfoStyles'
import Fade from 'react-reveal/Fade'
const Info = () => {
    return (
        <div>

            <InfoSection id='services'>
                <InfoHeading>
                    <InfoHeadingTitle>
                        Offered Services...
                    </InfoHeadingTitle>
                    
                </InfoHeading>

                <InfoWrapper>
                    {InfoData.map((item, index) => (
                        <InfoItemWrapper key={index}>

                    <Fade>
                    <InfoItem>
                        <InfoTitle>
                            {item.title}
                        </InfoTitle>
                        <InfoImgWrapper>
                        <InfoImg src={item.image} alt={item.alt}/>
                        </InfoImgWrapper>
                        <InfoText>
                            {item.text}
                        </InfoText>
                    </InfoItem>
                    </Fade>
                    </InfoItemWrapper>    
                    ))}
                    
                </InfoWrapper>
            </InfoSection>
       
        </div>
    )
}

export default Info
