import { Form, Input } from 'antd';
import { Typography } from 'antd';
import { useState } from 'react';
import {Modal} from 'antd';
import styles from '../../../../styles/Contact.module.css';
import { CustomButton } from '../buttons/buttons';
import apiCall from './apiCall';

const ContactUS = () => {

  const { Title } = Typography;  

  const[email, setEmail] =useState();
  const[message, setMessage] =useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { TextArea } = Input;

  const body ={
    email: email,
    message: message
  }
  
  //handle Return
  const handleReturn = () => {
    setIsModalVisible(false);
  };
 //show Modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

    const PostQuery = () => {
      apiCall('contact', JSON.stringify(body), "POST", null, null)
            .then((res)=>{
              console.log("res of contact is",res)
            })
            .catch((err)=>{
              console.log(err.message)
            })
    }

    const onFinish = (values) => {
      console.log('Success:', values);
      PostQuery();
      showModal();

    };
  
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
      validateTrigger="onBlur"
        label="Email"
       name="Email"
        rules={[{ required: true, message: 'Please input your email!', type:'email' }]}
        wrapperCol={{ span: 10 }}
      >
        <Input onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Item>

      <Form.Item 
        validateTrigger="onBlur"
        label="Message"
        name="Message"
        rules={[{ required: true, message: 'Message is required!' }]}
        wrapperCol={{ span: 10 }}
      >
       <TextArea rows={6} onChange={(e)=>setMessage(e.target.value)}/>
        </Form.Item>

      <Form.Item wrapperCol={{ span: 12 }}>
      <CustomButton label="Submit" className={styles.regbutton} htmlType="submit"  disabled={false} shape=''></CustomButton> 
      </Form.Item>

    </Form>

    <Modal title="" visible={isModalVisible} onCancel={handleReturn} footer={[
          <CustomButton htmlType="submit" label="Ok" className={styles.okButton} type="primary" onClick={handleReturn}  disabled={false} shape='round'></CustomButton>  ,        
       ]} >
       

      <p className={''}>Thank you For contacting Blessing box. Very soon our Admin will response to your query</p>
     
      </Modal>
    </>
  );
};

export default ContactUS;