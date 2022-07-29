export default async function (endPoint, body, reqType, returnType, token){

    
    const response = await fetch(`http://192.168.15.2:1234/${endPoint}`,
        
        {
            method: reqType, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: body // body data type must match "Content-Type" header
        }).catch((error) => {   
            console.log("ERROR: "+error)
              alert(error)
            return null;
      });
        
      let responseText = null;

      const statusCode = response.status;


      if(statusCode=== 403 || returnType==='TEXT'){
        responseText = await response.text();
      }else{
        responseText = await response.json();
      }

      return responseText;
}