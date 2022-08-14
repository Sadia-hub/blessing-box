import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import {useState, useEffect} from 'react'
import { EditorState, convertToRaw, ContentState, convertFromHTML} from 'draft-js';
import { EditOutlined} from '@ant-design/icons';

import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import {Card } from 'antd'
import { useSelector } from 'react-redux';
import DisplayEditorContent from './DisplayEDitorContent';

const toolbar = {
  options: ['inline', 'textAlign', 'list'],
  
  inline: {
    options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
    bold: { className: 'bordered-option-classname' },
    italic: { className: 'bordered-option-classname' },
    underline: { className: 'bordered-option-classname' },
    strikethrough: { className: 'bordered-option-classname' },
    code: { className: 'bordered-option-classname' },
  },
  
  textAlign: { 
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ['left', 'center', 'right', 'justify'],
  },
     
  list: {
      inDropdown: false,
      
      options: ['unordered', 'ordered'],
      
    },
 
}






function TextEditor()  {

  // const myState = useSelector((state)=> state.detailsReducer);
  // const ngos = myState.ngo.ngoDetail["services"]
 
  //const [content, setContent] = useState()
  

  // useEffect(()=>{
  //   const ngos = myState.ngo.ngoDetail[key]
  //   console.log("ngoData", ngos)
  // },[key])

  
//   useEffect(()=>{

//     console.log(key)
//     if(key){
//       const blocksFromHTML = convertFromHTML(key);
//     const state = ContentState.createFromBlockArray(
//       blocksFromHTML.contentBlocks,
//       blocksFromHTML.entityMap,
//     );

//   setContent(()=>EditorState.createWithContent(state))
//     }
    

// },[key]);

  const contentBlocks = convertFromHTML('<h1>Hello World</h1><p>Lorem ipsum ' +
  'dolor sit amet, consectetur adipiscing elit. Mauris tortor felis, volutpat sit amet ' +
  'maximus nec, tempus auctor diam. Nunc odio elit,  ' +
  'commodo quis dolor in, sagittis scelerisque nibh. ' +
  'Suspendisse consequat, sapien sit amet pulvinar  ' +
  'tristique, augue ante dapibus nulla, eget gravida ' +
  'turpis est sit amet nulla. Vestibulum lacinia mollis  ' +
  'accumsan. Vivamus porta cursus libero vitae mattis. ' +
  'In gravida bibendum orci, id faucibus felis molestie ac.  ' +
  'Etiam vel elit cursus, scelerisque dui quis, auctor risus.</p>');

const sampleEditorContent = ContentState.createFromBlockArray(contentBlocks);
const content= EditorState.createWithContent(sampleEditorContent)


     const[ editorState, setEditorState] = useState(EditorState.createEmpty())
    const onEditorStateChange = (editorState2) =>{  
      
        setEditorState(()=>editorState2)
        var rawJson = convertToRaw(editorState.getCurrentContent());  
       // setData(()=>draftToHtml(rawJson))
        console.log(draftToHtml(rawJson))

    }

      return (
        <>
            <div style={{width:"95%"}}>
            <div style={{
              width:"98%", 
              padding: "5px",
              background: "#ececec"}}>
                <Card
     
                  bordered={false}
                  style={{
                    width: "100%",
                    minHeight:400
                  }}
                >
                    <Editor
                     
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      onEditorStateChange={onEditorStateChange}
                      toolbar={toolbar}

                      defaultEditorState={content}
                    />
                </Card>


            </div>
            </div>
        
        
        
       

        </>
      )
    
  }

  export default TextEditor
  