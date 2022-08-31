import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CustomLayout from '../../src/components/layouts/customLayout';
import {Row, Col } from 'antd';
import apiCall from '../../src/components/ui/support/apiCall';

const  Id = () => {
    const router = useRouter()
 //   const   donation    = router.query.inputValue;

//     const body ={
//     donation: donation,
//     date  : '2018-06-22 07:07:54',
//     projectId, 
//     userId:1
//  }

//  console.log("res of donation is",300)
//  useEffect(() => {   
//    apiCall('adddonation', JSON.stringify(body), "POST", null, null)
//       .then((res)=>{
//         console.log("res of donation is",res)
//       })
//       .catch((err)=>{
//         console.log("res of donation is",err.message)
//       })
      
//   }, [])
  return (
    <>
      {/* <Row justify='center'>
      <p>Congratulations, You earned 100's of Blessings just in  Rupees</p>
      </Row> */}

  {/* <CustomLayout> */}
  <p>Congratulations, You earned 100's of Blessings just in in innnn Rupees</p>
    {/* </CustomLayout> */}
    
      </>
  )
}

export default Id

  