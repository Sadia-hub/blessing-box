import { Carousel, Modal } from 'antd';
import Image from 'next/image';
import styles from '../../../../styles/Carousel.module.css';
import { CustomButton } from '../buttons/buttons';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const CustomCarousel = () => {

  const { Title } = Typography; 
  
  const sm={span:24, style:{marginBottom:"20px"}}
  const lg={
    span:12
  }

  return (
    <>
    <div className={styles.mainDiv}>
     

      <Carousel autoplay={true} dotPosition="right">
      <div>
        <Row align='middle' justify='center' style={{margin:"5%"}}>

          <Col lg={lg} md={sm} sm={sm}>
              <Row>
              
                  <Title className={styles.heading}>
                    Hurry Up!! Don't miss your chance
                    <br/>
                    Let's earn the box of <span style={{color:"#EB2188"}}>BLESSINGS</span>.
                    <br/>
                    Want to know How?
                    
                  </Title>
              
              </Row>
              
              <Row>

                
                  <CustomButton  label ="Donate❤" className = {styles.btn} onClick = {false} type = "submit" disabled = {false}  /> 
                  <CustomButton label ="Registration" className = {styles.btn2} onClick = {false}  disabled = {false}  />
              </Row>
          </Col>


          <Col lg={lg} md={sm} sm={sm}>

                <Image 
              height={600}
              width={500}
              src="/blessing.svg"
              
              ></Image>

          </Col>

        </Row>
      </div>
      <div>
        <Row align='middle' justify='center' style={{margin:"5%"}}>

          <Col lg={lg} md={sm} sm={sm}>
              <Row>
              
                <Title className={styles.heading}>
                  Join NGOs to become shelter for the <span style={{color:"#EB2188"}}>SHELTERLESS</span>!<br/>
                  Get their <span style={{color:"#EB2188"}}>BLESSINGS</span> in return
                </Title>
              
              </Row>
              
              <Row>
                
                  <CustomButton  label ="Donate❤" className = {styles.btn} onClick = {false} type = "submit" disabled = {false}  /> 
                  <CustomButton label ="Registration" className = {styles.btn2} onClick = {false}  disabled = {false}  />
              </Row>
          </Col>


          <Col lg={lg} md={sm} sm={sm}>

                <Image 
              height={600}
              width={500}
              src="/home.svg"
              
              ></Image>

          </Col>

        </Row>
      </div>
      <div>
        <Row align='middle' justify='center' style={{margin:"5%"}}>

          <Col lg={lg} md={sm} sm={sm}>
              <Row>
              
                <Title className={styles.heading}>
                  Donate for the <span style={{color:"#EB2188"}}>HUNGRY</span>!<br/>
                  They need Us! The need You!
                  <br/>
                  Get their <span style={{color:"#EB2188"}}>BLESSINGS</span> in return
                </Title>
              
              </Row>
              
              <Row>
                
                  <CustomButton  label ="Donate❤" className = {styles.btn} onClick = {false} type = "submit" disabled = {false}  /> 
                  <CustomButton label ="Registration" className = {styles.btn2} onClick = {false}  disabled = {false}  />
              </Row>
          </Col>


          <Col lg={lg} md={sm} sm={sm}>

                <Image 
              height={600}
              width={500}
              src="/food2.svg"
              
              ></Image>

          </Col>

        </Row>
      </div>
      <div>
        <Row align='middle' justify='center' style={{margin:"5%"}}>

          <Col lg={lg} md={sm} sm={sm}>
              <Row>
              
                <Title className={styles.heading}>
                  Donate for the future of Pakistan-<span style={{color:"#EB2188"}}>EDUCATION-</span><br/>
                  Let's improve the literacy rate
                  <br/>
                  Get their <span style={{color:"#EB2188"}}>BLESSINGS</span> in return
                </Title>
              
              </Row>
              
              <Row>
                
                  <CustomButton  label ="Donate❤" className = {styles.btn} onClick = {false} type = "submit" disabled = {false}  /> 
                  <CustomButton label ="Registration" className = {styles.btn2} onClick = {false}  disabled = {false}  />
              </Row>
          </Col>


          <Col lg={lg} md={sm} sm={sm}>

                <Image 
              height={600}
              width={500}
              src="/education.svg"
              
            ></Image>

          </Col>

        </Row>
      </div>


     

        </Carousel>
      
     
      </div>

    </>
  );
};

export default CustomCarousel;