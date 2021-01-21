import React from 'react'
// import { ProjectData } from './ProjectData'
import {ProjectsSection, ProjectsWrapper, ProjectsHeader, ProjectsList} from './ProjectsStyles'

// ListWrapper, ListItem, ListLink

const Projects = () => {
    return (
        <ProjectsSection>
            <ProjectsWrapper>
                <ProjectsHeader>
                    Past Projects
                </ProjectsHeader>
                <ProjectsList>
                    There are currently no past projects.
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
            </ProjectsWrapper>
        </ProjectsSection>
    )
}

export default Projects
