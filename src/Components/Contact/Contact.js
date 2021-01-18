import React from 'react'
import {ContactSection, ContactContainer, HeroWrapper, HeroImg, HeroText, ContactText, ImageWrapper, TextList, ListItem} from './ContactStyles'
import image from '../Images/ContactImages/sydney.jpg'
import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
    return (
        <ContactSection>
            <ContactContainer>
                <HeroWrapper>

                    <ImageWrapper>
                        <HeroImg src={image}/>
                    </ImageWrapper>

                    <HeroText>
                        Sydney-Based
                    </HeroText> 
                </HeroWrapper>
                
                <ContactText>
                    <p>
                        For all business inquiries, contact me through the following information below:
                    </p>
                    
                    <TextList>

                    <ListItem>
                    <AiOutlineMail />: abcdefg@gmail.com

                    </ListItem>
                    <ListItem>
                    <AiFillGithub />: View more of my work in my Github at Prunesland

                    </ListItem>


                    <ListItem>
                    <AiFillLinkedin />: Reach out to me on LinkedIn at prunesLand

                    </ListItem>

                    </TextList>
                </ContactText>

            </ContactContainer>
        </ContactSection>
    )
}

export default Contact
