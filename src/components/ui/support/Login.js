import { Row, Col } from 'antd';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Form, Input } from 'antd';
import { Typography } from 'antd';
import styles from '../../../../styles/login.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { isLogin, IS_LOGOUT, setUserInfo } from '../../../redux/user/Action';
import { CustomButton } from '../buttons/buttons';
import apiCall from './apiCall';
const Login =() =>{
    const dispatch = useDispatch();
    const router = useRouter();
    const[email, setEmail] =useState();
    const[user,setUser]=useState();
    const[valid,setValid]=useState();
    const[password,setPassword]=useState();
    const[userData, setuserData] = useState({}); 
    const { Title } = Typography;
    
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const submission = {
        email: user,
        password: password
      };
      

      // useEffect(()=> {
        // const Login = async() =>{
        //    apiCall('user',JSON.stringify(submission), "POST", null, null)
        //    .then((data)=> { 
        //     setuserData(()=>data)
        //     console.log("submission is"+submission)
        //     setEmail(data.user.email)
        //   })
        //    .catch((err)=>{
        //      console.log(err.message)
        //    })
        //  } 
      //  Login()
      //  },[])
      
    useEffect(() => {
    async function getLogin()  {
      try{
      await fetch('http://localhost:8080/user', {
      method: "POST",  
      headers: {
          'Content-Type': 'application/json',
          //'Authorization': `Bearer ${token}`,
        },
        body:JSON.stringify(submission),
      }).then(res=> res.json()).then((data)=> { 
        setuserData(data)
        setEmail(data.user.email)
      });
      }
      catch(err){
        console.log(err);
      }
    }
    getLogin();
  })

  //console.log("type of user is"+userData.type)
    
    function handleChangeUser(event) {
      const value = event.target.value;
      setUser(value);  
    }

    function handleChangePassword(event) {
      const value = event.target.value;
      setPassword(value);
    }

    const verifyUser =() =>{
    
      let breakCondition = false;
        if(user==email){ 
          localStorage.setItem("token", userData.token);
          dispatch(isLogin());
          dispatch(setUserInfo(userData.user));
         {userData.user.type=='admin'? router.push('/superadmin') :router.push('/')}
          setValid(true);
          breakCondition =true; 
        }
        else if(!breakCondition){
          
          setValid(false);
        } 
    }
    // console.log(valid);
   
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
      <span >
      {valid==false? <p className={styles.center}>This user is not registered</p>: ''}
      </span>
       </Form>
        </Col>
    </Row>
    
    </div>
    )
}
export default Login;