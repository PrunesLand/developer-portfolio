import React from 'react'
import { ProjectData } from './ProjectData'
import {ProjectsSection, ProjectsWrapper, ProjectsHeader, ProjectsList, ListWrapper, ListItem, ListLink} from './ProjectsStyles'

const Projects = () => {
    return (
        <ProjectsSection>
            <ProjectsWrapper>
                <ProjectsHeader>
                    Past Projects
                </ProjectsHeader>
                <ProjectsList>
                    {ProjectData.map(item => {
                        return(

                    <ListWrapper>
                        <ListItem>
                            <ListLink href="/">
                                {item.name}

                            </ListLink>
                            
                        </ListItem>
                    </ListWrapper>
                        )

                    })}
                </ProjectsList>
            </ProjectsWrapper>
        </ProjectsSection>
    )
}

export default Projects
