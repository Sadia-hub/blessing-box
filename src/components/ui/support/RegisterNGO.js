import { Form, Input, Button, Checkbox,InputNumber,TextArea,Select, Typography,Divider } from 'antd';
import style from '../../../../styles/RegisterNgo.module.css';
import { CustomButton } from '../buttons/buttons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import FounderInfo from './FounderInfo';
import AuthorizationDoc from './AuthorizationDoc';
import Declaration from './Declaration';

const RegisterNGO = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  const { Title } = Typography;
  const router=useRouter();
  return (<>
  
    <Form
      name="basic"
      labelCol={{  span: 8 }}
      wrapperCol={{  span: 9 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={style.form}
    >
        <Title level={2} className={style.heading}>NGO Registration</Title>
    <Divider>NGO INFORMATION</Divider>
      {/* Enter NGO name */}
      <Form.Item
        label="Enter NGO Name"
        name="name"
        rules={[{ required: true, message: 'Please enter your NGO name!' }]}
      >
        <Input />
      </Form.Item>

       {/* Enter Service type */}
      <Form.Item name="service" valuePropName="checked" wrapperCol={{ offset: 2, span: 16 }}
         label="Service Type"
         rules={[{ required: true, message: 'Please select service!' }]}
      >
        <Checkbox>Education</Checkbox>
        <Checkbox>Orphange</Checkbox>
        <Checkbox>Food</Checkbox>
      </Form.Item>
     

        {/* Year of existance */}
      <Form.Item label="Enter Year Of Existance"
        rules={[{ required: true, message: 'Please Enter Year of Existance!' }]}
      >
        <InputNumber />
      </Form.Item>
      
      {/* NGO Email */}
      <Form.Item
        label="Enter NGO Email"
        name="email"
        rules={[{ required: true, type:'email', message: 'Please Enter NGO email' }]}
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
       {/* Phone Number */}
       <Form.Item
        label="Enter Contact Number"
        name="contact"
        rules={[{ required: true, message: 'Please Enter Contact Number!' }]}
      >
         <Input />
      </Form.Item>

       {/* Address of Main Branch */}
      <Form.Item
        label="Enter Adress Of Main Branch"
        name="address"
        rules={[{ required: true, message: 'Please Enter Address!' }]}
      >
         <Input.TextArea />
      </Form.Item>
     
         {/* Service Areas */}
         <Form.Item label="Service Areas">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>


       
      

<FounderInfo/>
<AuthorizationDoc/>
<Declaration/>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
  <CustomButton label="Register" className={style.nextButton} type="primary" onClick={false} disabled={false} shape="round"></CustomButton>
      </Form.Item>
    </Form>

    </>);
};
export default RegisterNGO;
