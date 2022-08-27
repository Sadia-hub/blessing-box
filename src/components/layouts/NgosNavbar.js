import 'antd/dist/antd.css';
import styles from '../../../styles/NgosNavbar.module.css';
import Link from "next/link";
import {Button} from 'antd'

function LeftMenu({ngoId=1}){
    return(<>
  
    <nav className={styles.navbar}>
      <ul className={styles.menulist}>
        <li>
        <Link href="/ngodetails">
          <a>Chippa NGO</a>
        </Link>
        </li>

        <li>
        <Link href="#about">
          <a>About Us</a>
        </Link>
        </li>

        <li>
        <Link href="#services">
          <a>Our Services</a>
        </Link>
        </li>

        <li>
        <Link href="#projects">
          <a>Our Projects</a>
        </Link>
        </li>

        <li>

          
        <Link href={`/expenditure/${ngoId}`}>

          <a>Expenditure Report</a>
        </Link>
        </li>
      </ul>
    
    </nav>
    
    </>)
}
export default LeftMenu;