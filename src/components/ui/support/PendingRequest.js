import { Typography } from 'antd';
import { Row, Col } from 'antd';
import styles from '../../../../styles/PendingRequest.module.css';
import { CustomButton } from '../buttons/buttons';
import { initialStatus, statusreducer } from '../../../reducers/statusReducer';
import React, { useState, createContext, useReducer, useContext } from 'react';
import { StatusContext } from './Context';
import { Modal, Button } from 'antd';
const{Title}=Typography;



const PendingRequest = ({statuss="pending"}) => {
//  const{status, dispatchstatus} = useContext(StatusContext);

const list = [{id: 1, name: "Faiz Foundation", status:"pending", ActionA: "Approve", ActionR: "Reject"},
{id: 2, name: "Biryani Foundation", status:"approved", ActionA: "Approve", ActionR: "Reject"},
{id: 3, name: "Student Foundation", status:"rejected", ActionA: "Approve", ActionR: "Reject"}]

 const [data, setData] = useState(list);
 const [isModalVisible, setIsModalVisible] = useState(false);
 const [key,setKey] = useState(0);
 
  const showModal = (k) => {
    setIsModalVisible(true);
    setKey(k);
  };


  const handleOk = () => {
    setIsModalVisible(false);
  };

 
  // const updateStatus = () => {
  //   setData((data)=>{ (ngoData)=>{ngoData.id==key ? ngoData.status=="approved" :console.log("In single delete row "+ngoData.status)});
  //     // {ngo.id==key ? ngo.status="approved" : console.log("In single delete row "+ngo.id);
  //     //   // dispatchstatus({type: 'STATUS', payload: name}); 
  //     // } 
      
  //   });
  // }

  const singleDelete = () => { 
    handleOk();
    setData((data)=>{
      data[key].status = "approved"
      console.log(data[key].status);
      console.log(data[key].name);
      //  dispatchstatus({type:'approved', payload:"approved"})
      // {ngo.id==key ? ngo.status="approved" : console.log("In single delete row "+ngo.id);
      //   // dispatchstatus({type: 'STATUS', payload: name}); 
      // } 
      return data.filter( (ngoData)=> ngoData.id!==key );
    }); 
  }
    // setData( ()=>{
    //   // {ngo.id==key ? ngo.status="approved" : console.log("In single delete row "+ngo.id);
    //   //   // dispatchstatus({type: 'STATUS', payload: name}); 
    //   // } 
    //   return data.map( (ngoData)=>{ ngoData.id==key ? ngoData.status="approved" : console.log("In single delete row "+ngoData.id);
    //      }
    //   );
    // }); 

    

  const rejectRow = () => { 
    handleOk();
    setData((data)=>{
      data[key].status ="rejected"
      // dispatchstatus({type:'rejected', payload:"rejected"})
    // if(data.id==key){
    //   data.status="rejected"
    //   // dispatchstatus({type: 'STATUS', payload: name}); 
    //   console.log("In single delete row"+data.status);
    // }
    return data.filter((ngoData)=>
    ngoData.id!==key
    
    );
  }); 
}

  const handleCancel = () => {
    setIsModalVisible(false);
  };

   return(
        <>
        <div className={styles.mainContainer}>
        <Title className={styles.heading}>Pending Requests</Title>
        <Row className={styles.row}>
        <Col span={8} >
        <Title level={3} > Organization ID </Title> 
        </Col>
        <Col span={8}>
        <Title level={3}>  Organization NAME </Title> 
        </Col>
        <Col span={8}>
        <Title level={3}>   Actions </Title>
        </Col>
        </Row>
        {
        data.map((itm, i)=>{
        if(itm.status==statuss){
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
           <CustomButton label={itm.status} className={false} onClick={ statuss==="pending"? ()=>showModal(itm.id) : null} type="primary" disabled={false} shape="round" /> {' '} 
           {/* <CustomButton label={itm.status} className={false} onClick={() => showRejectModal(itm.id)} type="danger" disabled={false} shape="round" />      */}
           </Col>
        
           </Row>     
            </>
        ) 
        }    
        })}

<Modal  title="Confirmation" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}  footer={[
            <Button onClick={rejectRow} type="primary">
              Reject
            </Button>,
            <Button  onClick={singleDelete}  type="primary">
            Approve
          </Button>,
            ]}
            >
            <p>Are you sure to Approve This NGO</p>   
            </Modal>  
        
        </div>
        </>
    )
}
export default PendingRequest;