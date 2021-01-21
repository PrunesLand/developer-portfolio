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
                        <HeroText>
                            Sydney-Based
                        </HeroText> 
                    </ImageWrapper>

                </HeroWrapper>
                
                <ContactText>
                    <p>
                        For all business inquiries, contact me through the following information below:
                    </p>
                    
                    <TextList>

                    <ListItem>
                    <AiOutlineMail />: 
                    
                    <p>abcdefg@gmail.com</p>

                    </ListItem>

                    <ListItem>
                    <AiFillGithub />:
                    <p>View more of my work in my Github at Prunesland</p>

                    </ListItem>


                    <ListItem>
                    <AiFillLinkedin />
                    <p>: Reach out to me on LinkedIn at prunesLand</p>

                    </ListItem>

                    </TextList>
                </ContactText>

            </ContactContainer>
        </ContactSection>
    )
}

export default Contact
