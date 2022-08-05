import styles from '../../../../styles/About.module.css';
import AboutHeader from './AboutHeader';
import Who from './Who';
import OurMission from './OurMission';
import WhyUs from './WhyUs';

const AboutUs = () => {

    return <div className={styles.backGround}>
    
    
    <AboutHeader/>
    <Who/>
    <OurMission />
    <WhyUs />
    </div>
}

export default AboutUs;