import {Col, Divider, Row, Typography} from 'antd';
import styles from '../../../../styles/NgoDetails.module.css';
import {BookOutlined} from '@ant-design/icons';
import Image from 'next/image';
import { useState } from 'react';
const NgoSidebar = () =>{

    const { Title } = Typography;
    const [founded, setFounded] = useState(1998);
    const [services, setServices] = useState(["Education", "Orphanage", "Food"]);
    const [email, setEmail] = useState("chippa@gmail.com");
    const [contact, setContact] = useState("03227865342");
    const [address, setAddress] = useState("Sukkur IBA main branch, airport road Sukkur");

    const [founder, setFounder] = useState("Abdul Sattar Edhi");
    const [founderContact, setFounderContact] = useState("03229087654");
    const [founderEmail, setFounderEmail] = useState("sadiashah059@gmail.com");

    return<>
        <div>
                        <Row justify='center'>

                            <div style={{borderRadius:"360px", overflow:"hidden"}}>
                                <Image src="/we.png" height={150} width={150} layout="intrinsic"/>
                            </div>
                            
                        </Row>

                        {/* ///NGO basic knowledge */}
                        <div className={styles.ngo}>

                            <Divider>
                                <Title level={3}>NGO Information</Title>
                            </Divider>


                            <Row align='middle' justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Founded</Col>
                                <Col span={14}> {founded} </Col>

                            </Row>
                            
                            
                            <Row justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Services</Col>
                                <Col span={14}>
                                    {
                                        services.map((service)=>{
                                            return<>
                                                {
                                                    `${ service}, `
                                                }
                                            </>
                                        })
                                    }
                                </Col>
                                
                                

                            </Row>
                            <Row align='middle' justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Email</Col>
                                <Col span={14}> {email} </Col>

                            </Row>
                            <Row align='middle' justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Contact</Col>
                                <Col span={14}> {contact} </Col>

                            </Row>
                            <Row justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Main Branch</Col>
                                <Col span={14}> {address} </Col>

                            </Row>
                            

                            {/* Founder Information */}

                            <Divider>
                                <Title level={3}>Founder Information</Title>
                            </Divider>

                            <Row justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Founder</Col>
                                <Col span={14}> {founder} </Col>

                            </Row>

                            <Row justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Contact</Col>
                                <Col span={14}> {contact} </Col>

                            </Row>

                            <Row justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Email</Col>
                                <Col span={14}> {founderEmail} </Col>

                            </Row>


                            

                            
                          

                        </div>
                        
                        
                    </div>
    </>
}

export default NgoSidebar;