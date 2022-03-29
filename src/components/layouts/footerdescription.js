import style from '../../../styles/Footer.module.css';
import {Anchor,Row,Col,Typography} from 'antd';
import { CustomButton } from '../ui/buttons/buttons';
export function Description(){
    const {Link} =Anchor;
    const { Title } = Typography;
    return(<>
    <div className={style.headingaddress}>
        <Title level={2}>About Us</Title>
        <Anchor affix={false}>
          <Link href="/email" className={style.content}>
              <a>
              <Row>
                 <Col   span={24}>
                 <Title level={3}>Individually We are a <span className={style.footerContent}>Drop</span> But <span className={style.footerContent}>Together</span> We are an <span  className={style.footerContent}>Ocean</span></Title>
                 </Col>
              </Row>
           
              <Row>
                 <Col  span={21}>
                     <CustomButton label="Donate❤" className={false} onClick={false} type="danger" disabled={false} shape="round" />{' '}
                     <CustomButton label="Registeration" className={style.footerButton} onClick={false}  type={false} disabled={false} shape="round" />
                 </Col>
              </Row>
              </a>
           </Link>
        </Anchor>

    </div>
    </>)
}