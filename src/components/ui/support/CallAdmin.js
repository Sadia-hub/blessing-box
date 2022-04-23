import MainAdmin from './MainAdmin';
import { statusreducer, initialStatus } from '../../../reducers/statusReducer';
import { createContext, useReducer } from 'react';
import { StatusContext } from './Context';
const CallAdmin = () =>{ 
    // const[status, dispatchstatus] = useReducer(statusreducer, initialStatus);
    return ( 
    <>
    {/* <StatusContext.Provider value ={{status, dispatchstatus}} >  */}
            <MainAdmin/>  
    {/* </StatusContext.Provider>    */}
   
    </>
    );
}

export default CallAdmin;