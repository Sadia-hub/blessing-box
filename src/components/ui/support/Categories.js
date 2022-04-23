import {Col,Row,Typography} from 'antd';
const { Title} = Typography;
import CustomCard from './CustomCard';
import Color from '../../../../styles/colors';
const Categories = (xs=12, sm=11, md=8, lg=5, title="Choose, where you want to donate") =>{
    return <>
            <Row justify='center' >
                 <Title style={{color:"#EB2188"}}>{title}</Title>
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
                    src="/home.svg"
                    alt="Orphanage Category"
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
                    src="/food2.svg"
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
                    src="/education.svg"
                    alt="Education Category"
                    />
                </Col>
            </Row>
    </>
}
export default Categories;