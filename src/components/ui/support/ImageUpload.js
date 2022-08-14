import ImageUploading from "react-images-uploading";
import {useState} from 'react'
import Image from 'next/image';
import {Row} from 'antd'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EditOutlined, PlusOutlined  } from '@ant-design/icons';

//import "./styles.css";

function ImageUpload({
  title="Add Logo",
  data, setData, 
  imageUrl="", 
  style={borderRadius:"360px", overflow:"hidden"}}) {

  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const [data_url, setData_url] = useState("")

  console.log(imageUrl)

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
   // setImages(imageList);
    setData(()=>imageList[0]);
    setData_url(()=>imageList[0].data_url);
     console.log("imageList",imageList[0])
  };

  return (
    <div className="App">
      <ImageUploading     
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "pdf"]}
      >
        {({        
          onImageUpload,
          onImageUpdate,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div>

            &nbsp;         

            {data_url || imageUrl? (
              <div>
                <Row justify='center'>
                    <div style={style}>
                            <Image 
                            src={ data.data_url  }
                            height={150} width={150} layout="intrinsic"/>
                    </div>
                </Row>
                <div className="image-item__btn-wrapper">
                  
                
                <Row justify="end">
                  <EditOutlined 
                  style={{fontSize:30}}
                  onClick={() => onImageUpdate(0)}/>
                </Row> 
                {/* <PlusOutlined 
                style={isDragging ? { color: "red" , fontSize:40} : {fontSize:40}}
                {...dragProps}
                onClick={onChange}
                /> {title}  */}
                </div>
              </div>
            ) : <Row justify='center'>
                    <PlusOutlined 
                    style={isDragging ? { color: "red" , fontSize:40} : {fontSize:40}}
                    {...dragProps}
                    onClick={onImageUpload}
                    /> {title}
                </Row>}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}


export default ImageUpload;