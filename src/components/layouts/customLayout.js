import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
const {  Content} = Layout;
import CustomHeader from './customHeader';
import CustomFooter from './footer';
import {initialState, reducer} from "../../reducers/useReducers";
import {initialStatename, reducername} from "../../reducers/nameReducer";
import React, { useState, useEffect, useReducer, createContext } from 'react';
const UserContext = createContext();
export { UserContext };
export const UserName = createContext();
const CustomLayout = ({children}) =>{

    const [name, dispatchname] = useReducer(reducername, initialStatename);
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Layout className="layout">
            <UserContext.Provider value ={{state, dispatch}}>
            <UserName.Provider value ={{ name, dispatchname}}>    
            <CustomHeader />
            <Content>  

                <div className="site-layout-content">{children}</div>
            </Content>
            <CustomFooter/>
            </UserName.Provider>
            </UserContext.Provider>
        </Layout>
    
}

export default CustomLayout