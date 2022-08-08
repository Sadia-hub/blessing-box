import style from '../../../styles/Footer.module.css';
import { Anchor, Row, Col, Typography, Button } from 'antd';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { CustomButton } from '../ui/buttons/buttons';

import apiCall from '../ui/support/apiCall';

export function Description() {
    
    const [userHasNgo, setUserHasNgo ] =useState(false);
    const router = useRouter()

    const userState = useSelector((state)=> state.loginReducer);
   
    const handleNgo = (e) => {
        e.preventDefault()
        router.push('/ngo-registration');
        setIsModalVisible(false);
    }
    

    const { Link } = Anchor;
    const { Title } = Typography;

    const user = useSelector((state)=> state.userReducer)
    useEffect(()=> {
      async function checkUserHasNgo(){
        apiCall(`ngos/${user.id}`,null, "GET", null, null)
        .then((res)=>{
          setUserHasNgo(res)
        })
        .catch((err)=>{
          console.log(err.message)
        })
      } 
      checkUserHasNgo();
    },[])

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
                            <Button className={style.donatebtn}><a href="#donate">Donate❤</a></Button> {' '}
                                {userHasNgo ==true && userState==true? '': <CustomButton label="Add NGO" className={style.footerButton}  onClick={handleNgo} disabled={false} shape="round" />}
                            </Col>
                        </Row>
                    </a>
                </Link>
            </Anchor>
        </div>

       
    </>)
}