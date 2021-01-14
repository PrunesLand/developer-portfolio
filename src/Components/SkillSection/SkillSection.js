import React from 'react'
import { SkillData } from './SkillData';
import { GridSection, GridContainer, GridButtonWrapper, GridHeroWrapper, GridHeroImg, GridText, GridItem, GridMainWrapper, GridTextContent, GridTextTitle, GridIcon, Html} from "./SkillSectionStyles";

import {SiHtml5,SiCsswizardry,SiJavascript,SiReact,SiMysql,SiJava,SiGimp} from 'react-icons/si'

const SkillSection = () => {
    return (
        <GridSection>
            <GridContainer>
                    
                <GridMainWrapper>

                <GridButtonWrapper >
            
                        <GridItem >
                            <Html />
                        </GridItem>
                      
                    </GridButtonWrapper>
{/*             
                        <GridHeroWrapper>
                            <GridHeroImg src={item.image} alt={item.alt}/>
                                <GridText>
                                    <GridTextTitle>
                                        {item.title}
                                    </GridTextTitle>
                                    <GridTextContent>
                                        {item.text}
                                    </GridTextContent>
                                </GridText>
                        </GridHeroWrapper> */}
                </GridMainWrapper>
            </GridContainer>
        </GridSection>
    )
}

export default SkillSection
