import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import styles from '../../../styles/Navbarr.module.css';
import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import Link from "next/link";
import { useRouter } from 'next/router'
import { CustomButton } from '../ui/buttons/buttons';
import { Avatar, Image } from 'antd';
import { Menu, Dropdown, message } from 'antd';

import { isLogout } from '../../redux/user/Action';
import { useSelector, useDispatch } from 'react-redux';

const NgoAdminHeader = () => {
  const myState = useSelector((state)=> state.loginReducer);

  
  const router=useRouter()
  const [active, setActive] = useState(false);
  const showMenu = () => { setActive(!active); }
 
  const dispatch = useDispatch();
  const state = useSelector((state)=> state.userReducer);
  const userType = state.type;
  const myName = state.name;

  const [navBarColor, setnavBarColor] = useState(false);


const onItemClick = ({ key }) => {
  
    console.log("clicked");
    if(key==2){

     {userType=="Donor"? router.push('/registerdonor') : router.push('/ngo-registration')}
     
    }
    if(key==3){
      router.push('/login');
      dispatch(isLogout());
    }
  };

   const logOut = () => {
    router.push('/login');
    dispatch(isLogout());
   } 

   const Profile = () => {
    {userType=="Donor"? router.push('/registerdonor') : router.push('/ngo-registration')}
   } 


  const signIn = (
    <Menu onClick={onItemClick}>
       <Menu.Item key="1">Signed in as <br /> {myName} </Menu.Item>
      <Menu.Item key="2"> Profile </Menu.Item>
      <Menu.Item key="3">Log-out</Menu.Item>
    </Menu>
  );

  const RenderMenu = () => {
    if(myState){
      return(  
        <>
    <li>
    <Dropdown overlay={signIn} className={styles.drop}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    <Avatar size="large" style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
    </a>
    </Dropdown>
    </li>

     <li className={styles.listdisplay}>
         <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <Avatar size="large" style={{ color: '#f56a00', backgroundColor: '#fde3cf', size: '60px' }}>U</Avatar> 
           <span className={styles.uname}> {myName} </span>  
          </a>
       </li>
            
              <li className={styles.listdisplay} onClick={Profile}>
              <Link href=''>
              <a>Profile</a>
              </Link>
             </li>
    
            <li className={styles.listdisplay} onClick={logOut} >
            <Link href=''>
             <a>Logout</a>
            </Link>
           </li>      
    </> 
      )
    }
else {
  return (
  <>
    <li >
    <Link href='/registerdonor'>
      <a>Signup</a>
    </Link>
  </li>
  <li>
    <Link href='/login'>
      <a>Login</a>
    </Link>
  </li>
  </>
  )
}
  }

  return (
<>
    <header className={navBarColor ? styles.header2 : styles.header}>
      <div className={styles.menuIcon}>
        <MenuOutlined onClick={showMenu} className={styles.menu} />
      </div>
      <nav className={active ? `${styles.slider} ${styles.active}` : styles.slider}>
        <ul>
          <div className={styles.closed}>
            <CloseOutlined onClick={showMenu} className={styles.close} />
          </div>
          <div className={styles.logo}>

            <Link href='/'>
              <a>Blessing Box</a>
            </Link>
          </div>
          <li className={styles.side} >
            <Link href='/admin/1'>
              <a >Home</a>
            </Link>
          </li>

          <li className="" >
            <Link href='/admin/projects'>
              <a >Projects</a>
            </Link>
          </li> 

          <li className="" >
            <Link href='/admin/proofs'>
              <a >Proofs</a>
            </Link>
          </li>

 
           
        <RenderMenu />
  </ul>
  </nav>
</header>


</>

    );
}

export default NgoAdminHeader;