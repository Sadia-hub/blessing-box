import {Col,Row,Typography} from 'antd';
const { Title} = Typography;
import CustomCard from './CustomCard';
import Color from '../../../../styles/colors';
const Categories = (xs=12, sm=11, md=8, lg=5, title="") =>{
    return <>
            <Row justify='center' >
                 <Title style={Color.white}>{title}</Title>
            </Row>
            
            <Row justify="center">
                <Col 
                xs={{ span: xs }}  
                sm={{span: sm}} 
                md={{ span: md }} 
                lg={{span:lg}}>        
                    <CustomCard 
                    title="Orphanage" 
                    donation={1000} 
                    src="/education.gif"
                    alt="Education Category"
                    />
                </Col>
            
                <Col 
                xs={{ span: xs}}  
                md={{ span: sm}} 
                sm={{span: md}} 
                lg={{span:lg}}>
                    <CustomCard 
                    title="Food" 
                    donation={1000} 
                    src="/Charity.gif"
                    alt="Food Category"
                    />
                </Col>
                <Col 
                xs={{ span: xs }}  
                md={{ span: sm }} 
                sm={{span: md}} 
                lg={{span:lg}}>
                    <CustomCard 
                    title="Education" 
                    donation={1000} 
                    src="/orphanage.gif"
                    alt="Orphanage Category"
                    />
                </Col>
            </Row>
    </>
}
export default Categories;