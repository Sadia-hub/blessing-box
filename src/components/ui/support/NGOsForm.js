import { Form, Input, Typography, Row, Col, Divider, InputNumber,Upload, Button,message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { CustomButton } from '../buttons/buttons';
import styles from '../../../../styles/NGOsForm.module.css';
import { useState } from 'react';

import ProjectCard from "./ProjectCard"
function NGOsForm() {

    const [isPreview, setIsPreview] = useState(false);
    const [title, setTitle] = useState();
    const [pic, setPic] = useState();
    const [desc, setDesc] = useState();
    const [targetAmount, setTargetAmount] = useState(0);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    // const handlePic = (e) => {
    //     setPic(e.target.value);
    // }
    const handleDesc = (e) => {
        setDesc(e.target.value);
    }

    const props = {
        beforeUpload: file => {
          if (file.type !== 'image/png') {
            message.error(`${file.name} is not a png file`);
          }
          return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
        },
        onChange: info => {
          console.log(info.fileList);
          console.log(`/${info.fileList[0].name}`);
          setPic(()=>`/${info.fileList[0].name}`);
        },
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        // setPic('');
        setDesc('');
        setTargetAmount('');

        //    const newData=()=>({
        //     title: title,
        //     url : url,
        //     desc : desc,
        //     targetAmount : targetAmount
        //    }  
        //    )
        //    setCradData(newData);

    };
    // console.log("In card Data" + cardData);
    const handleClick = () => {

        console.log("something")
    }

    const handlePreview = () => {
        setIsPreview(() => true);
    }
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    const { Title } = Typography;
    return (<>

        <Divider><Title level={1} className={styles.heading}>Project Details</Title></Divider>
        <Row justify='center'>
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

                    {/* <Form.Item
                        name="url"
                        label="Enter Image URL"
                        rules={[{ required: true, message: 'Please Enter Image of Project!' }, { type: 'url', warningOnly: true }, { type: 'string' }]}
                    >
                        <Input placeholder="Enter URL" onChange={handleUrl} value={url}/>
                    </Form.Item> */}

                    <Form.Item name="desc" label="Enter Description"
                        rules={[{ required: true, message: 'Please Enter Description of Project!' }]}>
                        <Input.TextArea placeholder="Enter Description" onChange={handleDesc} value={desc} />
                    </Form.Item>

                    <Form.Item name="targetAmount" label="Enter Target Amount"
                        rules={[{ required: true, message: 'Please Enter Target Amount of Project!!' }]}>
                        <InputNumber min={0} defaultValue={0} onChange={(value) => { setTargetAmount(value) }} />
                    </Form.Item>

                 <Form.Item label="Picture" name="pic"
                 rules={[{ required: true, message: 'Please Enter .png Image!!' }]}>
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
        <Row justify='center'>
            <Col>
                <Form.Item
                // wrapperCol={{ offset: 8, span: 16 }}
                >
                    <CustomButton label="Add Project" type={false} className={styles.ngosBtn} onClick={handleClick} disabled={false} shape="round" htmlType="submit" />{' '}
                    <CustomButton label="Preview" type={false} className={styles.ngosBtn} onClick={handlePreview} disabled={false} shape="round" htmlType="submit" />
                </Form.Item>
            </Col>
        </Row>


        <Row justify='center'>
            {isPreview ? <ProjectCard
                // cardData={cardData}
                title={title}
                pic={pic}
                desc={desc}
                targetAmount={targetAmount}
            /> : null}
        </Row>
    </>)
}
export default NGOsForm;