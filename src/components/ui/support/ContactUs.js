import { Form, Input, Button, Checkbox } from 'antd';
import { Typography } from 'antd';
import styles from '../../../../styles/Contact.module.css';
import { CustomButton } from '../buttons/buttons';
const ContactUS = () => {

  const { Title } = Typography;  
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <>
    <Title className={styles.heading}>We would love to hear from you</Title>
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
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
        wrapperCol={{ span: 10}}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
        wrapperCol={{ span: 10 }}
      >
        <Input />
      </Form.Item>

      <Form.Item 
        label="Message"
        name="Message"
        rules={[{ required: true, message: 'Message is required!' }]}
        wrapperCol={{ span: 10 }}
      >
        <Input className={styles.inputField} />
        </Form.Item>

      <Form.Item wrapperCol={{ span: 12 }}>
      <CustomButton label="Submit" className={styles.regbutton} type="primary" onClick={false} disabled={false} shape=''></CustomButton>
       
      
      </Form.Item>
    </Form>
    </>
  );
};

export default ContactUS;