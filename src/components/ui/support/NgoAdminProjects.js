import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


import apiCall from './apiCall'

import {Row, Col} from 'antd'
import { EditOutlined, PlusOutlined  } from '@ant-design/icons';
import ProjectCard from './ProjectCard'

function NgoAdminProjects() {

    const router = useRouter();

    //stores projects list
    const [projects, setProjects] = useState([]);

    //performs fetching from api 
    useEffect(()=>{

        apiCall(`ngos/1/project`,null, "GET", null, null)
        .then((res)=>{
            setProjects(()=>res.ngoProjects)        
        })
        .catch((err)=>{
            console.log(err.message)
        }) 

    },[]);

    function addProject(e) {
        e.preventDefault();
        router.push('/admin/addproject');
    }


  return (
    <div style={{marginTop:"80px"}}>
        <Row justify='start' style={{ marginLeft:"100px"}}>
                <PlusOutlined 
                  style={{fontSize:30}}
                  onClick={addProject}/>
                <h3>Add Project</h3>
        </Row>
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