import {Row, Col, Divider} from 'antd';
import { Typography } from 'antd';
import CustomLayout from '../../layouts/customLayout';


import { useState } from 'react';
import styles from '../../../../styles/NgoDetails.module.css';
import ProjectCard from './ProjectCard';
import NgoSidebar from './NgoSidebar';
import LeftMenu from '../../layouts/NgosNavbar';
const NgoDetails = ({id, editable=false}) =>{
    
    const { Title, Paragraph } = Typography;
    const [title, setTitle] = useState("Chippa NGO");
    const [founder, setFounder] = useState("Abdul Sattar Edhi");


    return <CustomLayout>
        
        <div className={styles.container}>

            <Row align="middle" justify='center'>
                <Title className={styles.title} editable={editable} ellipsis>{title}</Title> 
            </Row>

            <Row justify='center'>
                <LeftMenu/>
            </Row>

            
      
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.container}>

                    <Col  lg={{span:6}} md={{span:6}} sm={{span:24}} className={styles.sideBar} justify="center">
                        <NgoSidebar/>
                    </Col>
                    

                    <Col lg={{span:18}} md={{span:18}} sm={{span:24}} justify="center">
                        

                            <Row justify='center'>
                            
                                <Title editable={editable} level={3}>About Us</Title>
                                <Paragraph editable={editable}>
                                    CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without discrimination of any caste, creed or colour under all circumstances, where frequent road accidents, sudden events and emergencies daily occur.
                                    CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without discrimination of any caste, creed or colour under all circumstances, where frequent road accidents, sudden events and emergencies daily occur.
                           
                                </Paragraph>

                            </Row>
                            
                            <Row justify='center'>
                                
                                <Title editable={editable} level={3}>Our Services</Title>
                                <Paragraph editable={editable}>
                                    CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without discrimination of any caste, creed or colour under all circumstances, where frequent road accidents, sudden events and emergencies daily occur.
                                    CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without discrimination of any caste, creed or colour under all circumstances, where frequent road accidents, sudden events and emergencies daily occur.
                           
                                </Paragraph>   
                                
                            </Row>
                            <Row justify='center' style={{margin:"15px"}}>

                                <Title editable={editable} level={3}>Projects</Title>

                                <Paragraph editable={editable}>
                                    CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without discrimination of any caste, creed or colour under all circumstances, where frequent road accidents, sudden events and emergencies daily occur.
                                    CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without discrimination of any caste, creed or colour under all circumstances, where frequent road accidents, sudden events and emergencies daily occur.
                           
                                </Paragraph>
                            
                            </Row>

                            <Row justify="center">

                                    
                                    
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                            

                            </Row>
                        
                       

                      
                    
                    </Col>

            </Row>
            

            
            

        </div>
    </CustomLayout>
}

export default NgoDetails;
