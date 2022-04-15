import {Row, Col, Divider} from 'antd';
import { Typography } from 'antd';
import CustomLayout from '../../layouts/customLayout';
import {BookOutlined} from '@ant-design/icons';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../../../styles/NgoDetails.module.css';
import ProjectCard from './ProjectCard';

const NgoDetails = () =>{
    const { Title } = Typography;
    const [title, setTitle] = useState("Chippa NGO");
    const [founder, setFounder] = useState("Abdul Sattar Edhi");

    return <CustomLayout>
        
        <div className={styles.container}>

            <Row align='middle' justify='center'>
                <Title className={styles.title}>{title}</Title> 
            </Row>
      
            <Row justify="center" gutter={24} className="gutter-row">

                    <Col span={6} className={styles.sideBar}>
                        <Row justify='center'>

                            <div style={{borderRadius:"360px", overflow:"hidden"}}>
                                <Image src="/we.png" height={150} width={150} layout="intrinsic"/>
                            </div>
                            
                        </Row>

                        {/* ///NGO basic knowledge */}
                        <div className={styles.ngo}>
                            
                            <Row align='middle' justify='center' className={styles.barItems}>

                                <Col span={8}><BookOutlined/>Founder</Col>
                                <Col span={16}> {founder} </Col>

                            </Row>
                            <Row align='middle' justify='center' className={styles.barItems}>

                                <Col span={8}><BookOutlined/>Founder</Col>
                                <Col span={16}> {founder} </Col>

                            </Row>
                            <Row align='middle' justify='center' className={styles.barItems}>

                                <Col span={8}><BookOutlined/>Founder</Col>
                                <Col span={16}> {founder} </Col>

                            </Row>
                            

                            
                          

                        </div>
                        
                        
                    </Col>

                    <Col span={18} >
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
                        <Divider/>
                        <Row justify='center'>
                            <h1>Our Projects</h1>
                            <p>CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without discrimination of any caste, creed or colour under all circumstances, where frequent road accidents, sudden events and emergencies daily occur.</p>
                            <p>CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without discrimination of any caste, creed or colour under all circumstances, where frequent road accidents, sudden events and emergencies daily occur.</p>
                            <ProjectCard/>
                        </Row>

                        </div>
                        
                    
                    </Col>

            </Row>
            
        </div>
    </CustomLayout>
}

export default NgoDetails;
