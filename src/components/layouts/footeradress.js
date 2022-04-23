//import {Menu} from 'antd';
import { MailOutlined,PhoneOutlined,EnvironmentOutlined } from '@ant-design/icons';
import style from '../../../styles/Footer.module.css';
import {Anchor,Row,Col,Typography} from 'antd';
export function Footeradress(){
    const {Link} =Anchor;
    const { Title } = Typography;
    return(<>
    <div className={style.headingaddress}>
        <Title level={2}>Address</Title>
        <Anchor affix={false}>
          <Link href="/email" className={style.content}>
              <a>
              <Row>
                 <Col   span={3} >
                 <MailOutlined />
                 </Col>
                 <Col   span={21}>
                     <Title level={5}>blessingbox@gmail.com</Title>
                 </Col>
              </Row>
              
              <Row>
                 <Col   span={3}>
                 <PhoneOutlined/>
                 </Col>
                 <Col   span={21}>
                 <Title level={5}>0309765338</Title>
                 </Col>
              </Row>
             
              <Row>
                 <Col span={3}>
                 <EnvironmentOutlined />
                 </Col>
                 <Col   span={21}>
                 <Title level={5}>IBA Main Campus<br/>Sukkur</Title>
                 </Col>
              </Row>
              </a>
           </Link>
        </Anchor>

    </div>
    </>)
}
