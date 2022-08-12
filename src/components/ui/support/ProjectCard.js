import {Row, Col, Slider, Typography, Progress,  InputNumber, Card, Button} from 'antd';
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
projectId=1,
account_id="acct_1LRtpvBT2aR8PHTn",

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
    const [inputValue, setInputValue] = useState(300);

    const onChange = (newValue) => {
      setInputValue(newValue);
    };
    
    const handleDonate = () =>{
        fetch("http://localhost:8080/create-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            account_id, 
            donation:inputValue, 
            projectId
          }),
        })
          .then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
          })
          .then(({ url }) => {
            console.log(account_id)
            const ody=JSON.stringify({
              account_id, 
              donation:inputValue, 
              projectId
            }
            )
            console.log("ody", ody)
            window.open(url)
          })
          .catch(e => {
            console.error(e.error)
          })
      }

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

  

    return<div className={styles.main}>
       

        <Row justify='center'>
          <Col span={8}>
            <Row justify='center'><Image src={pic} height={180} width={260} alt="project image"/></Row>
              
              <Row justify='center'> Target: {targetAmount} Rs</Row>
              <Progress 
                strokeColor="rgba(41,4,142,1)"
                percent={100} 
                status={status}/>
               
          </Col>
          <Col span={14} align="middle" >
                      <Row justify='center'>
                          <Card
                            title={title}
                            extra={<Button onClick={()=>handleDonate()} danger shape="round">Donate</Button>}
                            style={{
                              width: "95%",
                              height:"280px",
                              borderRadius:20

                            }}
                          >
                            <p>{desc}</p>
                            
                            <Row justify='center'>
                        <Col span={12}>
                          <Slider
                            min={300}
                            max={targetAmount}
                            onChange={onChange}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                            trackStyle={{color:"blue"}}
                          />
                        </Col>
                        <Col span={4}>
                          <InputNumber
                            min={300}
                            max={targetAmount}
                            style={{
                              margin: '0 16px',
                            }}
                            value={inputValue}
                            onChange={onChange}
                          />
                        </Col>
                        
                      </Row>
                </Card>
            </Row>
           
          
            
          </Col>
        </Row>
         {/* {cardData.map((data)=>{
             return(<> */}
        {/* <div  >
        <Row justify='center' align='middle' >
            <Title level={5} style={{color:"rgba(235,33,136,1)"}}>{title}</Title>
        </Row>

       

        

        <Row justify='center' align='middle' gutter={10}>
           <Col span={8} >
           <Image src={pic} height={180} width={260} alt="project image"/>
               <div className={styles.amount}>

                    Target:<br/>{targetAmount} Rs
                    <Progress 
                strokeColor="rgba(41,4,142,1)"
                percent={100} 
                status={status}/>
               </div>
               
                
                
           </Col>
           <Col span={16} >
                
           </Col>
       </Row>   
       
       <Row justify="end" >


                <button onClick={()=>handleDonate()}>Donate</button>

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
      </>)
})} */}
    </div>
}

export default ProjectCard;