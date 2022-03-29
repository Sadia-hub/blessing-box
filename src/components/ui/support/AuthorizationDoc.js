import { Form, Input, Button, Checkbox,InputNumber,TextArea,Select, Typography,Divider,Upload, } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

function AuthorizationDoc(){
    
      const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };
    return(<>

         <Divider>Authorization Document</Divider>
         <Form.Item
        name="upload"
        label="Upload Document"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        // extra="longgggggggggggggggggggggggggggggggggg"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
    </>)
}
export default AuthorizationDoc;