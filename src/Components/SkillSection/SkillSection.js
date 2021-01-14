import React from 'react'
import { GridSection, GridContainer, GridButtonWrapper, GridHeroWrapper, GridHeroImg, GridText, GridItemContainer, GridMainWrapper, GridTextContent, GridTextTitle, Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, GridHeader, GridHeadTitle} from "./SkillSectionStyles";



const SkillSection = () => {
    return (
        <GridSection>
            <GridContainer>
                <GridHeader>
                    <GridHeadTitle>
                        Here are what I'm experienced with:
                    </GridHeadTitle>
                </GridHeader>
                    
                <GridMainWrapper>
                

                <GridButtonWrapper >

                        <GridItemContainer >

                           <Logo1 />
                           <Logo2 />
                           <Logo3 />
                           <Logo4 />
                           <Logo5 />
                           <Logo6 />
                           <Logo7 />
                           <Logo8 />
                        </GridItemContainer>
                      
                </GridButtonWrapper>
                
            
                        <GridHeroWrapper>
                            <GridHeroImg  />
                                <GridText>
                                    <GridTextTitle>
                                        
                                    </GridTextTitle>
                                    <GridTextContent>
                                        
                                    </GridTextContent>
                                </GridText>
                        </GridHeroWrapper>
                </GridMainWrapper>
            </GridContainer>
        </GridSection>
    )
}

export default SkillSection
