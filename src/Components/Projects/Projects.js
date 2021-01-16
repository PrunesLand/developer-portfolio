import React from 'react'
import { ProjectData } from './ProjectData'
import {ProjectsSection, ProjectsWrapper, ProjectsHeader, ProjectsList, ListWrapper, ListItem} from './ProjectsStyles'

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
                            {item.name}
                            
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
