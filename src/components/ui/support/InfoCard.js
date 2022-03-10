import { Card, Col, Row } from 'antd';

const InfoCard = () =>{
    return   <div className="site-card-wrapper">
    <Row gutter={12}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
}

export default InfoCard;