import { Typography, Row, Col, Divider } from 'antd';
import styles from '../../../../styles/ProvideServices.module.css';
import { useState } from 'react';

const { Title } = Typography;
function ProvideServices() {
    const [xs, setXs] = useState(24);
    const [sm, setSm] = useState(11);
    const [md, setMd] = useState(12);
    const [lg, setLg] = useState(12);
    return (<>
        <Divider><Title level={1} className={styles.mainserviceheading}>Services</Title></Divider>

        <Row>

            <Col xs={{ span: xs }} sm={{ span: sm }} md={{ span: md }} lg={{ span: lg }}>
                <Title level={2} className={styles.serviceheading}>Services For Donor</Title>
                <ol>
                    <li className={styles.liClass}><span className={styles.spanContent}>Save donors time since multiple NGOs are availbale at single platform.</span></li>
                    <li className={styles.liClass}><span className={styles.spanContent}> Donor can keep track of the amount of donation, a particular current project of NGOs through our system</span></li>
                    <li className={styles.liClass}><span className={styles.spanContent}> When Donor clicks a particular NGO, all details regarding that NGO will be shown to Donor.</span></li>
                </ol>
            </Col>


            <Col xs={{ span: xs }} sm={{ span: sm }} md={{ span: md }} lg={{ span: lg }}>
                <Title level={2} className={styles.serviceheading}>Services For NGOs</Title>
                <ol>
                    <li className={styles.liClass}><span className={styles.spanContent}>NGOs will be able to get the required amount of funds because our platform tracks how much donation an NGO has received and how much it needs. </span></li>
                    <li className={styles.liClass}><span className={styles.spanContent}>BlessingBox offers them that space for describing themselves, their services as well as what they have achieved so far.</span></li>
                    <li className={styles.liClass}><span className={styles.spanContent}>NGOs can get their personal account where it can represent itself such as its services,projects, and how much donation it requires.</span></li>
                </ol>
            </Col>
        </Row>
        <Divider/>
    </>)
}
export default ProvideServices;