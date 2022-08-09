import {Row, Col, Divider, Modal, Typography, Progress} from 'antd';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from '../../../../styles/ProjectCard.module.css';

// const cardData={title:'',url:'',desc:'',status:"active",percent:90,targetAmount:''}
const ProjectCard=({
// cardData,
status="active",
percent=0,
title="Project Title",
pic="/education.svg",
desc="",
targetAmount="9000"
})=>{
    useEffect(()=>{
        if(percent==100){
            setStatus("success");
        }
    },[]);

    const { Title } = Typography;
    // const [status, setStatus] = useState("active");
    // const [percent, setPercent] =useState(90);
    // const [target, setTarget] = useState(100000);
    // const [collected, setCollected] = useState(900000);
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState();
    const[close,setClose]=useState(false);
    
    const handleClose=()=>{
       setClose(true);
       setVisible(false);
    }

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText(desc);
        setConfirmLoading(true);
        setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
        }, 2000);
    };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

    return<div>

         {/* {cardData.map((data)=>{
             return(<> */}
        <div className={styles.main} onClick={showModal}>
        
        <Image src={pic} height={180} width={260} alt="project image"/>

        <Row justify='center' align='middle' >
            <Title level={5} style={{color:"rgba(235,33,136,1)"}}>{title}</Title>
        </Row>

        <Row justify='center' align='middle' gutter={10}>
           <Col span={8} >
               <div className={styles.amount}>
                    Target:<br/>{targetAmount} Rs
               </div>
                
           </Col>
           <Col span={16} >
                <Progress 
                strokeColor="rgba(41,4,142,1)"
                percent={percent} 
                status={status}/>
                
           </Col>
       </Row>   
       
       <Row justify="end" >
                <h4 className={styles.text}>Details</h4>
       </Row>
     
    </div>      
    <Modal
        title={title}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
      {/* </>)
})} */}
    </div>
}

export default ProjectCard;