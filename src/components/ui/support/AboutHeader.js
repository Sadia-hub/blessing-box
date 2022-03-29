import styles from '../../../../styles/AboutHeader.module.css';
import { TextAnimation } from './TextAnimation';
import { Typography } from 'antd';
import Color from '../../../../styles/colors';

const AboutHeader = () => {
    const { Title } = Typography;
    return <>
    <div className={styles.mainContainer}>
    <Title className={styles.heading} style={{ color: Color.white}} > About US </Title> 
    <Title level = {2} className={styles.Paragraph} style={{ color: Color.white}}> The true value of one’s life can be <span style={{ color: Color.primaryV2}} >measured, </span>  <br /> if the person is able to make a   <span style={{ color: Color.primaryV2}} > significant </span>  difference in someone’s life.
    <br />
    -Jamie Smartkins 
     </Title> 
    <TextAnimation className={styles.text} />
    </div>
    </>
}

export default AboutHeader;