import React from "react";

import { Editor } from "react-draft-wysiwyg";
import { Card } from 'antd';
import {useState, useEffect} from 'react';

import { EditorState, ContentState, convertFromHTML } from 'draft-js';

export default function DisplayEditorContent({value}) {

  //const content = convertFromRaw(props.value);
  const[content, setContent] = useState();


  useEffect(()=>{

      console.log(value)
      if(value){
        const blocksFromHTML = convertFromHTML(value);
        const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      );

    setContent(()=>EditorState.createWithContent(state))
      }
      

  },[value]);
  
  
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
        editorState={content} 
        readOnly={true} />

    </Card>
  </div>
 
  );
}
