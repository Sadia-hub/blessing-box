import { Form, Input, Modal} from 'antd';
import styles from '../../../../styles/SignUp.module.css';
import { CustomButton } from '../buttons/buttons';
import { Typography } from 'antd';
import apiCall from './apiCall';
import { useRouter } from 'next/router';
import React, {   useState } from 'react';
//redux
import { useSelector } from 'react-redux';

const SignUp = () => {  

  const islogin = useSelector((state)=> state.loginReducer);
  console.log("In register "+islogin);
 
  const[email, setEmail] = useState(true);
  const[name, setName] =useState();
  const[address, setAddress] =useState();
  const[password, setPassword] =useState();
  const[contact, setContact] =useState();
  const[designation, setDesignation] =useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const submission ={
    email: email,
    password: password,
    contact: contact,
    designation: designation,
    type: 'donor',
    address:address,
    name: name
  }

  const router = useRouter();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel =() =>{
    setIsModalVisible(false);
  }
  const handleOk = () => {
    router.push('/');
    setIsModalVisible(false);
  };

    const { Title } = Typography;  

    const signUp = () =>{
      apiCall('users',JSON.stringify(submission), "POST", null, null)
      .then((res)=> { 
      console.log(res)     
      }) 
    }
   
    const onFinish = (values) => {  
      values.type='donor'
      console.log('Success:', values);
      signUp();
      showModal() 
        
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo); 
      };
   
    return (
    <>
    <div className={styles.mainContainer}>    
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{marginTop: '10px'}}
      className = {styles.form}
    >
      <Title level = {2} className={styles.heading}>Sign up as Donor</Title>
        
      <Form.Item
        validateTrigger="onBlur"
        label="Name"
        name="Name"
        rules={[{ required: true, message: 'Please input your Name!' }]}
        wrapperCol={{ span: 12 }}

      >
        <Input onChange={(e)=>setName(e.target.value)} className={styles.inputField} />
      </Form.Item>
      <Form.Item
        validateTrigger="onBlur"
        label="Email"
        name="Email"
        rules={[{ required: true, type:'email', message: 'Please input your Email!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input onChange={(e)=>setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        validateTrigger="onBlur"
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input.Password onChange={(e)=>setPassword(e.target.value)} className={styles.inputField}/>
      </Form.Item>

      <Form.Item
        validateTrigger="onBlur"
        label="Contact"
        name="Contact"
        rules={[{ required: true, message: 'Please input your Contact!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input onChange={(e)=>setContact(e.target.value)} className={styles.inputField}/>
      </Form.Item>

      <Form.Item
        validateTrigger="onBlur"
        label="Designation"
        name="Designation"
        rules={[{ required: true, message: 'Please input your Designation!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input onChange={(e)=>setDesignation(e.target.value)} className={styles.inputField}/>
      </Form.Item>

      <Form.Item
        validateTrigger="onBlur"
        label="Address"
        name="Address"
        rules={[{ required: true, message: 'Please input your Address!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input onChange={(e)=>setAddress(e.target.value)} className={styles.inputField}/>
      </Form.Item>


      <Form.Item wrapperCol={{ span: 12 }}>
      <CustomButton htmlType="submit" label={"Register" }className={styles.regButton}  type="primary" disabled={false} shape='round'></CustomButton>     
      </Form.Item>
    </Form>
    </div>

        <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel} onOk={handleOk}  footer={[
          <CustomButton htmlType="submit" label="ok" className={styles.okButton} type="primary" onClick={handleOk}  disabled={false} shape='round'></CustomButton>  , 
        
          
       ]}>
        <p>Thank you for registration! Kindly check your email for confirmation of your account </p>
       
      </Modal>
        </>
    );
}
export default SignUp;