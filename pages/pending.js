import PendingRequest from '../src/components/ui/support/PendingRequest';
import CustomLayout from '../src/components/layouts/customLayout';
const Pending = () =>{
    return ( 
    <CustomLayout>
    <PendingRequest status='pending'/>
    </CustomLayout>
    );
}

export default Pending;