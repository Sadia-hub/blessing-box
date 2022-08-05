import React from "react";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import {Divider} from 'antd'
import { Card } from 'antd';


export default function DisplayEditorContent(props) {
  const content = convertFromRaw(props.value);
  const sdsd = EditorState.createWithContent(content);
  return (
    <div style={{
        padding: "5px",
        background: "#ececec"
      }}>
    <Card
     
      bordered={false}
      style={{
        width: "100%",
      }}
    >
       <Editor 
        toolbarHidden={true} 
        editorState={sdsd} 
        readOnly={true} />

    </Card>
  </div>
    // <div>
    //     <Divider/>
    //   <div>
    //     <Editor 
    //     toolbarHidden={true} 
    //     editorState={sdsd} 
    //     readOnly={true} />
    //   </div>
    // </div>
  );
}

// .site-card-border-less-wrapper {
//     padding: 30px;
//     background: #ececec;
//   }