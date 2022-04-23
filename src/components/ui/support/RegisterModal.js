// // import style from '../../../styles/Footer.module.css';
// import {Anchor,Row,Col,Typography,Modal} from 'antd';
// import {useState} from 'react';
// import { CustomButton } from '../../ui/buttons/buttons';

// function RegisterModal(){
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const handleDonar=()=>{
      
//     }
//     const handleNgo=()=>{
      
//     }
//     const handleCancel=()=>{
//         setIsModalVisible(false);
//     }
//     return(<>
// <Modal title="Registration" visible={isModalVisible} onCancel={handleCancel}
//            footer={[
//             <CustomButton label="Donar" className={false} onClick={handleDonar} type="danger" disabled={false} shape="round" />,
//             <CustomButton label="NGO" className={false} onClick={handleNgo} type="danger" disabled={false} shape="round" />,
//             <CustomButton label="Close" className={false} onClick={handleCancel}  type={false} disabled={false} shape="round" />
//            ]}
//     >
//          <p>Registeration as Donor or NGO?</p>
//       </Modal>
//       </>)
//         }
//  export default RegisterModal;