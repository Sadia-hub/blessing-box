import {Row, Col, Divider, Typography} from 'antd';


const ProjectCard=({title="SIBA Pink Ribbon"})=>{

    const { Title } = Typography;

    return<div>
       <Title level={4}>{title}</Title>
       <Row>
           <Col span={6}>
           </Col>
           <Col span={12}>
           </Col>
           <Col span={6}>
           </Col>
       </Row>
    </div>
}

export default ProjectCard;