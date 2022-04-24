import {Typography,Divider,Row,Col} from 'antd';
import style from '../../../../styles/DefineStep.module.css';
import {useState} from 'react';
const { Title } = Typography;


function DefineStep(){
    const [xs,setXs] = useState(24);
    const [sm,setSm] = useState(11);
    const [md,setMd] = useState(12);
    const [lg,setLg] = useState(12);
    return(<>

    <Divider><Title level={1} className={style.Stepheading}>Step-by-Step Guide </Title></Divider>
    <Row>

     <Col xs={{span:xs}} sm={{span:sm}} md={{span:md}} lg={{span:lg}}>
         <Title level={2} className={style.Stepheading}>Steps for Donor</Title>
    <ol>
        <li className={style.liClass}><span className={style.spanContent}>Register yourself by click on registration button.</span></li>
        <li className={style.liClass}><span className={style.spanContent}>View Categories of NGOs in homepage.</span></li>
        <li className={style.liClass}><span className={style.spanContent}>Click on specfic category for donation.</span></li>
        <li className={style.liClass}><span className={style.spanContent}>View Financial Report of NGOs.</span></li>
        <li className={style.liClass}><span className={style.spanContent}>Fill Form of Donation for specfic NGO.</span></li>
    </ol>
   </Col>
   

   <Col xs={{span:xs}} sm={{span:sm}} md={{span:md}} lg={{span:lg}}>
         <Title level={2} className={style.Stepheading}>Steps for NGOs</Title>
    <ol>
        <li className={style.liClass}><span className={style.spanContent}>Registration of NGO through Registration Button.</span></li>
        <li className={style.liClass}><span className={style.spanContent}>Fill complete form with authenticate information.</span></li>
        <li className={style.liClass}><span className={style.spanContent}>Check your email address for confirmation.</span></li>
        <li className={style.liClass}><span className={style.spanContent}>If you are registered successfully then get access of admin.</span></li>



    </ol>
   </Col>
   </Row>
    </>)

}
export default DefineStep;