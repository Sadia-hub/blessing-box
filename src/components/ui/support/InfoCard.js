import { Card, Col, Row,Typography } from 'antd';
import styles from '../../../../styles/InfoCard.module.css';
import { useState } from 'react';

const InfoCard = ({ngoRegister="200",funds="29090"}) =>{
  const [xs,setXs] = useState(22);
  const [sm,setSm] = useState(11);
  const [md,setMd] = useState(8);
  const [lg,setLg] = useState(8);
const{Title}=Typography;
    return(<>  
     <div className={styles.cardInfo}>     
    <Row>
      <Col xs={{span:xs}} sm={{span:sm}} md={{span:md}} lg={{span:lg}}>
        <Card bordered={false}>
          <Title type="danger">{ngoRegister}</Title>
          <Title level={5}>TOTAL NGOs REGISTERED</Title>
        </Card>
      </Col>
      <Col xs={{span:xs}} sm={{span:sm}} md={{span:md}} lg={{span:lg}}>
        <Card  bordered={false}>
          <Title type="danger">{funds}</Title>
          <Title level={5}>TOTAL FUNDS COLLECTED</Title>
        </Card>
      </Col>
      <Col xs={{span:xs}} sm={{span:sm}} md={{span:md}} lg={{span:lg}}>
        <Card bordered={false}>
          <Title type="danger">2999</Title>
          <Title level={5}>TOTAL PROJECTS COLLECTED</Title>
        </Card>
      </Col>
    </Row>
  </div>
  </>)
}

export default InfoCard;