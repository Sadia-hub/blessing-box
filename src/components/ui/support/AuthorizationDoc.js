import { Divider } from 'antd';
function AuthorizationDoc({uploadImage}){
  
    
    return(<>

         <Divider>Authorization Document</Divider>  
          <input type="file" name="file"  onChange={uploadImage} style={{marginLeft: 30}}/>   
    </>)
}
export default AuthorizationDoc;