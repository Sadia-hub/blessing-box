import { Row, Col, Divider, Button, Typography } from 'antd';
import style from '../../../../styles/table.module.css';
import SuperAdminTable from './SuperAdminTable';
const SuperAdmin = () => {
    const { Title, Paragraph } = Typography;

    return (
      <>
      <SuperAdminTable />
      </>
    )
} 
export default SuperAdmin;