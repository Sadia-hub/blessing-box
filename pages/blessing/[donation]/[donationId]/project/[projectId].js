 import apiCall from '../../../../../src/components/ui/support/apiCall';
 import { useRouter } from 'next/router';
 import { useEffect, useState } from 'react';
  
 function Project() {
    const router = useRouter()
    const {donationId, projectId} =router.query;
    console.log(router.query.donationId)
       
    const body ={
    donation: router.query.donationId,
    date  : '2018-06-22 07:07:54',
    projectId : projectId, 
    userId:1
   }

   {  donationId? 
     useEffect(()=>{
    apiCall('adddonation', JSON.stringify(body), "POST", null, null)
      .then((res)=>{
        console.log("res of donation is",res.donation )
        if(res.donation){
    apiCall(`getdonation/${projectId}`, null, "GET", null, null)
         .then((res)=>{
           console.log("res of donation is",res)
         })
         .catch((err)=>{
           console.log("res of donation is",err.message)
        })  
        }
      })
      .catch((err)=>{
        console.log("res of donation is",err.message)
      })
     }, []) : ''
  }

  // useEffect(() => {   
  //   apiCall(`getdonation/${projectId}`, null, "GET", null, null)
  //      .then((res)=>{
  //        console.log("res of donation is",res)
  //      })
  //      .catch((err)=>{
  //        console.log("res of donation is",err.message)
  //      })  
       
  //  }, [])

    return (
     
        <div><h1>Congratulations, You earned 100's of Blessings just in {donationId} Rupees</h1></div>
      )
} 

export default Project;