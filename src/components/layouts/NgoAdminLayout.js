import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
const {  Content} = Layout;

import CustomFooter from './footer';
import NgoAdminHeader from './NgoAdminHeader';

const NgoAdminLayout = ({children}) =>{
    
    return <Layout className="layout">
            
            <NgoAdminHeader/>

            <Content>

                <div className="site-layout-content">{children}</div>
            </Content>

            <CustomFooter/>

        </Layout>
    
}

export default NgoAdminLayout