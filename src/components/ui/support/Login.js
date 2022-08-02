import { Row, Col } from 'antd';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Form, Input } from 'antd';
import { Typography } from 'antd';
import styles from '../../../../styles/login.module.css';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { isLogin, IS_LOGOUT, setUserInfo } from '../../../redux/user/Action';


import { CustomButton } from '../buttons/buttons';
import apiCall from './apiCall';



const Login =() =>{
    const dispatch = useDispatch();
    const router = useRouter();

  //if set to false will display errors 
   const[valid,setValid]=useState(true);
  
    const { Title } = Typography;
    
    const onFinish = (values) => {  
          apiCall('user',JSON.stringify(values), "POST", null, null)
          .then((res)=> { 

          if(res.user.email==values.email){

            //set token into local storage
            localStorage.setItem("token", res.token);

            //dispatch state whether user is loggeg in or not
            dispatch(isLogin());

            //store user details into redux
            dispatch(setUserInfo(res.user));

            //if user type equals admin then admin page should b displayed else homepage
            res.user.type=='admin'? router.push('/superadmin') :router.push('/') 

          }
          else{    

            setValid(false);
          } 
         })
          .catch((err)=>{
            console.log(err.message)
          })
        
    
      };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
        label="Email"
        name="email"
        rules={[{ required: true,  message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item >
      <CustomButton htmlType="submit" label="Sign in" className={styles.regButton} type="primary" disabled={false} shape=''></CustomButton>     
      </Form.Item>
      <span >
      {valid==false? <p className={styles.center}>This user is not registered</p>: ''}
      </span>
       </Form>
        </Col>
    </Row>
    
    </div>
    )
}
export default Login;