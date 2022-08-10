import { Form, Input, Modal, Button, Row, Col} from 'antd';
import styles from '../../../../styles/Profile.module.css';
import { CustomButton } from '../buttons/buttons';
import { Typography } from 'antd';
import apiCall from './apiCall';
import { useRouter } from 'next/router';
import React, {   useState, useEffect } from 'react';
import { EditOutlined } from '@ant-design/icons';
//redux
import { useSelector } from 'react-redux';

const Profile = () => {  

  const islogin = useSelector((state)=> state.loginReducer);
  console.log("In register "+islogin);
  const[enable, setEnable] = useState(false);
  const[name, setName] =useState('');
  const[address, setAddress] =useState('');
  const[newpassword, setNewPassword] =useState('');
  const[oldPassword, setOldPassword] =useState('');
  const[contact, setContact] =useState('');
  const[email, setEmail] =useState('');
  const[designation, setDesignation] =useState('');
  const[response, setResponse] =useState('');
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfrimModal, setIsConfrimModal] = useState(false);
  const userDetail = useSelector((state)=> state.userReducer);
  console.log(userDetail)
 
  useEffect(()=>{
  setName(userDetail.name)
  setContact(userDetail.contact)
  setDesignation(userDetail.designation)
  setAddress(userDetail.address)
  setEmail(userDetail.email)
 },[])
  
 
  const body ={
  password: [oldPassword, newpassword ]
 }
 
 
 const data ={
  email:email,
  name:name,
  contact:contact,
  designation: designation,
  address: address
 }

     function UpdatePassword(){
      apiCall(`changepassword/${userDetail.id}`, JSON.stringify(body), "POST", null, null)
      .then((res)=>{
        console.log("Response is",res)
         setResponse(res)
        //  setIsModalVisible(false);
      })
      .catch((err)=>{
        console.log(err.message)
      })
      
    } 

    //updateDetails
    function UpdateDetails(){
      apiCall(`user/${userDetail.id}`, JSON.stringify(data), "PATCH", null, null)
      .then((res)=>{
        console.log("Response is",res)
      })
      .catch((err)=>{
        console.log(err.message)
      })
      router.push('/')
    } 
  
  const router = useRouter();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleReturn = () => {
    setIsModalVisible(false);
  };

  const showConfrimModal = () => {
    setIsConfrimModal(true);
  };


  const handleNo = () => {
    setIsConfrimModal(false);
  };

    const { Title } = Typography;  

    return (
    <>
    <div className={styles.mainContainer}>    
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      style={{marginTop: '10px'}}
      className = {styles.form}
    >
      <Title level = {2} className={styles.heading}>Profile  <span style={{marginLeft:655}}> <EditOutlined  onClick={()=>setEnable(true)}/></span> </Title>
        
      <Form.Item
        label="Name"   
        rules={[{ required: true, message: 'Please input your Name!' }]}
        wrapperCol={{ span: 12 }}
     >
        <Input onChange={(e)=>setName(e.target.value)} className={styles.inputField} value={name} disabled ={enable==true?false:true}/>
      </Form.Item>
      <Form.Item
        label="Email"
        rules={[{ required: true, type:'email', message: 'Please input your Email!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input onChange={(e)=>setEmail(e.target.value)}  value={email} disabled ={enable==true?false:true}/>
      </Form.Item>

      <Form.Item
        label="Contact"
        rules={[{ required: true, message: 'Please input your Contact!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input onChange={(e)=>setContact(e.target.value)} value={contact} className={styles.inputField} disabled ={enable==true?false:true}/>
      </Form.Item>

      <Form.Item
        label="Designation"
        rules={[{ required: true, message: 'Please input your Designation!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input onChange={(e)=>setDesignation(e.target.value)} value={designation} className={styles.inputField} disabled ={enable==true?false:true}/>
      </Form.Item>

      <Form.Item
        label="Address"
        rules={[{ required: true, message: 'Please input your Address!' }]}
        wrapperCol={{ span: 12 }}
      >
        <Input onChange={(e)=>setAddress(e.target.value)} value={address} className={styles.inputField}  disabled ={enable==true?false:true}/>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12 }}>  
      {enable==true? <CustomButton htmlType="submit" label={"Update" }className={styles.regButton} type="primary" onClick={showConfrimModal}  disabled={false} shape='round'></CustomButton> : '' }  
  
    <br />
    <br /> 
  
    {enable==true?  <CustomButton htmlType="submit" label={"Change Password" }className={styles.regButton} type="primary" onClick={showModal} disabled={false} shape='round'></CustomButton> : ''}  
     
      </Form.Item>
    </Form>
    </div>

        <Modal title="Update Password" visible={isModalVisible} onCancel={handleReturn} footer={[
          <CustomButton htmlType="submit" label="cancel" className={styles.okButton} type="primary" onClick={handleReturn}  disabled={false} shape='round'></CustomButton>  , 
          <CustomButton htmlType="submit" label="Update Password" className={styles.okButton} type="primary" onClick={UpdatePassword}  disabled={false} shape='round'></CustomButton>   
          
       ]} >
        <Form.Item
        label="Old Password"
        rules={[{ required: true,  message: 'Please input your username!' }]}
        >
        <Input onChange={(e)=>setOldPassword(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="New Password"   
        rules={[{ required: true,  message: 'Please input your username!' }]}
      >
        <Input onChange={(e)=>setNewPassword(e.target.value)}/>
      </Form.Item>

      <p className={styles.text}>{response}</p>
     
      </Modal>

      <Modal title="Update Settings" visible={isConfrimModal} onCancel={handleNo} footer={[
          <CustomButton htmlType="submit" label="Yes" className={styles.okButton} type="primary" onClick={UpdateDetails}  disabled={false} shape='round'></CustomButton>  , 
          <CustomButton htmlType="submit" label="No" className={styles.okButton} type="primary" onClick={handleNo}  disabled={false} shape='round'></CustomButton>   
          
       ]} >
        <p>Are you Sure, You want to update the profile</p>
        </Modal>
        </>
    );
}
export default Profile;