import { userContext } from '../../layouts/customHeader';
import CustomLayout from '../../layouts/customLayout';
import React, { useContext } from 'react';
const Logout = () => {
    const {state, dispatch} = useContext(userContext);
   dispatch({type: "USER", payload:false})
   return <>
    {/* <CustomLayout /> */}
    {/* <h1>Logout</h1> */}
   
    </>
}

export default Logout;