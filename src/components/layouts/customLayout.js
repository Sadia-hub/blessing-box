import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
const {  Content} = Layout;
import CustomHeader from './customHeader';
import CustomFooter from './footer';

const CustomLayout = ({children}) =>{
    
    return <Layout className="layout" style={{color:"white"}}>
            
            <CustomHeader />

            <Content style={{paddingTop:"100px"}}>
             
                <div className="site-layout-content">{children}</div>
            </Content>

            <CustomFooter/>

        </Layout>
    
}

export default CustomLayout