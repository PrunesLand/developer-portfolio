import React from 'react'
import {ContactSection, ContactContainer, HeroWrapper, HeroImg,  ContactText, ImageWrapper, TextList, ListItem, EmailIcon, GithubIcon, LinkedIcon} from './ContactStyles'
import image from '../Images/ContactImages/contact.svg'
import Fade from 'react-reveal/Fade'


const Contact = () => {
    return (
        
        <ContactSection id='contact'>
            <Fade delay={200}>
            <ContactContainer>
                

                <HeroWrapper>

                    <ImageWrapper>
                        <HeroImg src={image}/>
                        
                    </ImageWrapper>

                </HeroWrapper>
                
                

                <ContactText>
                    <p>
                        For all business inquiries, contact me through the following information below:
                    </p>
                    
                    <TextList>

                    <ListItem>
                    <EmailIcon />
                    
                    <p> abcdefg@gmail.com</p>

                    </ListItem>

                    <ListItem>
                    <GithubIcon />
                    <p> View more of my work in my Github at Prunesland</p>

                    </ListItem>


                    <ListItem>
                    <LinkedIcon />
                    <p> Reach out to me on LinkedIn at prunesLand</p>

                    </ListItem>

                    </TextList>
                </ContactText>
                

            </ContactContainer>
        </Fade>
        </ContactSection>
    )
                
}

export default Contact
