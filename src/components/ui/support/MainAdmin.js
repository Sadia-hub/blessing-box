import {Col,Row,Typography} from 'antd';
const { Title} = Typography;
import CustomAdminCard from './CustomAdminCard';
import Color from '../../../../styles/colors';
import { useSelector, useDispatch } from 'react-redux';
import { useState, createContext, useReducer, useContext } from 'react';
import { Router, useRouter } from 'next/router'
import { approved, rejected, pending } from '../../../actions';

import PendingRequest from './PendingRequest';

const MainAdmin = (xs=12, sm=11, md=8, lg=5, title="Main Dashboard") =>{
     const myState = useSelector((state)=> state.statusReducer);
    console.log("In"+myState);
    const dispatch = useDispatch();
    const router = useRouter();
    const[status, setStatus] = useState("pending");
     const [heading,  setHeading] = useState("Pending Requests");
   
    const Approved = () => {
        setStatus(()=>"approved");
        // router.push('/approved');
        // dispatch(approved())
        // setTitle("Approved Requests");
   } 

   const Rejected = () => { 
    setStatus(()=>"rejected");
    // dispatch(rejected())

    }
    
  
    // setTitle("Rejected Requests");
    
    

    const Pending = () => {
        setStatus(()=>"pending"); 
        // dispatch(pending())
        // setTitle("Pending Requests");
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
              
                <PendingRequest status = {status} />
               
    </>
}
export default MainAdmin;





