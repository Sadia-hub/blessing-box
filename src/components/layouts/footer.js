import { Layout, Row, Col } from 'antd';
import footerLogo from '../../../public/footer-logo.png';
import { MyImage } from '../ui/support/image';
import style from '../../../styles/Footer.module.css';
import { Footeradress } from './footeradress';
import { Description } from './footerdescription';

const { Footer } = Layout;
import { useState } from 'react';

const CustomFooter = () => {
    const [xs,setXs] = useState(22);
    const [sm,setSm] = useState(11);
    const [md,setMd] = useState(8);
    const [lg,setLg] = useState(8);
    return (<>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        <Footer className={style.footerbgColor}>
            <Row >
                <Col xs={{span:xs}} sm={{span:sm}} md={{span:md}} lg={{span:lg}}>
                    <Row justify='center' align="middle">
                        <MyImage src={footerLogo} width={100} height={200} layout="fixed" />
                    </Row>
                    
                </Col>
              
              <Col xs={{span:xs}} sm={{span:sm}} md={{span:md}} lg={{span:lg}}>
                  <Footeradress/>
              </Col>
              <Col xs={{span:xs}} sm={{span:sm}} md={{span:md}} lg={{span:lg}}>
              <Description/>
              </Col>
                
            </Row>
        </Footer>
    </>)
}

export default CustomFooter;