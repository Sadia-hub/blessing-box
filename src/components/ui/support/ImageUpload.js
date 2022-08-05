import ImageUploading from "react-images-uploading";
import {useState} from 'react'
import Image from 'next/image';
import {Row} from 'antd'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EditOutlined, PlusOutlined  } from '@ant-design/icons';

//import "./styles.css";

function ImageUpload() {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div>


            <Row justify='center'>
              <PlusOutlined 
              style={isDragging ? { color: "red" , fontSize:40} : {fontSize:40}}
               {...dragProps}
              onClick={onImageUpload}
              /> Add Logo
            </Row>

            &nbsp;
           

            {imageList ? imageList.map((image, index) => (
              <div key={index}>
                <Row justify='center'>
                    <div style={{borderRadius:"360px", overflow:"hidden"}}>
                            <Image 
                            src={ image.data_url }
                            height={150} width={150} layout="intrinsic"/>
                    </div>
                </Row>
                <div className="image-item__btn-wrapper">
                  
                  {/* <FontAwesomeIcon icon="fa-solid fa-pen" /> */}
                <Row justify="end">
                  <EditOutlined 
                  style={{fontSize:30}}
                  onClick={() => onImageUpdate(index)}/>
                </Row>  
                </div>
              </div>
            )) : <Row justify='center'>
            <PlusOutlined 
            style={isDragging ? { color: "red" , fontSize:40} : {fontSize:40}}
             {...dragProps}
            onClick={onImageUpload}
            /> Add Logo
          </Row>}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}


export default ImageUpload;