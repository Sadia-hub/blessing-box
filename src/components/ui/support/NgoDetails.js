import { Row, Col, Divider, Button, Typography } from 'antd';
import CustomLayout from '../../layouts/customLayout';
import { useSelector } from 'react-redux';
import styles from '../../../../styles/NgoDetails.module.css';
import ProjectCard from './ProjectCard';
import NgoSidebar from './NgoSidebar';
import LeftMenu from '../../layouts/NgosNavbar';
import { useRouter } from 'next/router'
import TextEditor from './TextEditor';
import { EditorState, convertToRaw, ContentState} from 'draft-js';

import { useEffect, useState } from 'react';

import apiCall from './apiCall';

const NgoDetails = ({ editable }) => {
    const { Title, Paragraph } = Typography;
    const router = useRouter()
    const { id } = router.query

    const [ngo, setNgo] = useState({});
    const [ngoDetails, setNgoDetails] = useState({});
    const [projects, setProjects] = useState([]);

    const [about, setAbout] = useState("");
    const [service, setService] = useState("")
    const [project, setProject] = useState("")

    //sets data of image using react image uploading package
    const [logo, setLogo] = useState("");
    

    //stores cloudinary image url
    const [imageUrl, setImageUrl] = useState("");

    const [defaultAbout, setDefaultAbout] = useState({});
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

                // const {ngo, ngoDetail} = ngo;

                setNgo(()=>res.ngo)

                if(res.ngoDetail){

                    const {about_us, services, image, projects} = res.ngoDetail;
                    setAbout(()=>about_us)
                    setService(()=>services)
                    setProject(()=>projects)
                    console.log("image", image)
                    setImageUrl(()=>image)



                }
                if(res.projects){
                    setProjects(()=>res.projects);
                }
                else{
                    setNgoDetails(()=>ngoDetailInfo)
                    // setAbout(()=>'<p>ngoDetailInfo.about_us</p>')
                }
                
           }
           
        })
        .catch((err)=>{
            console.log(err.message)
        })       
    },[id]);

  

    
    function handleClick(e) {
        e.preventDefault();
        router.push('/ngosform');
    }

    const uploadNgoDetails = async() =>{
       
        const formData = new FormData();
        formData.append('file', logo.file);
        formData.append('upload_preset', 'my-uploads');
       
        const res = await fetch('https://api.cloudinary.com/v1_1/blessing-box/image/upload', {
          method: 'POST',
          body: formData
        })
    
        const file = await res.json();
        console.log(file)

        const body = {
            about_us:about,
            services:service,
            image:file.secure_url, 
            projects:project,
            ngoId:id
        }

        console.log(JSON.stringify(body))

        apiCall(`ngodetails`,JSON.stringify(body), "POST", null, null)
        .then((res)=>{
            if(res.status==200)
            {
                alert("Details uploaded")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return <CustomLayout>
        
        <div className={styles.container}>
        
            <Row align="middle" justify="start">
                <Title className={styles.title} ellipsis> { ngo.name} </Title>
            </Row>

            <Row justify='center'>
                <LeftMenu />
            </Row>


            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.container}>

                <Col lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 24 }} className={styles.sideBar} justify="center">
                    <NgoSidebar ngo={ngo} logo={logo} setLogo={setLogo} imageUrl={imageUrl}/>
                </Col>


                <Col lg={{ span: 18 }} md={{ span: 18 }} sm={{ span: 24 }} justify="center">

                

                    <Row justify="start" id="about">

                        <Title level={3} >About Us</Title>
                        <TextEditor data={about} setData={setAbout} defaultContent={defaultAbout}/>
                                      
                    </Row>

                    <Row justify="start" id="services">

                        <Title  level={3}>Our Services</Title>                       
                        <TextEditor data={service} setData={setService}/>

                    </Row>

                    <Row justify="start" id="projects" style={{ margin: "5px" }}>

                        <Title level={3}>Projects</Title>                     
                        <TextEditor data={project} setData={setProject}/>

                    </Row>

                    
                    {
                        
                      editable?<Button type="primary" onClick={handleClick}>Add project</Button>:null  
                    }
                    {
                        editable?<Button type="primary" onClick={handleClick}>Add Account</Button>:null  
                    }
                    {
                        editable?<Button type="primary" onClick={uploadNgoDetails}>Upload</Button>:null  
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
