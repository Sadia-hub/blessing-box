import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import apiCall from './apiCall'

import {Row, Col} from 'antd'
import { EditOutlined, PlusOutlined  } from '@ant-design/icons';
import ProjectCard from './ProjectCard'

function NgoAdminProjects() {

    const router = useRouter();

    //stores projects list
    const [projects, setProjects] = useState([]);
    const ngoId= useSelector((state)=>state.detailsReducer.ngo.ngo.id )
    console.log('ngo data is',ngoId)
    //performs fetching from api 
    useEffect(()=>{

        apiCall(`ngos/${ngoId}/project`,null, "GET", null, null)
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
                                return <Col sm={{span:24}} md={{offset:1, span:11}} lg={{offset:1, span:11}}>
                                      <ProjectCard
                                        title={project.title}
                                        traget={project.target}
                                        pic={project.imageurl}
                                        desc={project.description}
                                    />
                                </Col>
                            })
                        }
             
        </Row>
    </div>
  )
}

export default NgoAdminProjects;