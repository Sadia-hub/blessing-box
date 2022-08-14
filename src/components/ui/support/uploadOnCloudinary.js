const uploadOnCloudinary = async (fileUrl) =>{
  //1. upload image on cloudinary
      
  const formData = new FormData();
  formData.append('file', fileUrl);
  formData.append('upload_preset', 'my-uploads');

  const res = await fetch('https://api.cloudinary.com/v1_1/blessing-box/image/upload', {
      method: 'POST',
      body: formData
    })

  //this file object contains the url of the image posted on cloudinary
  const file = await res.json();
  return file.secure_url;
}

export default uploadOnCloudinary