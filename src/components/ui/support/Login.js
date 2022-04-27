import { Row, Col } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Input } from 'antd';
import { Typography } from 'antd';
import styles from '../../../../styles/login.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { isLogin, userType, userName } from '../../../actions';
import { CustomButton } from '../buttons/buttons';
const Login =() =>{
const dispatch = useDispatch();
const router = useRouter();
const myState = useSelector((state)=> state.loginReducer);

 console.log("In login "+ myState);

    const[user,setUser]=useState();
    const[valid,setValid]=useState(false);
    const[password,setPassword]=useState();
    const { Title } = Typography;
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const list = [{id: 1, type: "Donor", email:"k@gmail.com", name:"MK", password:"1234"},
      {id: 2, type: "NGO", email:"sadia@gmail.com", name:"sadia",password:"5678"},
      {id: 3, type: "Donor", email:"sanju@gmail.com", name:"sanju", password:"981011"},
      {id: 4, type: "NGO", email:"mk@gmail.com", name:"megha", password:"mk"},
    ]

    
    function handleChangeUser(event) {
      const value = event.target.value;
      setUser(value);  
    }

    function handleChangePassword(event) {
      const value = event.target.value;
      setPassword(value);
    }

    // const  validate = async() => {
    //   const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    //   const datat = await response.json();
    //    datat.map((obj)=>{  
    //        if(user==obj.id){
    //           console.log("id",obj.id)
    //           console.log("uder",user)
    //           setValid(true); 
    //        }
    //       else if(valid!=true){
    //         setValid(false);
    //        }
           
           
    //       } ); 
    //       console.log(valid);
    //   if(valid==true){
    //        console.log("In async Function validate" );
    //     }
    //     else if(valid!=true) {
    //       console.log("In async Function Not validate" );
    //     }
    //     }  
    const verifyUser =() =>{
      let breakCondition = false;
     return list.map((obj)=>{
        if(user==obj.email && password==obj.password ){
          dispatch(isLogin());
          dispatch(userType(obj.type));
          dispatch(userName(obj.name));
          router.push('/');
          setValid(true);
          breakCondition =true; 
        }
        else if(!breakCondition){
    
          setValid(false);
        }
      })
     
    }
    console.log(valid);
    return(
    <div className={styles.mainDiv}>
    <Row className={styles.form}>
        <Col xs={{span: 20, order: 1, offset: 4}} sm={{span: 20, order:1, offset: 4}} md={{span: 12, offset:3}} lg={{span: 6}} className={styles.col}>
        <Image
        width={300}
        height={300}
        src="/workingMan.png"
        className={styles.picture}
        />
        </Col>
        
        <Col xs={{span: 20, order: 2, offset: 2}} sm={{span: 20, order: 2, offset: 2}} md={{span: 20, order: 2, offset: 2}} lg={{span: 12}} className={styles.col}>
       
        <Title className={styles.heading}>Log In</Title>
       
       
        <Form name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true,  message: 'Please input your username!' }]}
      >
        <Input onChange={handleChangeUser}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password onChange={handleChangePassword}/>
      </Form.Item>

      <Form.Item >
      <CustomButton htmlType="submit" label="Sign in" className={styles.regButton} type="primary" onClick={verifyUser} disabled={false} shape=''></CustomButton>     
      </Form.Item>
       </Form>
        </Col>
    </Row>
    
    </div>
    )
}
export default Login;