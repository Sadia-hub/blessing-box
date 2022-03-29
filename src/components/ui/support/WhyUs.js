import { Row, Col } from 'antd';
import { Typography } from 'antd';
import Image from 'next/image';
const WhyUs = () => {
    const {Title} = Typography;
    return <>
     <div >
          <Row >
            <Col md={8} sm = {{span: 16}}  xs={16} lg={8} offset={2}>
              <Row >
              <Title style={{color : '#2f4e71', marginTop: '5rem'}}> Why Choose Us </Title>  
              </Row>
              <Row>
              <Title level ={4}> Every NGO has a different purpose of its existence and greatly contributes to societal benefit. 
              However, some NGOs get sufficient funds while others do not due to a lack of reach or awareness.  Thus, a system where all NGOs are available on a single platform and 
              donors can donate to any Ngo of their interest. Not only this but also, a platform that keeps track of how much amount a particular Ngo has received through our system. So that donors can donate to those 
              NGOs which receive lesser funds.
               </Title>
              </Row>
            </Col>
            <Col md={8} offset={2} sm = {{span: 16}} lg={8} xs={16} style={{marginTop: '5rem'}}>
            <Image  
              height={350}
              width={350}
              src="/Why.png"
              className=''></Image>
            </Col>
          </Row>
         
          </div>
    </>
}
export default WhyUs;