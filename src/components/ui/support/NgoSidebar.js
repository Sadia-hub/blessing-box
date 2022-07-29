import {Col, Divider, Row, Typography} from 'antd';
import styles from '../../../../styles/NgoDetails.module.css';
import {BookOutlined} from '@ant-design/icons';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/router'
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
    const router = useRouter()
    const { category, id } = router.query
    const myState = useSelector((state)=> state.detailsReducer);
    const ngos = myState[category].filter((ngo)=>ngo.ngo.id==id)
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
                                <Col span={14}> {ngos[0].ngo.year} </Col>

                            </Row>
                            
                            
                            <Row justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Services</Col>
                                <Col span={14}>
                                    {/* {
                                        services.map((service)=>{
                                            return<>
                                                {
                                                    `${ service}, `
                                                }
                                            </>
                                        })
                                    } */}
                                    {ngos[0].ngo.serviceArea}
                                </Col>
                                
                                

                            </Row>
                            <Row align='middle' justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Email</Col>
                                <Col span={14}> {ngos[0].ngo.ngoEmail} </Col>

                            </Row>
                            <Row align='middle' justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Contact</Col>
                                <Col span={14}> {ngos[0].ngo.contact} </Col>

                            </Row>
                            <Row justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Main Branch</Col>
                                <Col span={14}> {ngos[0].ngo.address} </Col>

                            </Row>
                            

                            {/* Founder Information */}

                            <Divider>
                                <Title level={3}>Founder Information</Title>
                            </Divider>

                            <Row justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Founder</Col>
                                <Col span={14}> {ngos[0].ngo.founderName} </Col>

                            </Row>

                            <Row justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Contact</Col>
                                <Col span={14}> {ngos[0].ngo.founderContact} </Col>

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