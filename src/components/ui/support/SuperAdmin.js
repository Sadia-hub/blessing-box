import { Row, Col, Divider, Button, Typography } from 'antd';
import styles from '../../../../styles/superadmin.module.css';
import {  Table } from 'antd';
import { CustomButton } from '../buttons/buttons';
const SuperAdmin = () => {
    const { Title, Paragraph } = Typography;
    const columns = [
        {
          title: 'Ngo ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'NGO name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Actions',
          dataIndex: 'actions',
          key: 'actions',
        },
        
      ];

      const data = [
        {
          id: '1',
          name: 'Faiz',
          actions:    <CustomButton label="Approve NGO" className='' onClick='' disabled={false} />
        },
        {
          id: '2',
          name: 'ABC',
          actions:    <CustomButton label="Approve NGO" className='' onClick='' disabled={false} />
        },
        {
          id: '3',
          name: 'Chippa',
          actions:    <CustomButton label="Approve NGO" className='' onClick='' disabled={false} />   
        },
      ];
      
    return (
        <>
        <div className={styles.mainDiv}>
        <Title level={3} >Super Admin</Title>
        </div>
        <div className={styles.table}>

      <Row>
      <Col span={6} offset={2}><Title level={2}>NGO ID</Title></Col>
      <Col span={8}><Title level={2}>NGO Name</Title></Col>
      <Col span={7} offset={1}><Title level={2}>Actions</Title></Col> 
      </Row>
      <Row>
      <Col span={5} offset={3} className={styles.content}><Title level={3}>1</Title></Col>
      <Col span={8}><Title level={4}>Faiz NGO</Title></Col>
      <Col span={8}>
      <CustomButton label="Approve " className={styles.approve_btn} onClick='' disabled={false} shape='round'/>   
      <CustomButton label="Disapprove" className={styles.disapprove_btn} onClick='' disabled={false} shape='round' />   
        </Col>
      </Row>
      {/* 2nd row */}
      <Row>
      <Col span={5} offset={3} className={styles.content}><Title level={3}>2</Title></Col>
      <Col span={8} ><Title level={4}>Chippa NGO</Title></Col>
      <Col span={8}>
      <CustomButton label="Approve " className={styles.approve_btn} onClick='' disabled={false} shape='round'/>   
      <CustomButton label="Disapprove" className={styles.disapprove_btn} onClick='' disabled={false} shape='round' />   
        </Col>
      </Row>
      </div>
        {/* <div className={styles.table}>
        <Table columns={columns} dataSource={data} />;
        </div> */}
        
        </>
    )
} 
export default SuperAdmin;