import { Carousel, Modal } from 'antd';
import Image from 'next/image';
import styles from '../../../../styles/Carousel.module.css';
import { CustomButton } from '../buttons/buttons';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { Row, Col } from 'antd';
import { Typography } from 'antd';

import Zoom from 'react-reveal/Zoom';
import Swing from 'react-reveal/Swing';
const CustomCarousel = () => {
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

  const { Title } = Typography;
  return (
    <>
      <div >


        <Carousel autoplay={true} dotPosition="right" >
          <div className={styles.mainDiv}>
            <Row align='middle'>

              <Col xs={{ span: 24, order:2 }} sm={{ span: 24, order:2 }} md={{ span: 12, order:2 }} lg={{ span: 12, order:1 }}>
                <Row justify='center'>

                <Zoom cascade>
                  <Title className={styles.heading}>
                    Hurry Up!! Don't miss your chance
                    <br />
                    Let's earn the box of <span style={{ color: "#EB2188" }}>BLESSINGS</span>.
                    <br />
                    Want to know How?

                  </Title>
                </Zoom>
                </Row>

                <Row justify="center">
                  
                  <Swing>
                    <CustomButton label="Donate❤" className={styles.btn} onClick={showModal} type="submit" disabled={false} />
                    <CustomButton label="Registration" className={styles.btn2} onClick={showModal} disabled={false} />
                  </Swing>
                </Row>
              </Col>


              <Col  xs={{ span: 24, order:1 }} sm={{ span: 24, order:1 }} md={{ span: 12, order:1 }} lg={{ span: 12, order:2 }}>
                <Row >
                  <Image
                    height={600}
                    width={500}
                    src="/blessing.svg"

                  ></Image>
                </Row>
              </Col>

            </Row>
          </div>
          <div className={styles.mainDiv}>
            <Row align='middle' >

              <Col xs={{ span: 24, order:2 }} sm={{ span: 24, order:2 }} md={{ span: 12, order:2 }} lg={{ span: 12, order:1 }}>
                <Row justify='center'>

                  <Title className={styles.heading}>
                    Join NGOs to become shelter for the <span style={{ color: "#EB2188" }}>SHELTERLESS</span>!<br />
                    Get their <span style={{ color: "#EB2188" }}>BLESSINGS</span> in return
                  </Title>

                </Row>

                <Row justify="center">

                  <CustomButton label="Donate❤" className={styles.btn} onClick={showModal} type="submit" disabled={false} />
                  <CustomButton label="Registration" className={styles.btn2} onClick={showModal} disabled={false} />
                </Row>
              </Col>


              <Col  xs={{ span: 24, order:1 }} sm={{ span: 24, order:1 }} md={{ span: 12, order:2 }} lg={{ span: 12, order:2 }}>
                <Row>
                  <Image
                    height={600}
                    width={500}
                    src="/home.svg"

                  ></Image>
                </Row>
              </Col>

            </Row>
          </div>
          <div className={styles.mainDiv}>
            <Row align='middle'>

              <Col xs={{ span: 24, order:2 }} sm={{ span: 24, order:2 }} md={{ span: 12, order:2 }} lg={{ span: 12, order:1 }}>
                <Row  justify='center'>

                  <Title className={styles.heading}>
                    Donate for the <span style={{ color: "#EB2188" }}>HUNGRY</span>!<br />
                    They need Us! The need You!
                    <br />
                    Get their <span style={{ color: "#EB2188" }}>BLESSINGS</span> in return
                  </Title>

                </Row>

                <Row justify="center">

                  <CustomButton label="Donate❤" className={styles.btn} onClick={showModal} type="submit" disabled={false} />
                  <CustomButton label="Registration" className={styles.btn2} onClick={showModal} disabled={false} />
                </Row>
              </Col>


              <Col  xs={{ span: 24, order:1 }} sm={{ span: 24, order:1 }} md={{ span: 12, order:2 }} lg={{ span: 12, order:2 }}>
                <Row>
                  <Image
                    height={600}
                    width={500}
                    src="/food2.svg"

                  ></Image>
                </Row>
              </Col>

            </Row>
          </div>
          <div className={styles.mainDiv}>
            <Row align='middle' >

              <Col xs={{ span: 24, order:2 }} sm={{ span: 24, order:2 }} md={{ span: 12, order:2 }} lg={{ span: 12, order:1 }}>
                <Row justify='center'>

                  <Title className={styles.heading}>
                    Donate for the future of Pakistan-<span style={{ color: "#EB2188" }}>EDUCATION-</span><br />
                    Let's improve the literacy rate
                    <br />
                    Get their <span style={{ color: "#EB2188" }}>BLESSINGS</span> in return
                  </Title>

                </Row>

                <Row justify="center">

                  <CustomButton label="Donate❤" className={styles.btn} onClick={showModal} type="submit" disabled={false} />
                  <CustomButton label="Registration" className={styles.btn2} onClick={showModal} disabled={false} />
                </Row>
              </Col>


              <Col xs={{ span: 24, order:1 }} sm={{ span: 24, order:1 }} md={{ span: 12, order:2 }} lg={{ span: 12, order:2 }}>
                <Row>
                  <Image
                    height={600}
                    width={500}
                    src="/education.svg"

                  ></Image>
                </Row>

              </Col>

            </Row>
          </div>




        </Carousel>


      </div>

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
};

export default CustomCarousel;