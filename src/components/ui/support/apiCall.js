const apiCall = async (endpoint, body, method, returnType="", token="") => {

  try{
      const response = await fetch(`http://localhost:8080/${endpoint}`,{
      method, //GET, POST, PUT, DELETE
      mode:'cors',
      headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${token}`
      },
      referrerPolicy: 'no-referrer',
      body
  })

  let responseText ="";

  if(response){
      const {status} = response
      if(status != 200 || returnType == "TEXT"){
          responseText = await response.json()
      }
      else{
          responseText = response.json()
      }
  }

  return responseText;
  }
  catch(err){
      console.log(err)
      return null
  }

}
module.exports = apiCall;