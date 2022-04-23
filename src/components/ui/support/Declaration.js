import { Form, Input, Button, Checkbox,InputNumber,TextArea,Select, Typography,Divider } from 'antd';

function Declaration(){
    return(<>
     <Divider>Declaration --</Divider>
     <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 1 }}>
        <Checkbox>I, the above named applicant, do hereby solemnly, declare that the information provided in the above form is true and correct and nothing has been concealed or mis-stated. </Checkbox>
      </Form.Item>
    </>)
}
export default Declaration;