import { Row, Col, Divider, Button, Typography } from 'antd';
import CustomLayout from '../../layouts/customLayout';
import { useSelector } from 'react-redux';
import styles from '../../../../styles/NgoDetails.module.css';
import ProjectCard from './ProjectCard';
import NgoSidebarUser from './NgoSidebarUser';
import LeftMenu from '../../layouts/NgosNavbar';
import { useRouter } from 'next/router'
import TextEditor from './TextEditor';
import uploadOnCloudinary from './uploadOnCloudinary';
import { EditorState, convertToRaw, ContentState} from 'draft-js';

import { useEffect, useState } from 'react';

import apiCall from './apiCall';

const NgoDetails = ({  id }) => {

    const ngoByUserId = useSelector((state)=> state.detailsReducer.ngo);
    const {ngo, ngoDetail, projects} = ngoByUserId;

    console.log(ngoDetail)
    const[token, setToken] = useState("")

    const { Title } = Typography;

        const addProjectDetails = () =>{

            
            fetch("http://localhost:8080/create-checkout-session/multiple", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id:1
              }),

            })
              .then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
              })
              .then(({ url }) => {
                window.location = url
              })
              .catch(e => {
                console.error(e.error)
              })

        }

    
    const uploadNgoDetails = async() =>{

        try{
            
          //1. upload image on cloudinary 
          
            const imageUrl = uploadOnCloudinary(logo.file)
      
          //2. Upload NGO details 
              const body = {
                  about_us:about,
                  services:service,
                  image:imageUrl, 
                  projects:project,
                  ngoId:id
              }

            apiCall(`ngodetails`,JSON.stringify(body), "POST", null, null)
            .then((res)=>{
                
                    alert("Details uploaded")             
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        catch(err){
            alert("Something went wrong!")
        }
       

    }

    return (
        <div className={styles.container}>
        
            <Row align="middle" justify="center">
                <Title className={styles.title} ellipsis> { ngo.name} </Title>
            </Row>


            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.container}>

                <Col lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 24 }} className={styles.sideBar} justify="center">
                        <NgoSidebarUser ngo={ngo} image={ngoDetail.image}/>
                </Col>


                <Col lg={{ span: 18 }} md={{ span: 18 }} sm={{ span: 24 }} justify="center">

                    <Row justify="start" id="about">

                        <Title level={3} >About Us</Title>
                        <TextEditor />
                                      
                    </Row>

                    <Row justify="start" id="services">

                        <Title  level={3}>Our Services</Title>                       
                        <TextEditor />

                    </Row>

                    <Row justify="start" id="projects" style={{ margin: "5px" }}>

                        <Title level={3}>Projects</Title>                     
                        <TextEditor />

                    </Row>
  
                      
                      <Button type="primary" onClick={uploadNgoDetails}>Upload</Button>
                      <Button type="primary" onClick={addProjectDetails}>Add Account Details</Button>
                   
                   

                </Col>

            </Row>

        </div>
    )
        
        
    
}

export default NgoDetails;
