import { Typography, Row, Col, Divider } from 'antd';
import styles from '../../../../styles/WhyChooseUs.module.css';
import Image from 'next/image';
const { Title } = Typography;

function WhyChooseUs() {

    return (<>
        <Divider><Title level={1} className={styles.heading}>Why Choose Us</Title></Divider>

        <Row justify='center'>
            <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 12 }} lg={{ span: 9, offset:1}} >
                <Title level={3} className={styles.text} >It is a social service platform that invites multiple Pakistani Non-government Organizations
                    (NGOs) on a single page to serve the country in a much better and efficient way. BlessingBox is
                    helpful for both donors as well as the receiver that is NGO in our case. It helps donors in a way
                    that they can donate their money to the right place. Because our platform keeps track of how much
                    amount a particular NGO received through our system. So, donors will be able to donate to those
                    NGOs that received lesser funds. Thus, they are donating at the right place.</Title>
            </Col>
            <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 12 }} lg={{ span: 8, offset:3 }} >
                <Image height={350}
                    width={350}
                    src="/whyChooseUs.png"
                    className={styles.chooseImg} />
            </Col>
        </Row>

    </>)
}
export default WhyChooseUs;