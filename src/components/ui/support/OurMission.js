import { Row, Col } from 'antd';
import { Typography } from 'antd';
import styles from '../../../../styles/Mission.module.css';
import Image from 'next/image';
import Color from '../../../../styles/colors';
const OurMission = () => {
    const {Title} = Typography;
    return <>
     <div >
          <Row >
          <Col  md={8} sm = {{span: 16}}  xs={16} lg={8} offset={2}>
            <Image 
              height={350}
              width={350}
              src="/mission.png"
              className={styles.img}></Image>
             
            </Col>
            <Col  md={8} sm = {{span: 16}}  xs={16} lg={8} offset={2}>
              <Row >
              <Title style={{color : Color.primaryV2, marginTop : '5rem'}}> Our Mission </Title>  
              </Row>
              <Row>
              <Title level ={4}> 
              Our Mission is to spread awareness among people for NGOs because all 
              NGOs are available on single platform. Specially to bring forward the startup NGOs, as they are 
              unknown to the world.
              {/* We want to provide an environment to NGOs where they can describe 
              their purpose of existence and services. In this manner, donors 
              get awarness about different NGOs. As there are some startup 
              NGOs that are unknown to the world.  */}
             
             
               
               </Title>
              </Row>
            </Col>
            
          </Row>
         
          </div>
    </>
}
export default OurMission;