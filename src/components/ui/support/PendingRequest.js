import { Typography } from 'antd';
import { Row, Col } from 'antd';
import styles from '../../../../styles/PendingRequest.module.css';
import { CustomButton } from '../buttons/buttons';
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { approved, rejected } from '../../../actions';
const{Title}=Typography;

const PendingRequest = ({status="pending"}) => {
const dispatch = useDispatch();
const myState = useSelector((state)=> state.statusReducer);
 console.log("In state "+myState);
 const[val, setVal] =useState(myState);
const list = [{id: 1, name: "Faiz Foundation", status: myState, ActionA: "Approve", ActionR: "Reject"},
{id: 2, name: "Biryani Foundation", status: myState, ActionA: "Approve", ActionR: "Reject"},
{id: 3, name: "Student Foundation", status: myState, ActionA: "Approve", ActionR: "Reject"}]

 const [data, setData] = useState(list);
 const [isModalVisible, setIsModalVisible] = useState(false);
 const [isRejectModalVisible, setIsRejectModalVisible] = useState(false);
 const [key,setKey] = useState(0);
//    list[0].id = 2;
//  console.log(list[0].id);
  const showModal = (k) => {
    setIsModalVisible(true);
    setKey(k);
  };

  const showRejectModal = (k) => {
    setIsRejectModalVisible(true);
    setKey(k);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleRejectOk = () => {
    setIsRejectModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleRejectCancel = () => {
    setIsRejectModalVisible(false);
  };

  const singleDelete = () => { 
    handleOk();
    dispatch(approved())
    
    setData((data)=>{  
      // data.forEach((d)=>{d.id==key?d.status==myState:null})
      //  data[key].status = myState;
      // list[key].status = myState;
      setVal(()=>myState);
      console.log("In value "+val);
      console.log("In list "+data[key].status);
      return data.filter( (ngoData)=> ngoData.id!==key );
    }); 
  }
    

  const rejectRow = () => { 
    handleRejectOk();
    dispatch(rejected())
    setData((data)=>{
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


   return(
        <>
        <div className={styles.mainContainer}>
        <Title className={styles.heading}>Requests</Title>
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
        if(itm.status===status){
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
           <CustomButton label="Approve" className={false} onClick={()=>showModal(itm.id)} type="primary" disabled={false} shape="round" /> {' '} 
           <CustomButton label="Reject" className={false} onClick={() => showRejectModal(itm.id)} type="danger" disabled={false} shape="round" />     
           </Col>
        
           </Row>     
            </>
        ) 
        }    
        })}

<Modal  title="Confirmation" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}  footer={[
            <Button onClick={handleOk} type="primary">
             No
            </Button>,
            //onClick={() => {dispatch(approved())}}
            <Button onClick={singleDelete}   type="primary">
            Yes
          </Button>,
            ]}
            >
            <p>Are you sure to Approve This NGO</p>   
            </Modal> 


            <Modal  title="Confirmation" visible={isRejectModalVisible} onOk={handleRejectOk} onCancel={handleRejectCancel}  footer={[
            <Button onClick={handleRejectOk} type="primary">
             No
            </Button>,
            //onClick={() => {dispatch(approved())}}
            <Button onClick={rejectRow}   type="primary">
            Yes
          </Button>,
            ]}
            >
            <p>Are you sure to Reject This NGO</p>   
            </Modal>  
        
        </div>
        </>
    )
}
export default PendingRequest;