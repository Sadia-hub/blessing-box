import { Layout } from 'antd';
import { MenuOutlined , CloseOutlined } from '@ant-design/icons';
import styles from '../../../styles/Navbarr.module.css';
import React, { useState, useEffect, useContext } from 'react';
import 'antd/dist/antd.css';
import Link from "next/link";
import { Menu, Dropdown, message } from 'antd';
import { Avatar, Image } from 'antd';
import { UserContext, UserName } from './customLayout';

const customHeader  = ()=>{
 
  const [active, setActive] = useState(false);
  const showMenu =()=>{setActive(!active);}
  const [click, setClick] = useState(false);
  
  
    const[navBarColor, setnavBarColor] = useState(false);
   
    
    useEffect(() =>  {
        const changeBackground = () => {
           
          if(window.scrollY >= 10) // I think here should be the width of screen.
            {
               setnavBarColor(true);
            }
            else {
                setnavBarColor(false);
            }
        };
       
         window.addEventListener('scroll', changeBackground)    
    }, [] );


    // const onItemClick = ({ key }) => {
    //   message.info(`Click on item ${key}`);
    // };
  
    const onClick = ({ key }) => {
      // message.info(`Click on item ${key}`);
      console.log("clicked");
    };
    
    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key="1"> <Link href='/registerdonor'>
         <a>Education</a>
        </Link>  </Menu.Item>
        
        
        <Menu.Item key="2"> <Link href='/registerdonor'>
         <a>Food</a>
        </Link>  </Menu.Item>
        <Menu.Item key="3"> <Link href='/registerdonor'>
         <a>Medical</a>
        </Link>  </Menu.Item>
      </Menu>
    );
   
//     const RenderMenu = () => {
//       if(state ){
//         return(
//           <> 
//           <li>  
//       <Dropdown overlay={signIn}  className={styles.drop} >
//       <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
//       <Avatar size="large" style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>    
//       </a>
//     </Dropdown>
//     </li> 
//         <li  className={styles.listdisplay}>
//         <Avatar size="large" style={{ color: '#f56a00', backgroundColor: '#fde3cf', size: '50px' }}>U</Avatar> 
//        <span className={styles.uname}> {name} </span>  
//         </li>
        
//          <li className={styles.listdisplay} >
//          <Link href='/registerdonor'>
//          <a>Profile</a>
//          </Link>
//         </li>

//         <li className={styles.listdisplay} >
//           <Link href='/logout'>
//           <a>Logout</a>
//          </Link>
//           </li>      
// </>
//         )
//       }         
//   else {
//     return (
//       <li className={styles.sliderUlLi}>
//     <Link href='/registerdonor'>
//       <a>Register</a>
//     </Link>
//     </li>
//     )
//   }}
    
    return(  
    <header className={navBarColor ? styles.header2 : styles.header}>
    <div className={styles.menuIcon}>
    <MenuOutlined onClick={showMenu} className={styles.menu} />      
    </div>
    <nav className={active ? `${styles.slider} ${styles.active}`:styles.slider}>
    <ul className={styles.sliderUl}>
    <div className={styles.closed}>
                    <CloseOutlined  onClick={showMenu} className={styles.close}/>
    </div>
    <div className={styles.logo}>
    <Link href='/'>
     <a>Blessing Box</a>
    </Link>
    </div>
  <li  className={styles.side} >
    <Link href='/'>
   <a >Home</a>  
    </Link>
  </li>

  <li className={styles.sliderUlLi}>
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      NGO Categories 
    </a>
  </Dropdown>

  </li>
 
  <li className={styles.sliderUlLi}>
    <Link href='/contactpage'>
      <a>Contact</a>
    </Link>
  </li>
  <li className={styles.sliderUlLi}>
    <Link href='/about'>
      <a>About Us</a>
    </Link>
  </li>
  <li className={styles.sliderUlLi}>
    <Link href='/registerdonor'>
      <a>Register</a>
    </Link>
    </li>
  </ul>
  </nav>
</header>
    );
}

export default customHeader ;