import { Form, Input, Button, Checkbox,InputNumber,TextArea,Select, Typography,Divider } from 'antd';
import style from '../../../../styles/RegisterNgo.module.css';
import { CustomButton } from '../buttons/buttons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Modal} from 'antd';
import Link from 'next/link';
import FounderInfo from './FounderInfo';
import AuthorizationDoc from './AuthorizationDoc';
import Declaration from './Declaration';

const RegisterNGO = () => {
	 const [success, setSuccess] = useState(false);
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
   const [isModalVisible, setIsModalVisible] = useState(false);
  const router=useRouter();
  const showModal = (k) => {
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
   
  const { Title } = Typography;
 
  return (<>
  
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
        name="ngoName"
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
        name="ngoEmail"
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

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>


       {/* Phone Number */}
       <Form.Item
        label="Enter Contact Number"
        name="ngoContact"
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
	   <CustomButton htmlType="submit" label="Register" className={style.nextButton} type="primary" onClick={success==true? showModal: null} disabled={false} shape="round"></CustomButton>
      </Form.Item>
    </Form>

    </>);
};
export default RegisterNGO;
