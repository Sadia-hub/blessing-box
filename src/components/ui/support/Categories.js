import {Col,Row,Typography} from 'antd';
const { Title} = Typography;
import CustomCard from './CustomCard';
import { useRouter } from 'next/router';
const Categories = (xs=12, sm=11, md=8, lg=5, title="Choose, where you want to donate") =>{

    const router = useRouter();

    return <div >
            <Row justify='center' id="donate" >
                 <Title style={{color:"#EB2188", marginTop:"60px"}}>{title}</Title>
            </Row>
            
            <Row justify="center">
                <Col 
                key="1"
                xs={{ span: xs }}  
                sm={{span: sm}} 
                md={{ span: md }} 

                lg={{span:lg}}> 
                    <div
                    onClick={()=>{router.push("/categories/orphange")}}
                    >
                        <CustomCard                        
                        title="Orphanage" 
                        donation={1000} 
                        src="/home.svg"
                        alt="Orphanage Category"
                        />
                    </div>       

                </Col>
            
                <Col 
                key="2"
                xs={{ span: xs}}  
                md={{ span: sm}} 
                sm={{span: md}} 
                lg={{span:lg}}>

                    <div
                     onClick={()=>{router.push("/categories/food")}}
                    >
                        <CustomCard                       
                        title="Food" 
                        donation={1000} 
                        src="/food2.svg"
                        alt="Food Category"
                        />
                    </div>

                </Col>
                <Col 
                key="3"
                xs={{ span: xs }}  
                md={{ span: sm }} 
                sm={{span: md}} 
                lg={{span:lg}}>

                    <div
                    onClick={()=>{router.push("/categories/education")}}
                    >
                        <CustomCard 
                        title="Education" 
                        donation={1000} 
                        src="/education.svg"
                        alt="Education Category"
                        />
                    </div>
                    

                </Col>
            </Row>
    </div>
}
export default Categories;