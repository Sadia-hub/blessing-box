import SuperAdmin from '../src/components/ui/support/SuperAdmin';
import QueriesTable from '../src/components/ui/support/QueriesTable';
import CustomLayout from '../src/components/layouts/customLayout';
const superadmin = () =>{
    return ( <CustomLayout>
    {/* <SuperAdmin/> */}
    <QueriesTable />
    </CustomLayout>
    );
}

export default superadmin;