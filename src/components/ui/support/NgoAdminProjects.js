import React from 'react'
import {Row} from 'antd'
import ProjectCard from './ProjectCard'

function NgoAdminProjects() {
  return (
    <div>
         <Row justify="center">
                        {
                            projects.map((project)=>{
                                return <Col>
                                    <ProjectCard
                                        title={project.title}
                                        traget={project.target}
                                        pic={project.pic}
                                        desc={project.description}
                                    />
                                </Col>
                            })
                        }
        </Row>
    </div>
  )
}

export default NgoAdminProjects