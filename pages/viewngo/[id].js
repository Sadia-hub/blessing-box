import { Form, Input, Button, Checkbox,InputNumber, Typography,Divider } from 'antd';
import style from '../../styles/viewNgo.module.css';
import { CustomButton } from '../../src/components/ui/buttons/buttons';
import apiCall from '../../src/components/ui/support/apiCall';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const NgoDetails = () => {
    const router=useRouter();
    const id = router.query.id;
    console.log("id is",id)
  const [ngoDetails, setNgoDetails] = useState({});
  
  useEffect(()=> {
  async function NgoDetails(){
    apiCall(`ngodetails/${id}`,null, "GET", null, null)
    .then((res)=>{
      console.log("In NGO Details"+res[0].name)
      setNgoDetails(res[0])
    })
    .catch((err)=>{
      console.log(err.message)
    })
  } 
  NgoDetails();
},[])
 
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  const { Title } = Typography;
 
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
        <Title level={2} className={style.heading}>View NGO Details</Title>
    <Divider>NGO INFORMATION</Divider>
      {/* Enter NGO name */}
      <Form.Item
        label="Enter NGO Name"
         rules={[{ required: true, message: 'Please enter your NGO name!' }]}
      >
        <Input value={ngoDetails.name}  />
      
      </Form.Item>
      {/* wrapperCol={{ offset: 2, span: 16 }} */}
       {/* Enter Service type */}
      <Form.Item name="service" valuePropName="checked" 
         label="Service Type"
         rules={[{ required: true, message: 'Please select service!' }]}
      >
       
          <Input value={ngoDetails.serviceType}  />
      </Form.Item>
     

        {/* Year of existance */}
      <Form.Item label="Enter Year Of Existance"
        rules={[{ required: true, message: 'Please Enter Year of Existance!' }]}
      >
        <InputNumber value={ngoDetails.year}  />
      </Form.Item>
      
      {/* NGO Email */}
      <Form.Item
        label="Enter NGO Email"
       
        rules={[{ required: true, type:'email', message: 'Please Enter NGO email' }]}
      >
        <Input value={ngoDetails.ngoEmail}  />
      </Form.Item>

       {/* Phone Number */}
       <Form.Item
        label="Enter Contact Number"
        rules={[{ required: true, message: 'Please Enter Contact Number!' }]}
      >
         <Input value={ngoDetails.contact}  />
      </Form.Item>

       {/* Address of Main Branch */}
      <Form.Item
        label="Enter Adress Of Main Branch"
        rules={[{ required: true, message: 'Please Enter Address!' }]}
      >
         <Input.TextArea value={ngoDetails.address}  />
      </Form.Item>
     
         {/* Service Areas */}
         <Form.Item label="Service Areas">
         <Input value={ngoDetails.serviceArea} />
      </Form.Item>
      
      <Divider>FOUNDER INFORMATION</Divider>

  <Form.Item
  label="Enter Name"
  rules={[{ required: true, message: 'Please Enter Your Name!' }]}
  >
  <Input value={ngoDetails.founderName}  />
  </Form.Item>

  <Form.Item
  label="Enter CNIC"
  rules={[{ required: true, message: 'Please Enter Your CNIC!' }]}
  >
    <Input value={ngoDetails.founderCNIC}  />
  </Form.Item>

<Form.Item
label="Enter Contact Number"
rules={[{ required: true, message: 'Please Enter Contact Number!' }]}
>
 <Input value={ngoDetails.founderContact} />
</Form.Item>

  <Form.Item
  label="Enter Email"
  rules={[{ required: true, type:'email', message: 'Please Enter NGO email' }]}
  >
  <Input value={ngoDetails.founderEmail}  />
  </Form.Item>
   
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
  <CustomButton label={  "Back" } className={style.nextButton} type="primary" onClick={()=>{router.push('/superadmin')}} disabled={false} shape="round"></CustomButton>
      </Form.Item>
      
    </Form>
    <div  style={{marginTop:60}}>
    <hr/>
    </div>

    </>);
};
export default NgoDetails;
