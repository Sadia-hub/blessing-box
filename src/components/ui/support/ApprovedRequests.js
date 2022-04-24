import { Typography } from 'antd';
import { Row, Col } from 'antd';
import styles from '../../../../styles/PendingRequest.module.css';
import { CustomButton } from '../buttons/buttons';
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { approved, rejected } from '../../../actions';
const{Title}=Typography;

const ApprovedRequest = () => {
const dispatch = useDispatch();
const myState = useSelector((state)=> state.statusReducer);
 console.log("In state "+myState);
 
const list = [{id: 1, name: "Faiz Foundation", status: myState, ActionA: "Approve", ActionR: "Reject"},
{id: 2, name: "Biryani Foundation", status: myState, ActionA: "Approve", ActionR: "Reject"},
{id: 3, name: "Student Foundation", status: myState, ActionA: "Approve", ActionR: "Reject"}]

 const [data, setData] = useState(list);

//   const singleDelete = () => { 
//     handleOk();
//     dispatch(approved())
    
//     setData((data)=>{  
//       setVal(()=>myState);
//       console.log("In value "+val);
//       console.log("In list "+data[key].status);
//       return data.filter( (ngoData)=> ngoData.id!==key );
//     }); 
//   }
    

//   const rejectRow = () => { 
//     handleRejectOk();
//     dispatch(rejected())
//     setData((data)=>{
//     // if(data.id==key){
//     //   data.status="rejected"
//     //   // dispatchstatus({type: 'STATUS', payload: name}); 
//     //   console.log("In single delete row"+data.status);
//     // }
//     return data.filter((ngoData)=>
//     ngoData.id!==key
    
//     );
//   }); 
// }

  

   return(
        <>
        <div className={styles.mainContainer}>
        <Title className={styles.heading}>Approved Requests</Title>
        <Row className={styles.row}>
        <Col span={8} >
        <Title level={3} > Organization ID </Title> 
        </Col>
        <Col span={8}>
        <Title level={3}>  Organization NAME </Title> 
        </Col>
        <Col span={8}>
        <Title level={3}>   Status </Title>
        </Col>
        </Row>
        {
        data.map((itm, i)=>{
        if(itm.status=="approved"){
          return(  
            <>
            <Row key={itm.id} className={styles.space} >
           <Col span={8}  >
           <Title level={5}>   {itm.id} </Title>
           </Col>
           <Col span={8}>
           <Title level={5}> {itm.name} </Title>
           </Col>
            
           <Col span={8}>
           <CustomButton label="Approved" className={false} onClick={false} type="primary" disabled={false} shape="round" /> {' '} 
      
           </Col>
        
           </Row>     
            </>
        ) 
        }    
        })}     
        
        </div>
        </>
    )
}
export default ApprovedRequest;