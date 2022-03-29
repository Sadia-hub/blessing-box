import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import styles from '../../../../styles/Register.module.css';
import { CustomButton } from '../buttons/buttons';
import { Typography } from 'antd';
import { Card } from 'antd';
const Register = () => {  
    const { Title } = Typography;  
    const onFinish = (values) => {
        console.log('Success:', values);
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
        rules={[{ required: true, message: 'Please input your Email!' }]}
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


      <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
      <CustomButton label="Register" className={styles.regButton} type="primary" onClick={false} disabled={false} shape='round'></CustomButton>
         
      </Form.Item>
    </Form>
 
  
        </div>
        </>
    );
}
export default Register;