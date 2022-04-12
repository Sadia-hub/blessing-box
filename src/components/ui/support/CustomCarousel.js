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
    <div className={styles.mainDiv}>
      {/* <Row style={{ backgroundColor:"pink"}}> */}

      <Carousel autoplay={true} dotPosition="right">

      <Row style={{ backgroundColor:"pink"}}>

        <Col span={6} style={{ backgroundColor:"red"}}>
            <Row>
             
              <Title className={styles.heading}>
                Indvidually We are a Drop, But Together We are an Ocean 
              </Title>
            
             </Row>
             
             <Row>
               
                <CustomButton  label ="Donation❤" className = {styles.btn} onClick = {false} type = "submit" disabled = {false}  /> 
                <CustomButton label ="Registration" className = {styles.btn2} onClick = {false}  disabled = {false}  />
             </Row>
        </Col>


        <Col span={6} style={{ backgroundColor:"black"}}>

              <Image 
            height={600}
            width={500}
            src="/blessing.svg"
            
            ></Image>

        </Col>

      </Row>

      {/* <Row>
        <Col span={12} style={{padding: "10%"}}>
            <Row>
             
              <Title className={styles.heading}>
                Indvidually We are a Drop, But Together We are an Ocean 
              </Title>
            
             </Row>
             
             <Row>
               
                <CustomButton  label ="Donation❤" className = {styles.btn} onClick = {false} type = "submit" disabled = {false}  /> 
                <CustomButton label ="Registration" className = {styles.btn2} onClick = {false}  disabled = {false}  />
             </Row>
        </Col>


        <Col span={12}>
          <Row align='middle' justify='center'>
         
        
        <Row>
          
          
              <Image 
            height={600}
            width={500}
            src="/blessing.svg"
            
            ></Image>
            </Row>
          
        </Row>
       
        </Col>
      </Row>

      <Row>
        <Col span={12} style={{padding: "10%"}}>
            <Row>
             
              <Title className={styles.heading}>
                Indvidually We are a Drop, But Together We are an Ocean 
              </Title>
            
             </Row>
             
             <Row>
               
                <CustomButton  label ="Donation❤" className = {styles.btn} onClick = {false} type = "submit" disabled = {false}  /> 
                <CustomButton label ="Registration" className = {styles.btn2} onClick = {false}  disabled = {false}  />
             </Row>
        </Col>


        <Col span={12}>
          <Row align='middle' justify='center'>
         
        
        <Row>
          
          
              <Image 
            height={600}
            width={500}
            src="/blessing.svg"
            
            ></Image>
          
          </Row>
        </Row>
       
        </Col>
      </Row>

      <Row>
        <Col span={12} style={{padding: "10%"}}>
            <Row>
             
              <Title className={styles.heading}>
                Indvidually We are a Drop, But Together We are an Ocean 
              </Title>
            
             </Row>
             
             <Row>
               
                <CustomButton  label ="Donation❤" className = {styles.btn} onClick = {false} type = "submit" disabled = {false}  /> 
                <CustomButton label ="Registration" className = {styles.btn2} onClick = {false}  disabled = {false}  />
             </Row>
        </Col>


        <Col span={12}>
          <Row align='middle' justify='center'>
         
        
        <Row>
          
          
              <Image 
            height={600}
            width={500}
            src="/blessing.svg"
            
            ></Image>
          
        </Row>
        </Row>
       
        </Col>
      </Row> */}

        </Carousel>
      {/* </Row> */}
     
      </div>
    </>
  );
};

export default CustomCarousel;