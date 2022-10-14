import {Row, Col, Slider, Typography, Progress,  InputNumber, Card, Button} from 'antd';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from '../../../../styles/ProjectCard.module.css';
import apiCall from './apiCall';
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
    const[data, setData] = useState(0);
    const [inputValue, setInputValue] = useState(300);

    const onChange = (newValue) => {
      setInputValue(newValue);
    };
    

  //Server Sent Events
    //useEffect(() => {
    //   const handleServerSentEvents = () => { 
    //   const fetchData = new EventSource(`http://localhost:8080/sse`) 
    //     fetchData.addEventListener('open', () => {
    //       console.log("Connection made ");
    //     });
  
    //     fetchData.addEventListener('message', (e) => {
    //       console.log(e.data);
    //       const data = JSON.parse(e.data);
    //       setData(data);
           
    //     });
  
    //     fetchData.addEventListener('error', (e) => {
    //       console.error('Error: ',  e);
    //     });
    //     return () => {
    //       fetchData.close();
    //     };
         
    // }  
    
    //[]);

// const body ={
//   donation: inputValue,
//   date  : '03-5-2022  ',
//   projectId: 1,
//   userId:1

// }   
//     const postDonation = () => {
//       apiCall('adddonation', JSON.stringify(body), "POST", null, null)
//       .then((res)=>{
//         console.log("res of contact is",res)
//       })
//       .catch((err)=>{
//         console.log(err.message)
//       })
//     }

const handleDonate = async() =>{
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
      // window.open(url)
      window.open(url )
      console.log(url)
    })
    .catch(e => {
      console.error(e.error)
    })
}

      console.log(data)
    return<div className={styles.main} style={{width:"700px", background:"rgba(42, 5, 143, 0.75)", color:"white"}}>
       

        <Row justify='center'>
          <Col span={8}>
            <Row justify='center'><Image src={pic} height={180} width={200} alt="project image"/></Row>
              
              <Row justify='center'> Target: {targetAmount} Rs</Row>
              <Progress 
                strokeColor="rgba(41,4,142,1)"
                percent={percent} 
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
                            trackStyle={{color:"pink"}}
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
        
    </div>
}

export default ProjectCard;