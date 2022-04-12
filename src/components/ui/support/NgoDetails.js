import {Row, Col} from 'antd';
import { Typography } from 'antd';
import CustomLayout from '../../layouts/customLayout';
import { useState } from 'react';
const NgoDetails = () =>{
    const { Title } = Typography;
    const [title, setTitle] = useState("Chippa NGO");

    return <CustomLayout>
        
        <div>
        
            <Row style={{marginTop:"60px"}} justify="center">
                    <Title style={{color:"#EB2188"}}>{title}</Title> 
                <Row>
                    <Col span={6}>
                    
                    </Col>
                    <Col span={18}>
                    
                    </Col>
                </Row>                         
                <Col>
                
                </Col>

            </Row>
        </div>
    </CustomLayout>
}

export default NgoDetails;
