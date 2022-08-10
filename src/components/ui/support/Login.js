import { Row, Col } from 'antd';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Form, Input } from 'antd';
import { Typography } from 'antd';
import styles from '../../../../styles/login.module.css';
import { CustomButton } from '../buttons/buttons';
import { getPendingNgo } from '../../../redux/ngo/Action'; 

//redux
import { useSelector, useDispatch } from 'react-redux';
import { isLogin,  setUserInfo } from '../../../redux/user/Action';
import {setContactInfo } from '../../../redux/contact/Action';

import apiCall from './apiCall';


const Login =() =>{
    const dispatch = useDispatch();
    const router = useRouter();
    const[email, setEmail] =useState();
    const[useremail, setUserEmail] =useState('');
    const[password, setPassword] =useState();
    const[data, setData] =useState();
//store pending ngos in redux
useEffect(()=>{
  apiCall('pendingngos',null, "GET", null, null)
        .then((res)=>{
          console.log(res.status)
        dispatch(getPendingNgo(res))
        })
        .catch((err)=>{
          console.log(err.message)
        })
},[])

useEffect(()=>{
  const GetQueries = () => {
    apiCall('contact',null, "GET", null, null)
          .then((res)=>{
            console.log("res of contact is",res)
            dispatch(setContactInfo(res))
          })
          .catch((err)=>{
            console.log(err.message)
          })
  }
  GetQueries()
 },[])


 
  
    const { Title } = Typography;
    
    

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
   

    //verify user
    
    const body={
      email: email,
      password: password
    }
    const verifyUser =() =>{ 
      apiCall('user',JSON.stringify(body), "POST", null, null)
          .then((res)=> { 
          console.log("res is ",res)
          setData(res) 
          if(res.user.email==email){
            
            localStorage.setItem("token", res.token);
            
          //dispatch state whether user is logged in or not
          dispatch(isLogin());
    
          //store user details into redux
          dispatch(setUserInfo(res.user));
    
          //if user type equals admin then admin page should b displayed else homepage
          {res.user.type=='admin'? router.push('/superadmin') :router.push('/')}
          
          }
         })
          .catch((err)=>{
            console.log(err.message)
          })
    

    }
    
    const onFinish = (values) => {  
      console.log('Success:', values);
      verifyUser()
      };
    return(
    <div className={styles.mainDiv}>
    <Row className={styles.form}>
        <Col xs={{span: 20, order: 1, offset: 4}} sm={{span: 20, order:1, offset: 4}} md={{span: 12, offset:3}} lg={{span: 6}} className={styles.col}>
        <Image
        width={300}
        height={300}
        src="/workingMan.png"
        className={styles.picture}
        />
        </Col>
        
        <Col xs={{span: 20, order: 2, offset: 2}} sm={{span: 20, order: 2, offset: 2}} md={{span: 20, order: 2, offset: 2}} lg={{span: 12}} className={styles.col}>
       
        <Title className={styles.heading}>Log In</Title>
       
       
        <Form name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        
      <Form.Item
       validateTrigger="onBlur"
        label="Email"
        name="email"
        rules={[{ required: true,  message: 'Please write your email!', type:'email' }]}
      >
        <Input  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Item>

      <Form.Item
       validateTrigger="onBlur"
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password  onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Item>

      <Form.Item >
      <CustomButton htmlType="submit" label="Sign in" className={styles.regButton} type="primary"  disabled={false} shape=''></CustomButton>     
      </Form.Item>
      <span >
      {data=='This email is not registered' || data=='Either Username or password is wrong' ? <p className={styles.center}>Either Username or Password is Wrong</p>: ''}
      </span>
       </Form>
        </Col>
    </Row>
    
    </div>
    )
}
export default Login;