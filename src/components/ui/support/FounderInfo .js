import { Form, Input, Button, Checkbox,InputNumber,TextArea,Select, Typography,Divider } from 'antd';
function FounderInfo(){

    return(<>
        <Divider>FOUNDER INFORMATION</Divider>

        <Form.Item
        label="Enter Name"
        name="founderName"
        rules={[{ required: true, message: 'Please Enter Your Name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Enter CNIC"
        name="founderCnic"
        rules={[{ required: true, message: 'Please Enter Your CNIC!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Enter Contact Number"
        name="founderContact"
        rules={[{ required: true, message: 'Please Enter Contact Number!' }]}
      >
         <Input />
      </Form.Item>

      <Form.Item
        label="Enter NGO Email"
        name="founderEmail"
        rules={[{ required: true, type:'email', message: 'Please Enter NGO email' }]}
      >
        <Input />
      </Form.Item>

    </>)
}
export default FounderInfo;