import MainAdmin from '../src/components/ui/support/MainAdmin';
import CustomLayout from '../src/components/layouts/customLayout';
// import { statusreducer, initialStatus } from '../src/reducers/statusReducer';
// import { createContext, useReducer } from 'react';
// import { StatusContext } from '../src/components/ui/support/Context';
import CallAdmin from '../src/components/ui/support/CallAdmin';
const Admin = () =>{ 
    // const [status, dispatch] = useReducer(statusreducer, initialStatus);
    return ( 
    <>
    <CustomLayout>   
            <CallAdmin/>  
    </CustomLayout> 
    </>
    );
}

export default Admin;