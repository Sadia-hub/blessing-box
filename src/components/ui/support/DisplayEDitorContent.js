import React from "react";

import { Editor } from "react-draft-wysiwyg";
import {Divider} from 'antd'
import { Card } from 'antd';
import {useState, useEffect} from 'react';
import htmlToDraft from 'html-to-draftjs';

import { EditorState, convertToRaw, ContentState, convertFromRaw } from 'draft-js';

export default function DisplayEditorContent({value}) {
  //const content = convertFromRaw(props.value);
  const[content, setContent] = useState();


  useEffect(()=>{

    const blocksFromHtml = htmlToDraft(value);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState= EditorState.createWithContent(contentState);

    var rawJson = convertToRaw(editorState.getCurrentContent()); 
    var data =  Object.assign({}, rawJson);
    var content = convertFromRaw(data);
    setContent(()=>EditorState.createWithContent(content));

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

