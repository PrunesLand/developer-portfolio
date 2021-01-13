import React from 'react'
import { InfoData } from './InfoData'
import {InfoSection, InfoWrapper, InfoItem,InfoTitle,InfoImg,InfoText, InfoHeading, InfoItemWrapper} from './InfoStyles'

const Info = () => {
    return (
        <div>
            <InfoSection>
                <InfoHeading>
                    <InfoTitle>
                        Services that I can provide.
                    </InfoTitle>
                    <InfoText>
                        These are the three things I'm able to provide to clients.
                    </InfoText>
                </InfoHeading>

                <InfoWrapper>
                    {InfoData.map((item, index) => (
                    <InfoItemWrapper>

                    <InfoItem>
                        <InfoTitle>
                            {item.title}
                        </InfoTitle>
                        <InfoImg src={item.image} alt={item.alt}/>
                        <InfoText>
                            {item.text}
                        </InfoText>
                    </InfoItem>
                    </InfoItemWrapper>    
                    ))}
                    
                </InfoWrapper>
            </InfoSection>
        </div>
    )
}

export default Info
