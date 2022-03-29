import { Carousel} from 'antd';
import Image from 'next/image';
import styles from '../../../../styles/Carousel.module.css';
import { CustomButton } from '../buttons/buttons';
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const CustomCarousel = () => {
  const { Title } = Typography;  
  return (
    <>
      <Carousel autoplay={true}>
        <div className={styles.container} style = {{background: '#2f4e71'}}>
          <Row >
            <Col span={12}>
              <Row >
             
              <Title className={styles.heading}>Indvidually We are Drop, But Together We are an Ocean </Title>
             
              </Row>
              <Row>
              <CustomButton  label ="Donation❤" className = {styles.btn} onClick = {false} type = "submit" disabled = {false}  /> 
              <CustomButton label ="Registration" className = {styles.btn2} onClick = {false}  disabled = {false}  />
              </Row>
            </Col>
            <Col span={12}>
                <Image 
              height={600}
              width={500}
              src="/Charity.gif"
              className={styles.picture}></Image>
            </Col>
          </Row>
         
          </div>

          <div className={styles.container} style = {{background: '#2f4e71'}}>
          <Row >
            <Col span={12}>
              <Title className={styles.heading}>Help the poor to get the bright future </Title>
              <CustomButton  label ="Donation❤" className = {styles.btn} onClick = {false} type = "submit" disabled = {false}  /> 
              <CustomButton label ="Registration" className = {styles.btn2} onClick = {false}  disabled = {false}  />
            </Col>
            <Col span={12}>
                <Image 
              height={600}
              width={500}
              src="/usachildpoverty.jpg"
              className={styles.picture}></Image>
            </Col>
          </Row>
         
          </div>

          
          <div className={styles.container} style = {{background: '#2f4e71'}}>
          <Row >
            <Col span={12}>
              <Title className={styles.heading}>Gift Education, So that they can have bright Future  </Title>
              <CustomButton  label ="Donation❤" className = {styles.btn} onClick = {false} type = "submit" disabled = {false}  /> 
              <CustomButton label ="Registration" className = {styles.btn2} onClick = {false}  disabled = {false}  />
            </Col>
            <Col span={12}>
                <Image 
              height={600}
              width={500}
              src="/Education.jpg"
              className={styles.picture}></Image>
            </Col>
          </Row>
         
          </div>

          <div className={styles.container} style = {{background: '#2f4e71'}}>
          <Row >
            <Col span={12}>
              <Title className={styles.heading}>Donate Food, So that they can have bright Future  </Title>
              <CustomButton  label ="Donation❤" className = {styles.btn} onClick = {false} type = "submit" disabled = {false}  /> 
              <CustomButton label ="Registration" className = {styles.btn2} onClick = {false}  disabled = {false}  />
            </Col>
            <Col span={12}>
                <Image 
              height={600}
              width={500}
              src="/Food.gif"
              className={styles.picture}></Image>
            </Col>
          </Row>
         
          </div>
      </Carousel>
      <div  >
  </div>
    </>
  );
};

export default CustomCarousel;