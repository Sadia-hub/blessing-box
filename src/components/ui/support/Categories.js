import {Col,Row,Typography} from 'antd';
const { Title} = Typography;
import CustomCard from './CustomCard';
const Categories = () =>{
    return <>
            <Row justify='center' >
                 <Title style={{color:"white"}}>Where You Can Donate?</Title>
            </Row>
            
            <Row justify="center">
                <Col 
                xs={{ span: 22 }}  
                sm={{span: 11}} 
                md={{ span: 8 }} 
                lg={{span:5}}>        
                    <CustomCard 
                    title="Orphanage" 
                    donation={1000} 
                    src="/education.gif"
                    alt="Education Category"
                    />
                </Col>
            
                <Col 
                xs={{ span: 22}}  
                md={{ span: 8}} 
                sm={{span: 11}} 
                lg={{span:5}}>
                    <CustomCard 
                    title="Food" 
                    donation={1000} 
                    src="/Charity.gif"
                    alt="Food Category"
                    />
                </Col>
                <Col 
                xs={{ span: 22 }}  
                md={{ span: 8 }} 
                sm={{span: 11}} 
                lg={{span:5}}>
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