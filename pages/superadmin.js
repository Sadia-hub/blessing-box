import SuperAdmin from '../src/components/ui/support/SuperAdmin';
import { Layout, Menu } from 'antd';
const {  Content} = Layout;
import CustomFooter from '../src/components/layouts/footer';
import SuperAdminNavbar from '../src/components/layouts/SuperAdminNavbar'; 
const superadmin = () =>{
    return ( 
        <Layout className="layout">
            
     <SuperAdminNavbar /> 

            <Content>

                <div className="site-layout-content"><SuperAdmin /></div>
            </Content>

            <CustomFooter/>

        </Layout>
   
    );
}

export default superadmin;