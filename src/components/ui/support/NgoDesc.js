import { Row, Col, Divider, Button, Typography } from 'antd';
import CustomLayout from '../../layouts/customLayout';
import { useSelector } from 'react-redux';
import styles from '../../../../styles/NgoDetails.module.css';
import ProjectCard from './ProjectCard';
import NgoSidebarUser from './NgoSidebarUser';
import LeftMenu from '../../layouts/NgosNavbar';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import apiCall from './apiCall';
import DisplayEditorContent from './DisplayEDitorContent';

const NgoDesc = () => {

    const { Title, Paragraph } = Typography;
    const router = useRouter()
    const { category, id } = router.query

    const [ngoDetail, setNgoDetail] = useState({});
    const [projects, setProjects] = useState([])
    console.log("projects", projects)
    const [ngo, setNgo] = useState({})

    //fetching ngo details for donor 
    useEffect(()=>{
         apiCall(`ngo/${id}`,null, "GET", null, null)
        .then((res)=>{
        console.log(res)
        if(res.success){
                setNgo(()=>res.ngo)

                if(res.ngoDetail){
                   setNgoDetail(()=>res.ngoDetail)
                }
                // if(res.projects){
                //     setProjects(()=>res.projects);
                // }      
        }        
        })
        .catch((err)=>{
            console.log(err.message)
        })       
    },[id]);

    
    //Server Sent Events
    useEffect(() => {
        const fetchData = new EventSource(`http://localhost:8080/sse/${id}  `) 
          fetchData.addEventListener('open', () => {
            console.log("Connection made ");
          });
    
          fetchData.addEventListener('message', async (e) => {
            console.log(e.data);
            const data = await JSON.parse(e.data);
            setProjects(()=>data);
          });
    
          fetchData.addEventListener('error', (e) => {
            console.error('Error: ',  e);
          });
          return () => {
            fetchData.close();
          };
           
      }, []);
   
 
    const myState = useSelector((state)=> state.detailsReducer);
    const ngos = myState[category].filter((ngo)=>ngo.ngo.id==id)

    function handleClick(e) {
        e.preventDefault();
        router.push('/ngosform');
    }
    const state = useSelector((state)=> state.userReducer);
    console.log("state is",state)


    return <CustomLayout>
        
        <div className={styles.container}>
            <Row align="middle" justify='center'>
                <Title className={styles.title} ellipsis>{ ngo.name} </Title>
            </Row>
            <Row justify='center'>
                <LeftMenu />
            </Row>
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.container}>

                <Col lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 24 }} className={styles.sideBar} justify="center">

                    <NgoSidebarUser ngo={ngo} image={ngoDetail.image}/>

                </Col>
                
                <Col lg={{ span: 18 }} md={{ span: 18 }} sm={{ span: 24 }} justify="center">
                    <Row justify='center' id="about" >

                        <Title level={3} >About Us</Title>
                        <div style={{width:"95%"}}> <DisplayEditorContent value={ngos[0].about_us}/></div>
                       

                    </Row>
                    <Row justify='center' id="services">

                        <Title level={3}>Our Services</Title>
                        <div style={{width:"95%"}}> <DisplayEditorContent value={ngos[0].services}/></div>

                    </Row>

                    <Row justify='center' id="projects" style={{ margin: "5px" }}>

                        <Title level={3}>Projects</Title>
                        <div style={{width:"95%"}}> <DisplayEditorContent value={ngos[0].projects}/></div>
                    </Row>

 
                    <Row justify="center">
                        {
                            projects.map((project)=>{
                                return <> <Col>{project.target > project.amountRecieved ?<ProjectCard 
                                title={project.title}
                                pic={project.imageurl}
                                targetAmount={project.target}
                                desc={project.description}
                                projectId={project.id}
                                percent={project.amountRecieved}
                                account_id={ngos[0].account_id}
                                /> : null}</Col></>
                            })
                        }
                        
                    </Row>

                </Col>

            </Row>

        </div>
        
    </CustomLayout>
}

export default NgoDesc;