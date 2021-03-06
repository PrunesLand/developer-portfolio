import React, {useState} from 'react'
import { SkillData } from './SkillData';
import { GridSection, GridContainer, GridButtonWrapper, GridHeroWrapper, GridHeroImg, GridText, GridItemContainer, GridMainWrapper,  Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, GridHeader, GridHeadTitle, GridTextParent, GridTextTitle, GridTextContent, GridImgWrapper, GridTitleContainer} from "./SkillSectionStyles";
import Fade from 'react-reveal/Fade'


const SkillSection = () => {

    const [val, setVal] = useState(0);
    
    return (
        <GridSection id='skill'>
            <GridContainer>
                <GridHeader>
                    <GridHeadTitle>
                        I'm experienced in...
                    </GridHeadTitle>
                </GridHeader>
                    
                <GridMainWrapper>
                

                <GridButtonWrapper >

                <Fade Left delay={400}>
                        <GridItemContainer >

                           <Logo1  onClick={() => setVal(0)}/>
                           <Logo2  onClick={() => setVal(1)}/>
                           <Logo3  onClick={() => setVal(2)}/>
                           <Logo4  onClick={() => setVal(3)}/>
                           <Logo5  onClick={() => setVal(4)}/>
                           <Logo6  onClick={() => setVal(5)}/>
                           <Logo7  onClick={() => setVal(6)}/>
                           <Logo8  onClick={() => setVal(7)}/>
                        </GridItemContainer>
                      
                </Fade>
                </GridButtonWrapper>
                

                 <GridHeroWrapper>

                     {SkillData.filter(idx => idx.id === val).map((item,index) => (  
                         
                         <GridTextParent key={index}>
                        <Fade Right delay={550}>
                        <GridImgWrapper>

                        <GridTitleContainer>

                            <GridTextTitle>
                                {item.title}

                            </GridTextTitle>

                        </GridTitleContainer>
                        
                        <GridHeroImg src={item.image} alt={item.alt}/>
                                                 
                        </GridImgWrapper>
                        <GridText>
                            <GridTextContent>

                            {item.text}
                            </GridTextContent>
                        </GridText>
                         </Fade>
                    </GridTextParent>
                         
                         ))}

                </GridHeroWrapper> 
        
                </GridMainWrapper>
            </GridContainer>
        </GridSection>
    )
}

export default SkillSection
