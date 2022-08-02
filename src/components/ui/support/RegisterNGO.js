import { Form, Input, Button, Checkbox,InputNumber,TextArea,Select, Typography,Divider } from 'antd';
import style from '../../../../styles/RegisterNgo.module.css';
import { CustomButton } from '../buttons/buttons';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FounderInfo from './FounderInfo';
import { Radio } from 'antd';
import AuthorizationDoc from './AuthorizationDoc';
import Declaration from './Declaration';
import Dropdown from './Dropdown';

const RegisterNGO = ({ handleRegister}) => {
  const [service, setService] = useState('');
  const [serviceArea, setServicearea] = useState([]);
  const [serviceAreas, setServiceareas] = useState('');
  const[ngoEmail, setNgoemail] =useState('');
  const[ngoName, setNgoname] =useState('');
  const[year, setYear] =useState(''); 
  const[contact, setContact] =useState('');
  const[f_contact, setFcontact] =useState('');
  const[f_email, setFemail] =useState('');
  const[f_cnic, setFcnic] =useState('');
  const[f_name, setFname] =useState('');
  const[address, setAddress] =useState('');

  const state = useSelector((state)=> state.userReducer);

  const submission ={  
    ngoEmail: ngoEmail,
    name: ngoName,
    logo: 'logo',
    year: year,
    contact: contact,
    address: address,
    founderName: f_name,
    founderCNIC: f_cnic,
    founderContact: f_contact,
    serviceType: service,
    serviceArea: serviceArea,
    certificate:'Microsoft',
    userId: `${state.id}`,
  }
  //console.log(localStorage.getItem(state.id));
    async function postNgo()  {
      try{
      await fetch('http://localhost:8080/ngo', {
      method: "POST",  
      headers: {
          'Content-Type': 'application/json',
          //'Authorization': `Bearer ${token}`,
        },
        body:JSON.stringify(submission),
      }).then(res=> res.json()).then((data)=> { 
        console.log("data is posted")
        });
      }
      catch(err){
        console.log(err);
      }
    }
 

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setService(e.target.value);
  };

  const handleCnic = (e) =>{
    setFcnic(e.target.value)
  }

  const handleFoundername = (e) =>{
    setFname(e.target.value)
  }

  const handleFoundercontact = (e) =>{
    setFcontact(e.target.value)
  }

  const handleFounderemail = (e) =>{
    setFemail(e.target.value)  
  }
  
  var data = ' ';
  const handleServiceareas = (value) => {
    data = data + ' ' +value;
    setServicearea(data);
  };

 
  const handleYear = (value) => {
    setYear(value)
  }

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
        name="ngoName"
        rules={[{ required: true, message: 'Please enter your NGO name!' }]}
      >
        <Input onChange={(e)=>setNgoname(e.target.value)}/>
      
      </Form.Item>

       {/* Enter Service type */}
      <Form.Item name="service" valuePropName="checked" wrapperCol={{ offset: 2, span: 16 }}
         label="Service Type"
         rules={[{ required: true, message: 'Please select service!' }]}
      >
        <Radio.Group onChange={onChange} value={service}>
        <Radio value="education">Education</Radio>
        <Radio value="orphange">Orphange</Radio>
        <Radio value="food">Food</Radio>
        </Radio.Group>
      </Form.Item>
     

        {/* Year of existance */}
      <Form.Item label="Enter Year Of Existance"
        rules={[{ required: true, message: 'Please Enter Year of Existance!' }]}
      >
        <InputNumber onChange={handleYear}/>
      </Form.Item>
      
      {/* NGO Email */}
      <Form.Item
        label="Enter NGO Email"
        name="ngoEmail"
        rules={[{ required: true, type:'email', message: 'Please Enter NGO email' }]}
      >
        <Input onChange={(e)=>setNgoemail(e.target.value)}/>
      </Form.Item>

       {/* Phone Number */}
       <Form.Item
        label="Enter Contact Number"
        name="ngoContact"
        rules={[{ required: true, message: 'Please Enter Contact Number!' }]}
      >
         <Input onChange={(e)=>setContact(e.target.value)}/>
      </Form.Item>

       {/* Address of Main Branch */}
      <Form.Item
        label="Enter Adress Of Main Branch"
        name="address"
        rules={[{ required: true, message: 'Please Enter Address!' }]}
      >
         <Input.TextArea onChange={(e)=>setAddress(e.target.value)}/>
      </Form.Item>
     
         {/* Service Areas */}
         <Form.Item label="Service Areas">
        <Dropdown onChange={handleServiceareas} />
      </Form.Item>
      
<FounderInfo onChangeCnic= {handleCnic } onChangeName={handleFoundername} onChangeEmail = {handleFounderemail} onChangeContact = {handleFoundercontact}/>
<AuthorizationDoc/>
<Declaration/>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
  <CustomButton label={  "Register" } className={style.nextButton} type="primary" onClick={postNgo} disabled={false} shape="round"></CustomButton>
      </Form.Item>
    </Form>

    </>);
};
export default RegisterNGO;
