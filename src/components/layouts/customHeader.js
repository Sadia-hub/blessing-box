import { Layout } from 'antd';
import { MenuOutlined , CloseOutlined } from '@ant-design/icons';
import styles from '../../../styles/Navbarr.module.css';
import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import Link from "next/link";
import { Menu, Dropdown, message } from 'antd';

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

    const changeBack = () => {
      return <div className={styles.navBack}>
      </div>
    }
    
    const onClick = ({ key }) => {
      message.info(`Click on item ${key}`);
    };
    
    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key="1"> Education </Menu.Item>
        <Menu.Item key="2">Food</Menu.Item>
        <Menu.Item key="3">Medical</Menu.Item>
      </Menu>
    );
    
    return( 
    
    <header className={navBarColor ? styles.header2 : styles.header}>
    <div className={styles.menuIcon}>
    <MenuOutlined onClick={showMenu} className={styles.menu} />      
    </div>
    <nav className={active ? `${styles.slider} ${styles.active}`:styles.slider}>
  <ul >
  <div className={styles.closed}>
                    <CloseOutlined  onClick={showMenu} className={styles.close}/>
  </div>
  <div className={styles.logo}>

    <Link href='/'>
     <a>Blessing Box</a>
    </Link>
    </div>
  <li  className={styles.side} >
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
  <li>
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