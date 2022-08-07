import { Form, Input, Modal} from 'antd';
import styles from '../../../../styles/Register.module.css';
import { CustomButton } from '../buttons/buttons';
import { Typography } from 'antd';
import apiCall from './apiCall';
import { useRouter } from 'next/router';
import React, {   useState } from 'react';
//redux
import { useSelector } from 'react-redux';

const Register = () => {  

  const islogin = useSelector((state)=> state.loginReducer);
  console.log("In register "+islogin);
  const[message, setMessage] = useState('');
  const[email, setEmail] = useState(true);
  const[name, setName] =useState('');
  const[address, setAddress] =useState('');
  const[password, setPassword] =useState('');
  const[contact, setContact] =useState('');
  const[designation, setDesignation] =useState('');
  const[type, setType] =useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const submission ={
    email: email,
    password: password,
    contact: contact,
    designation: designation,
    type: type,
    address:address,
    name: name
  }

  const router = useRouter();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    router.push('/');
    setIsModalVisible(false);
  };

    const { Title } = Typography;  

    const signup = () =>{
      apiCall('users',JSON.stringify(submission), "POST", null, null)
      .then((res)=> { 
      setMessage(res.msg)
      {res.msg?showModal(): ''} 
      })  
    }
   
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
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{marginTop: '10px'}}
      className = {styles.form}
    >
      <Title level = {2} className={styles.heading}>Sign up as Donor</Title>
        
      <Form.Item
        label="Name"
        name="Name"
        rules={[{ required: true, message: 'Please input your Name!' }]}
        wrapperCol={{ span: 12 }}

      >
        <Input onChange={(e)=>setName(e.target.value)} className={styles.inputField} />
      </Form.Item>
      <Form.Item
        label="Email"
        name="Email"
        rules={[{ required: true, type:'email', message: 'Please input your Email!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input onChange={(e)=>setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input.Password onChange={(e)=>setPassword(e.target.value)} className={styles.inputField}/>
      </Form.Item>

      <Form.Item
        label="Contact"
        name="Contact"
        rules={[{ required: true, message: 'Please input your Contact!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input onChange={(e)=>setContact(e.target.value)} className={styles.inputField}/>
      </Form.Item>

      <Form.Item
        label="Designation"
        name="Designation"
        rules={[{ required: true, message: 'Please input your Designation!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input onChange={(e)=>setDesignation(e.target.value)} className={styles.inputField}/>
      </Form.Item>

      <Form.Item
        label="Address"
        name="Address"
        rules={[{ required: true, message: 'Please input your Address!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input onChange={(e)=>setAddress(e.target.value)} className={styles.inputField}/>
      </Form.Item>

      <Form.Item
        label="Type"
        // name="Type"
        rules={[{ required: true, message: 'Please input your Address!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input onChange={(e)=>setType(e.target.value)} className={styles.inputField}/>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12 }}>
      <CustomButton htmlType="submit" label={"Register" }className={styles.regButton} type="primary" onClick={signup} disabled={false} shape='round'></CustomButton>     
      </Form.Item>
    </Form>
    </div>

        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} >
        <p>{message} </p>
       
      </Modal>
        </>
    );
}
export default Register;