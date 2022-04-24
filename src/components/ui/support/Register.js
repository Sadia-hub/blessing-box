import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import styles from '../../../../styles/Register.module.css';
import { CustomButton } from '../buttons/buttons';
import { Typography } from 'antd';
import { Card } from 'antd';
import {useState} from "react";
import { useRouter } from 'next/router'
import { Modal } from 'antd';
const Register = () => {  
    const { Title } = Typography; 
    const router = useRouter(); 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const[success, setSuccess] = useState(false);
    const[name, setName] =useState('');
    const showModal = () => {
      setIsModalVisible(true);     
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const onHandleok = (e) => {
      e.preventDefault()
      router.push('/');
      setIsModalVisible(false);
    }

    // const onClick= () => {
    //   console.log('Success:');
    //   alert('success');
    // }
   
    const onFinish = (values) => {
        console.log('Success:', values);
        setSuccess(true);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setSuccess(false);
      };

    return (
        <>
    <Modal  title="Confirmation" visible={isModalVisible}  onCancel={handleCancel}  footer={[
            <Button onClick={handleCancel} type="primary">
             Cancel
            </Button>,
            <Button onClick={onHandleok}  type="primary">
            Ok
            </Button>,
            ]}
            >
            <p>Kindly, Check Your Email for confirmation</p>   
            </Modal> 

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
      <Title level = {2} className={styles.heading}>Donor Registeration</Title>
        
      <Form.Item
        label="Name"
        name="Name"
        rules={[{ required: true, message: 'Please input your Name!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input className={styles.inputField}/>
      </Form.Item>
      <Form.Item
        label="Email"
        name="Email"
        rules={[{ required: true, message: 'Please input your Email!', type: 'email' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input.Password className={styles.inputField}/>
      </Form.Item>

      <Form.Item
        label="Contact"
        name="Contact"
        rules={[{ required: true, message: 'Please input your Contact!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input className={styles.inputField}/>
      </Form.Item>

      <Form.Item
        label="Designation"
        name="Designation"
        rules={[{ required: true, message: 'Please input your Designation!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input className={styles.inputField}/>
      </Form.Item>

      <Form.Item
        label="Address"
        name="Address"
        rules={[{ required: true, message: 'Please input your Address!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input className={styles.inputField}/>
      </Form.Item>


      <Form.Item wrapperCol={{  span: 12 }}>
      <CustomButton htmlType="submit" label="Register" className={styles.regButton} type="primary" onClick={success==true? showModal: null} disabled={false} shape='round'></CustomButton>
         
      </Form.Item>
    </Form>
 
  
        </div>
        </>
    );
}
export default Register;