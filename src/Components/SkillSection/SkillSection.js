import { render } from '@testing-library/react';
import React, {useState} from 'react'
import { SkillData } from './SkillData';
import { GridSection, GridContainer, GridButtonWrapper, GridHeroWrapper, GridHeroImg, GridText, GridItemContainer, GridMainWrapper, GridTextContent, GridTextTitle, Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, GridHeader, GridHeadTitle, GridTextParent} from "./SkillSectionStyles";



const SkillSection = () => {

    const [val, setVal] = useState(0);
    
    

    
    
    


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

                           <Logo1  onClick={() => setVal(0)}/>
                           <Logo2  onClick={() => setVal(1)}/>
                           <Logo3  onClick={() => setVal(2)}/>
                           <Logo4  onClick={() => setVal(3)}/>
                           <Logo5  onClick={() => setVal(4)}/>
                           <Logo6  onClick={() => setVal(5)}/>
                           <Logo7  onClick={() => setVal(6)}/>
                           <Logo8  onClick={() => setVal(7)}/>
                        </GridItemContainer>
                      
                </GridButtonWrapper>
                
                
                
                 <GridHeroWrapper>
                     {/* {SkillData.map((item, i ) => {
                         if(i === val){
                             return (
                                 <div >
                                     {item.title}
                                 </div>
                             )
                         }
                     })} */}

                     {SkillData.filter(idx => idx.id === val).map((item,index) => (
                         <div key={index}>
                             {item.title}
                         </div>
                     ))}

                    {/* <GridTextParent>
                        <GridHeroImg />
                        <GridText>
                            
                        </GridText>
                    </GridTextParent> */}

                </GridHeroWrapper> 

                
                        
                </GridMainWrapper>
            </GridContainer>
        </GridSection>
    )
}

export default SkillSection
