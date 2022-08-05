import { Row, Col, Divider, Button, Typography } from 'antd';
import CustomLayout from '../../layouts/customLayout';
import { useSelector } from 'react-redux';
import styles from '../../../../styles/NgoDetails.module.css';
import ProjectCard from './ProjectCard';
import NgoSidebar from './NgoSidebar';
import LeftMenu from '../../layouts/NgosNavbar';
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react';

import apiCall from './apiCall';

const NgoDetails = ({ editable }) => {
    const { Title, Paragraph } = Typography;
    const router = useRouter()
    const { id } = router.query

    const [ngo, setNgo] = useState({});
    const [ngoDetails, setNgoDetails] = useState({});
    const [projects, setProjects] = useState([]);

    const ngoDetailInfo = {
        about_us:"Discuss in atmost 10 lines about your NGO. What you do and how you do it",
        services:"Mention what services you have been providing ",
        projects:"Descirbe what kind of projects you need donation for"
    }

    useEffect(()=>{
       
        apiCall(`ngo/${id}`,null, "GET", null, null)
        .then((res)=>{
           console.log(res)
           if(res.success){

                setNgo(()=>res.ngo)
                if(res.ngoDetail){
                    console.log("yes")
                    console.log(res.ngo.name)
                    setNgoDetails(()=>res.ngoDetail)
                }
                if(res.projects){
                    setProjects(()=>res.projects);
                }
                else{
                    setNgoDetails(()=>ngoDetailInfo)
                }
                
           }
           
        })
        .catch((err)=>{
            console.log(err.message)
        })


          
    },[id]);
    // sajna portion
    function handleClick(e) {
        e.preventDefault();
        router.push('/ngosform');
    }

    return <CustomLayout>
        
        <div className={styles.container}>
            <Row align="middle" justify='center'>
                <Title className={styles.title} ellipsis> { ngo.name} </Title>
            </Row>
            <Row justify='center'>
                <LeftMenu />
            </Row>
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.container}>
                <Col lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 24 }} className={styles.sideBar} justify="center">
                    <NgoSidebar ngo={ngo}/>
                </Col>
                <Col lg={{ span: 18 }} md={{ span: 18 }} sm={{ span: 24 }} justify="center">

                    <Row justify='center' id="about">

                        <Title level={3} >About Us</Title>
                        <Divider />
                        
                        <Paragraph
                            editable={{                        
                            autoSize: {
                                maxRows: 10,
                                minRows: 3,
                            },
                            }}
                        >                            
                            {ngoDetails.about_us}{ngoDetails.about_us}{ngoDetails.about_us}{ngoDetails.about_us}
                        </Paragraph>
                  
                    </Row>

                    <Row justify='center' id="services">

                        <Title  level={3}>Our Services</Title>
                        <Divider />

                        <Paragraph 
                         editable={{                        
                            autoSize: {
                                maxRows: 10,
                                minRows: 3,
                            },
                            }}
                        >
                        {ngoDetails.services}  
                        
                        </Paragraph>
                    </Row>

                    <Row justify='center' id="projects" style={{ margin: "5px" }}>
                        <Title level={3}>Projects</Title>
                        <Divider />
                        
                        <Paragraph editable={editable}>
                        {ngoDetails.projects}   
                        </Paragraph>
                    </Row>

                    
                    {
                        
                      editable?<Button type="primary" onClick={handleClick}>Add project</Button>:null  
                    }
                    {
                        editable?<Button type="primary" onClick={handleClick}>Add Account</Button>:null  
                    }

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

                </Col>

            </Row>

        </div>
    </CustomLayout>
}

export default NgoDetails;
