import { Divider, Input, Form } from 'antd';

function AuthorizationDoc({uploadImage}){
  
    
    return(<>

         <Divider>Authorization Document</Divider>  
         {/* <Form.Item
            validateTrigger="onBlur"
            name="Doc"
            // style={{textAlign: 'center'}}
            rules={[{ required: true, message: 'Please select a file!' }]}
        > */}
          <input type="file" name="file"   onChange={uploadImage} /> 
        
        {/* </Form.Item>   */}
    </>)
}
export default AuthorizationDoc;