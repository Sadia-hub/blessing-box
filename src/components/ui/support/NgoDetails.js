import {Row, Col, Divider} from 'antd';
import { Typography } from 'antd';
import CustomLayout from '../../layouts/customLayout';

import { useState } from 'react';
import styles from '../../../../styles/NgoDetails.module.css';
import ProjectCard from './ProjectCard';
import NgoSidebar from './NgoSidebar';
const NgoDetails = ({id}) =>{
    const { Title } = Typography;
    const [title, setTitle] = useState("Chippa NGO");
    const [founder, setFounder] = useState("Abdul Sattar Edhi");

    return <CustomLayout>
        
        <div className={styles.container}>

            <Row align="middle" justify='center'>
                <Title className={styles.title}>{title}</Title> 
            </Row>
      
            <Row justify="center" gutter={12}>

                    <Col  span={6} className={styles.sideBar} justify="center">
                        <NgoSidebar/>
                    </Col>
                    

                    <Col span={18} justify="center">
                        <div className={styles.mainBar}>

                            <Row justify='center'>
                                <h1>About Us</h1>
                                <p>CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without discrimination of any caste, creed or colour under all circumstances, where frequent road accidents, sudden events and emergencies daily occur.</p>
                                <p>CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without discrimination of any caste, creed or colour under all circumstances, where frequent road accidents, sudden events and emergencies daily occur.</p>
                            </Row>
                            <Divider/>
                            <Row justify='center'>
                                <h1>Our Services</h1>
                                <p>CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without discrimination of any caste, creed or colour under all circumstances, where frequent road accidents, sudden events and emergencies daily occur.</p>
                                <p>CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without discrimination of any caste, creed or colour under all circumstances, where frequent road accidents, sudden events and emergencies daily occur.</p>
                            </Row>
                        
                       

                        </div>
                        
                    
                    </Col>

            </Row>
            <Row justify='center'>
                            <h1>Our Projects</h1>
                            <p>CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without discrimination of any caste, creed or colour under all circumstances, where frequent road accidents, sudden events and emergencies daily occur.</p>
                            <p>CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without discrimination of any caste, creed or colour under all circumstances, where frequent road accidents, sudden events and emergencies daily occur.</p>
                            <ProjectCard/>
                            <ProjectCard/>
                            <ProjectCard/>
                            <ProjectCard/>
            </Row>
            
        </div>
    </CustomLayout>
}

export default NgoDetails;
