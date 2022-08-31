 import apiCall from '../../../../../src/components/ui/support/apiCall';
 import { useRouter } from 'next/router';
 import { useEffect, useState } from 'react';
function Project() {
    const router = useRouter()
    const {donationId, projectId} =router.query;
       
    const body ={
    donation: donationId,
    date  : '2018-06-22 07:07:54',
    projectId, 
    userId:1
   }

  useEffect(() => {   
   apiCall('adddonation', JSON.stringify(body), "POST", null, null)
      .then((res)=>{
        console.log("res of donation is",res)
      })
      .catch((err)=>{
        console.log("res of donation is",err.message)
      })


      apiCall(`getdonation/${projectId}`, null, "GET", null, null)
      .then((res)=>{
        console.log("res of donation is",res)
      })
      .catch((err)=>{
        console.log("res of donation is",err.message)
      })  
      
  }, [])

    return (
        <div><h1>Congratulations, You earned 100's of Blessings just in {donationId} Rupees</h1></div>
      )
} 

export default Project;