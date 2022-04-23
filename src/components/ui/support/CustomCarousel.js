import { Carousel, Modal } from 'antd';
import Image from 'next/image';
import styles from '../../../../styles/Carousel.module.css';
import { CustomButton } from '../buttons/buttons';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { Row, Col } from 'antd';
import { Typography } from 'antd';

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
      <div className={styles.mainDiv}>


        <Carousel autoplay={true} dotPosition="right" >
          <div>
            <Row align='middle' justify='center' style={{ margin: "5%" }}>

              <Col span={12} >
                <Row>

                  <Title className={styles.heading}>
                    Hurry Up!! Don't miss your chance
                    <br />
                    Let's earn the box of <span style={{ color: "#EB2188" }}>BLESSINGS</span>.
                    <br />
                    Want to know How?

                  </Title>

                </Row>

                <Row>

                  <CustomButton label="Donate❤" className={styles.btn} onClick={showModal} type="submit" disabled={false} />
                  <CustomButton label="Registration" className={styles.btn2} onClick={showModal} disabled={false} />
                </Row>
              </Col>


              <Col span={12}>
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
          <div>
            <Row align='middle' justify='center' style={{ margin: "5%" }}>

              <Col span={12}>
                <Row>

                  <Title className={styles.heading}>
                    Join NGOs to become shelter for the <span style={{ color: "#EB2188" }}>SHELTERLESS</span>!<br />
                    Get their <span style={{ color: "#EB2188" }}>BLESSINGS</span> in return
                  </Title>

                </Row>

                <Row>

                  <CustomButton label="Donate❤" className={styles.btn} onClick={showModal} type="submit" disabled={false} />
                  <CustomButton label="Registration" className={styles.btn2} onClick={showModal} disabled={false} />
                </Row>
              </Col>


              <Col span={12}>
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
          <div>
            <Row align='middle' justify='center' style={{ margin: "5%" }}>

              <Col span={12} >
                <Row >

                  <Title className={styles.heading}>
                    Donate for the <span style={{ color: "#EB2188" }}>HUNGRY</span>!<br />
                    They need Us! The need You!
                    <br />
                    Get their <span style={{ color: "#EB2188" }}>BLESSINGS</span> in return
                  </Title>

                </Row>

                <Row>

                  <CustomButton label="Donate❤" className={styles.btn} onClick={showModal} type="submit" disabled={false} />
                  <CustomButton label="Registration" className={styles.btn2} onClick={showModal} disabled={false} />
                </Row>
              </Col>


              <Col span={12} >
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
          <div>
            <Row align='middle' justify='center' style={{ margin: "5%" }}>

              <Col span={12} >
                <Row >

                  <Title className={styles.heading}>
                    Donate for the future of Pakistan-<span style={{ color: "#EB2188" }}>EDUCATION-</span><br />
                    Let's improve the literacy rate
                    <br />
                    Get their <span style={{ color: "#EB2188" }}>BLESSINGS</span> in return
                  </Title>

                </Row>

                <Row >

                  <CustomButton label="Donate❤" className={styles.btn} onClick={showModal} type="submit" disabled={false} />
                  <CustomButton label="Registration" className={styles.btn2} onClick={showModal} disabled={false} />
                </Row>
              </Col>


              <Col span={12} >
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