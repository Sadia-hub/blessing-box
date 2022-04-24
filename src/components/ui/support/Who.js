import { Row, Col } from 'antd';
import { Typography } from 'antd';
import Color from '../../../../styles/colors';
import Image from 'next/image';
const Who = () => {
    const {Title} = Typography;
    return <>
     <div >
          <Row >
            <Col  md={{span:8, order:1}} sm = {{span: 16, order:2}}  xs={{span:20,  order:2}} lg={{span:8, order:1}} offset={2}>
              <Row >
              <Title style={{ color: Color.primaryV2}}> Who we are </Title>  
              </Row>
              <Row>
              <Title level ={4}> Blessing Box is a generalized web based Donation System.
              . It is a social service platform that invites multiple Pakistani Non-government Organizations (NGOs) on 
              a single page to serve the country.
               </Title>
              </Row>
            </Col>
            <Col  md={{span:8, order:2, offset:2}} sm = {{span: 16, order:1}}  xs={{span:20,  order:1, offset:4}} lg={{span:8, offset:2}}>
            <Image 
              height={350}
              width={350}
              src="/we.png"
              className=''></Image>
               
            </Col>
          </Row>
         
          </div>
    </>
}
export default Who;