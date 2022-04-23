import style from '../../../styles/Footer.module.css';
import { Anchor, Row, Col, Typography, Modal } from 'antd';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { CustomButton } from '../ui/buttons/buttons';

export function Description() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const router = useRouter()

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleDonar = (e) => {
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

    const { Link } = Anchor;
    const { Title } = Typography;



    return (<>
        <div className={style.headingaddress}>
            <Title level={2}>About Us</Title>
            <Anchor affix={false}>
                <Link href="/email" className={style.content}>
                    <a>
                        <Row>
                            <Col span={24}>
                                <Title level={3}>Individually We are a <span className={style.footerContent}>Drop</span> But <span className={style.footerContent}>Together</span> We are an <span className={style.footerContent}>Ocean</span></Title>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={21}>
                                <CustomButton label="Donate❤" className={style.donatebtn} onClick={showModal} type="danger" disabled={false} shape="round" />{' '}
                                <CustomButton label="Registeration" className={style.footerButton} onClick={showModal} type={false} disabled={false} shape="round" />
                            </Col>
                        </Row>
                    </a>
                </Link>
            </Anchor>
        </div>

        <Modal title="Registration" visible={isModalVisible} onCancel={handleCancel}
            footer={[
                <CustomButton label="Donar" className={style.footerButton} onClick={handleDonar} type="danger" disabled={false} shape="round" />,
               <CustomButton label="NGO" className={style.footerButton} onClick={handleNgo} type="danger" disabled={false} shape="round" />,
                <CustomButton label="Close" className={style.cancelBtn} onClick={handleCancel} type={false} disabled={false} shape="round" />
            ]}
        >
            <p>Registeration as Donor or NGO?</p>
        </Modal>
    </>)
}