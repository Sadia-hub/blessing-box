import styles from '../styles/About.module.css';
import AboutHeader from '../src/components/ui/support/AboutHeader';
import Who from '../src/components/ui/support/Who';
import OurMission from '../src/components/ui/support/OurMission';
import WhyUs from '../src/components/ui/support/WhyUs';
import CustomLayout from '../src/components/layouts/customLayout';
const AboutUs = () => {

    return<CustomLayout>
    <div className={styles.backGround}>       
    
        <AboutHeader/>
        <Who/>
        <OurMission />
        <WhyUs />
        </div>
  </CustomLayout>
 
}

export default AboutUs;