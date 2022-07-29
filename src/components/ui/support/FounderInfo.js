import { Form, Input, Button, Checkbox,InputNumber,TextArea,Select, Typography,Divider } from 'antd';
function FounderInfo({onChangeCnic, onChangeName, onChangeContact, onChangeEmail}){

 
    return(<>
        <Divider>FOUNDER INFORMATION</Divider>

        <Form.Item
        label="Enter Name"
        name="founderName"
        rules={[{ required: true, message: 'Please Enter Your Name!' }]}
      >
        <Input onChange={onChangeName}/>
      </Form.Item>

      <Form.Item
        label="Enter CNIC"
        name="founderCnic"
        rules={[{ required: true, message: 'Please Enter Your CNIC!' }]}
      >
        <Input onChange={onChangeCnic}/>
      </Form.Item>

      <Form.Item
        label="Enter Contact Number"
        name="founderContact"
        rules={[{ required: true, message: 'Please Enter Contact Number!' }]}
      >
         <Input onChange={onChangeContact}/>
      </Form.Item>

      <Form.Item
        label="Enter Email"
        name="founderEmail"
        rules={[{ required: true, type:'email', message: 'Please Enter NGO email' }]}
      >
        <Input onChange={onChangeEmail}/>
      </Form.Item>

    </>)
}
export default FounderInfo;