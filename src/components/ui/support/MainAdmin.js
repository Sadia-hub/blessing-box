import {Col,Row,Typography} from 'antd';
const { Title} = Typography;
import CustomAdminCard from './CustomAdminCard';
import Color from '../../../../styles/colors';

import { useState, createContext, useReducer, useContext } from 'react';
import { StatusContext } from './Context';
import PendingRequest from './PendingRequest';

const MainAdmin = (xs=12, sm=11, md=8, lg=5, title="Main Dashboard") =>{
    // const{status, dispatchstatus} = useContext(StatusContext);
//  const [state, dispatch] = useReducer(statusreducer, initialStatus);
    const [statuss,  setStatus] = useState("pending");
     const [heading,  setHeading] = useState("Pending Requests");
   
    const Approved = () => {
        var name = "approved"
        setStatus(()=>"approved");
        // setTitle("Approved Requests");
        // dispatchstatus({type: 'approved', payload: name}); 
   } 

   const Rejected = () => {
    var name = "rejected"
    setStatus(()=>"rejected");
    // setTitle("Rejected Requests");
    //   dispatchstatus({type: 'rejected', payload: name});
    } 

    const Pending = () => {
        setStatus(()=>"pending"); 
        // setTitle("Pending Requests");
        var name = "pending"
        // dispatchstatus({type: 'pending', payload: name}); 
    }
          
   return <>
            <Row justify='center' >
                 <Title style={{color:"#EB2188", marginTop: "75px" }}>{title}</Title>
            </Row>
    
            <Row justify="center" >
                <Col 
                xs={{ span: xs }}  
                sm={{span: sm}} 
                md={{ span: md }} 
                lg={{span:lg}}> 

                    <div onClick={Approved}>
                        <CustomAdminCard 
                        title="Approved Requests" 
                        src="/check.png"
                        alt="Approved Requests"
                        width={125}
                        height={115}
                    
                        />
                    </div>       
                   
                </Col>
            
                <Col 
                xs={{ span: xs}}  
                md={{ span: sm}} 
                sm={{span: md}} 
                lg={{span:lg}}>
                    <div onClick={Pending}>
                    <CustomAdminCard 
                    title="Pending Requests" 
                    src="/processing.png"
                    alt="Pending Requests"
                 
                    width={125}
                    height={115}
                    />
                    </div>
                </Col>
                <Col 
                xs={{ span: xs }}  
                md={{ span: sm }} 
                sm={{span: md}} 
                lg={{span:lg}}>
                    <div onClick={Rejected}>
                    <CustomAdminCard 
                    title="Rejected Requests" 
                    src="/close.png"
                    alt="Rejected Requests"
                    width={125}
                    height={115}
                  
                    />
                    </div>
                </Col>
            </Row>
              
                <PendingRequest statuss = {statuss} />
               
    </>
}
export default MainAdmin;





