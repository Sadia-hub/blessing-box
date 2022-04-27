import { Layout } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import styles from '../../../styles/Navbarr.module.css';
import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import Link from "next/link";
import { useRouter } from 'next/router'
import {  Modal } from 'antd';
import { CustomButton } from '../ui/buttons/buttons';
import { Avatar, Image } from 'antd';
import { Menu, Dropdown, message } from 'antd';
import { isLogin, isLogout } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

const customHeader = () => {
  const myState = useSelector((state)=> state.loginReducer);
  console.log("In Header "+myState);
  const myName = useSelector((state)=> state.userNameReducer);
  console.log("In Header "+myName);
  const [active, setActive] = useState(false);
  const showMenu = () => { setActive(!active); }
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const userType = useSelector((state)=> state.userTypeReducer);
  const [navBarColor, setnavBarColor] = useState(false);
  useEffect(() => {
    const changeBackground = () => {


      if (window.scrollY >= 10) // I think here should be the width of screen.
      {
        setnavBarColor(true);
      }
      else {
        setnavBarColor(false);
      }
    };

    window.addEventListener('scroll', changeBackground)
  }, []);


  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter()

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleDonate = (e) => {
    e.preventDefault()
    router.push('/registerdonor');
    setIsModalVisible(false);
  }
  const handleNgo = (e) => {
    e.preventDefault()
    router.push('/ngo-registration');
    setIsModalVisible(false);
  }
  const handleCancel = () => {
    setIsModalVisible(false);
  }


  const changeBack = () => {
    return <div className={styles.navBack}>
    </div>
  }

  const onClick = ({ key }) => {
    // message.info(`Click on item ${key}`);
    console.log("clicked");
  };

  const onItemClick = ({ key }) => {
    // message.info(`Click on item ${key}`);
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

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1"><Link href="/categories/education"> Education </Link></Menu.Item>
      <Menu.Item key="2"><Link href="/categories/food">Food</Link></Menu.Item>
      <Menu.Item key="3"><Link href="/categories/orphanage">Orphanages</Link></Menu.Item>
    </Menu>
  );

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
    <li onClick={showModal}>
    <Link href=''>
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
            <Link href='/'>
              <a >Home</a>
            </Link>
          </li>

          <li className="" >
            <Link href='/about'>
              <a >About US</a>
            </Link>
          </li>

          <li>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                NGO Categories
              </a>
            </Dropdown>


  </li>
 
  <li>
    <Link href='/contactpage'>
      <a>Contact</a>
    </Link>
  </li>
  <RenderMenu />
  {/* <li onClick={showModal}>
    <Link href=''>
      <a>Signup</a>
    </Link>
  </li>
  <li>
    <Link href='/login'>
      <a>Login</a>
    </Link>
  </li> */}
  
  </ul>
  </nav>
</header>

<Modal title="Registration" visible={isModalVisible} onCancel={handleCancel}
        footer={[
          <CustomButton label="Donar" className={styles.btnModal} onClick={handleDonate} type="danger" disabled={false} shape="round" />,
          <CustomButton label="NGO" className={styles.btnModal} onClick={handleNgo} type="danger" disabled={false} shape="round" />,
          <CustomButton label="Close" className={styles.cancelBtn} onClick={handleCancel} type={false} disabled={false} shape="round" />
        ]}
      >
        <p>Registeration as Donor or NGO?</p>
      </Modal>
</>

    );
}

export default customHeader;