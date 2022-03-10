import { Row,Col,Card } from 'antd';
import Image from 'next/image';


const { Meta } = Card;

const CustomCard = ({title="Pass Title as a Prop", donation=100000}) =>{
    return  <Card
        
        hoverable
        style={{ width:280, height:300, borderRadius:20 }}
        
        cover={<Image src="/c1.svg" width={300} height={220}/>}
    >
        <Row>
            <Col span={16}>
                <Meta title={title} />
            </Col>
            <Col span={8}>
               <p>{donation} Rs</p>
               <p>donated</p>
                
            </Col>
        </Row>
  </Card>
}

export default CustomCard;