import React from 'react'
// import { ProjectData } from './ProjectData'
import {ProjectsSection, ProjectsWrapper, ProjectsHeader, ProjectsList} from './ProjectsStyles'
import empty from '../Images/ProjectsImages/empty.svg'

// ListWrapper, ListItem, ListLink

const Projects = () => {
    return (
        <ProjectsSection id='project'> 
            <ProjectsWrapper>
                <ProjectsHeader>
                    Past Projects
                </ProjectsHeader>
                <ProjectsList>

                    <img src={empty} alt='empty'/>
                    
                    {/* {ProjectData.map(item => {
                        return(

                    <ListWrapper>
                        <ListItem>
                            <ListLink href="/">
                                {item.name}

                            </ListLink>
                            
                        </ListItem>
                    </ListWrapper>
                        )

                    })} */}
                </ProjectsList>
                There are currently no past projects.
            </ProjectsWrapper>
        </ProjectsSection>
    )
}

export default Projects
