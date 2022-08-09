import { Layout } from 'antd';
const {  Content} = Layout;
import QueriesTable from '../src/components/ui/support/QueriesTable';
import CustomFooter from '../src/components/layouts/footer';
import SuperAdminNavbar from '../src/components/layouts/superAdminNavbar'; 
const queries = () =>{
    return ( 
        <Layout className="layout">
            
     <SuperAdminNavbar /> 

            <Content>

                <div className="site-layout-content"><QueriesTable /></div>
            </Content>

            <CustomFooter/>

        </Layout>
   
    );
}

export default queries;