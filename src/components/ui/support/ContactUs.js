import { Form, Input } from 'antd';
import { Typography } from 'antd';
import { useState } from 'react';
import {Modal} from 'antd';
import styles from '../../../../styles/Contact.module.css';
import { CustomButton } from '../buttons/buttons';
import { useSelector, useDispatch } from 'react-redux';
import apiCall from './apiCall';

const ContactUS = () => {

  const { Title } = Typography;  
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const[email, setEmail] =useState('');
  const[message, setMessage] =useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const[reply, setReply] =useState('');
  const dispatch = useDispatch();

  const { TextArea } = Input;

  const body ={
    email: email,
    message: message
  }
  
 
    const PostQuery = () => {
      apiCall('contact', JSON.stringify(body), "POST", null, null)
            .then((res)=>{
              console.log("res of contact is",res)
            })
            .catch((err)=>{
              console.log(err.message)
            })
    }
  
  return (
      <>
    <Title id="contact" className={styles.heading}>We would love to hear from you</Title>
    <Title level = {5} className={styles.heading}>Thank you for contacting Blessing Box. Someone from 
    our team member will reply to your query very soon</Title>

    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles.container}
    >

      <Form.Item
        label="Email"
        name="Email"
        rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
        wrapperCol={{ span: 10 }}
      >
        <Input onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Item>

      <Form.Item 
        label="Message"
        name="Message"
        rules={[{ required: true, message: 'Message is required!' }]}
        wrapperCol={{ span: 10 }}
      >
       <TextArea rows={6} onChange={(e)=>setMessage(e.target.value)}/>
        </Form.Item>

      <Form.Item wrapperCol={{ span: 12 }}>
      <CustomButton label="Submit" className={styles.regbutton} type="primary" onClick={PostQuery} disabled={false} shape=''></CustomButton>
       
      
      </Form.Item>
    </Form>

    {/* <Modal title="Update Password" visible={isModalVisible} onCancel={handleReturn} footer={[
          <CustomButton htmlType="submit" label="cancel" className={styles.okButton} type="primary" onClick={handleReturn}  disabled={false} shape='round'></CustomButton>  , 
          <CustomButton htmlType="submit" label="Update Password" className={styles.okButton} type="primary" onClick={UpdatePassword}  disabled={false} shape='round'></CustomButton>   
          
       ]} >
        <Form.Item
        label="Reply"
        rules={[{ required: true,  message: 'Please input your username!' }]}
        >
        <Input onChange={(e)=>setReply(e.target.value)} />
      </Form.Item>


      <p className={styles.text}>{response}</p>
     
      </Modal> */}
    </>
  );
};

export default ContactUS;