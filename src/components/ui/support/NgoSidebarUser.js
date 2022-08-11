import {Col, Divider, Row, Typography} from 'antd';
import styles from '../../../../styles/NgoDetails.module.css';
import {BookOutlined} from '@ant-design/icons';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/router'

const NgoSidebarUser = () =>{


    const { Title } = Typography;
 
    return<>
        <div>
                        <ImageUpload logo={logo} setLogo={setLogo} imageUrl={imageUrl}/>
                        {/* <Row justify='center'>

                             <div style={{borderRadius:"360px", overflow:"hidden"}}>
                                <Image src={ngo.image} height={150} width={150} layout="intrinsic"/>
                            </div> 
                            
                        </Row> */}

                        {/* ///NGO basic knowledge */}
                        <div className={styles.ngo}>

                            <Divider>
                                <Title level={3}>NGO Information</Title>
                            </Divider>


                            <Row align='middle' justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Founded</Col>
                                <Col span={14}> {ngo.year} </Col>

                            </Row>
                            
                            
                            <Row justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Service Areas</Col>
                                <Col span={14}>
                                    
                                    {ngo.serviceArea}
                                </Col>
                                
                                

                            </Row>
                            <Row align='middle' justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Email</Col>
                                <Col span={14}> {ngo.ngoEmail} </Col>

                            </Row>
                            <Row align='middle' justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Contact</Col>
                                <Col span={14}> {ngo.contact} </Col>

                            </Row>
                            <Row justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Main Branch</Col>
                                <Col span={14}> {ngo.address} </Col>

                            </Row>
                            

                            {/* Founder Information */}

                            <Divider>
                                <Title level={3}>Founder Information</Title>
                            </Divider>

                            <Row justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Founder</Col>
                                <Col span={14}> {ngo.founderName} </Col>

                            </Row>

                            <Row justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Contact</Col>
                                <Col span={14}> {ngo.founderContact} </Col>

                            </Row>

                            <Row justify='center' className={styles.barItems}>

                                <Col span={10}><BookOutlined/>Email</Col>
                                <Col span={14}> {ngo.founderEmail}  </Col>

                            </Row>


                            

                            
                          

                        </div>
                        
                        
                    </div>
    </>
}

export default NgoSidebarUser;