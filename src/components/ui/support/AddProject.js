import { Form, Input, Typography, Row, Col, Divider, InputNumber,Modal, Space } from 'antd';
import { UploadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { CustomButton } from '../buttons/buttons';
import styles from '../../../../styles/NGOsForm.module.css';
import { useState } from 'react';
import ImageUpload from './ImageUpload';
import apiCall from './apiCall';
import uploadOnCloudinary from './uploadOnCloudinary';
import ProjectCard from "./ProjectCard"
import {useSelector} from 'react-redux'


function AddProject() {

    const ngoByUserId = useSelector((state)=> state.detailsReducer.ngo);

    console.log(ngoByUserId)
    const [title, setTitle] = useState();
    const [image, setImage] = useState({});
    const [desc, setDesc] = useState();
    const [targetAmount, setTargetAmount] = useState(0);
     
    const [visible, setVisible] = useState(false);


    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
   
    const handleDesc = (e) => {
        setDesc(e.target.value);
    }

    const handleSubmit = (e) => {
    
        console.log(e)
     };
  

    const onFinish = (values) => {
        console.log('Success:', values);

        setVisible(true)

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

     

    
    const uploadProject = async () =>{
         const imageurl = await uploadOnCloudinary(image.file);

        const body = {
            title,
            imageurl,
            target:targetAmount,
            description:desc,
            ngoId:ngoByUserId.ngo.id
        }

        console.log("body",body)
        const token = localStorage.getItem("token")
        console.log(token)

        apiCall(`ngo/addproject`,JSON.stringify(body), "POST", null, token)
        .then((res)=>{
            console.log(res)
            setVisible(false)
            if(res.id){
                 
                Modal.success({
                    content: 'Congratulations! your project has been added',
                });
            }
            else{
                Modal.error({
                    title: 'This is an error message',
                    content: 'Something went wrong, check all data is provided as asked',
                });
            }
            

               
            
        })
        .catch((err)=>{
            Modal.error({
                title: 'This is an error message',
                content: err.message,
            });
        })
    }

    

    const { Title } = Typography;
    return (<>

        <br/>
        <br/>
        <br/>
        <Divider><Title level={1} className={styles.heading}>Add Project</Title></Divider>

       

        <Row>
            <Col span={10}>

            <Row justify='center'>
            <Modal
                title="Confirm"
                centered
                visible={visible}
                onOk={uploadProject}
                onCancel={() => setVisible(false)}
                

            >
                <p>Are you sure you want to add project?</p>
                
            </Modal>

            <Col>
                <Form
                    // labelCol={{ span: 8 }}
                    // wrapperCol={{ span: 9 }}
                    name="nest-messages"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    onSubmit={handleSubmit}>

                    <Form.Item name="title" label="Enter Project Title" rules={[{ required: true, message: 'Please Enter Title of Project!' }]}>
                        <Input placeholder="Enter Title" onChange={handleTitle} value={title} />
                    </Form.Item>

                    <Form.Item name="desc" label="Enter Description"
                        rules={[{ required: true, message: 'Please Enter Description of Project!' }]}>
                        <Input.TextArea placeholder="Enter Description" onChange={handleDesc} value={desc} />
                    </Form.Item>

                    <Form.Item name="targetAmount" label="Enter Target Amount"
                        rules={[{ required: true, message: 'Please Enter Target Amount of Project!!' }]}>
                        <InputNumber min={0} defaultValue={0} onChange={(value) => { setTargetAmount(value) }} />
                    </Form.Item>

                    <Form.Item label="Picture" name="image">
                        <ImageUpload title="Add Image" data={image} setData={setImage} style={{overflow:"hidden"}}/>  
                    </Form.Item>
                    <Row justify='center'>
                        <Col>
                                <CustomButton label="Add Project" type={false} className={styles.ngosBtn} disabled={false} shape="round" htmlType="submit" />{' '}  
                                              
                        </Col>
                    </Row>

                </Form>
            </Col>
        </Row>
       

        

            </Col>
            <Col span={12}>
                <Row justify='center'>
                    <ProjectCard
                        // cardData={cardData}
                        title={title}
                        pic={image?image.data_url:""}
                        desc={desc}
                        targetAmount={targetAmount}
                    /> 
                </Row>
               

            </Col>
        </Row>
        
    </>)
}
export default AddProject;