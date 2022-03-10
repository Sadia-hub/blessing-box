import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
const {  Content, Footer } = Layout;
import CustomHeader from './customHeader';
import CustomFooter from './footer';

const CustomLayout = ({children}) =>{
    
    return <Layout className="layout">
            
            <CustomHeader />

            <Content style={{ padding: '0 50px' }}>
             
                <div className="site-layout-content">{children}</div>
            </Content>

            <CustomFooter/>

        </Layout>
    
}

export default CustomLayout