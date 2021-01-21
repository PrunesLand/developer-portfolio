import React from 'react'
import { InfoData } from './InfoData'
import {InfoSection, InfoWrapper, InfoItem,InfoTitle,InfoImg,InfoText, InfoHeading, InfoItemWrapper, InfoHeadingTitle, InfoImgWrapper} from './InfoStyles'
import { Element } from 'react-scroll'

const Info = () => {
    return (
        <div>
            <Element id='services' name='services'>

            <InfoSection >
                <InfoHeading>
                    <InfoHeadingTitle>
                        Offered Services
                    </InfoHeadingTitle>
                    
                </InfoHeading>

                <InfoWrapper>
                    {InfoData.map((item, index) => (
                    <InfoItemWrapper key={index}>

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
                    </InfoItemWrapper>    
                    ))}
                    
                </InfoWrapper>
            </InfoSection>
        </Element>
        </div>
    )
}

export default Info
