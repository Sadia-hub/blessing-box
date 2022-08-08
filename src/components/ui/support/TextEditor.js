import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import {useState, useEffect} from 'react'
import { EditorState, convertToRaw, ContentState, convertFromHTML} from 'draft-js';
import { EditOutlined} from '@ant-design/icons';

import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import {Card } from 'antd'

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


function TextEditor({data, setData, defaultContent=""})  {

  const [content, setContent] = useState();
  useEffect(()=>{

    if(data){
      const blocksFromHtml = convertFromHTML('<p>hello world </p>');
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);

     // console.log(contentState)
      // const editorState= EditorState.createWithContent(contentState);
  
      // var rawJson = convertToRaw(editorState.getCurrentContent()); 
      // var data =  Object.assign({}, rawJson);
      // var content = convertFromRaw(data);
      //setContent(()=>EditorState.createWithContent(content));

      setContent(()=>contentState)
    }
   

  },[data]);



    const[ editorState, setEditorState] = useState(EditorState.createEmpty())

    const [editedData, setEditedData] = useState();
    //stores editor content in json format suitable to be stored in the database
   
    //to toggle between edit and preview buttons
    const [toggle, setToggle] = useState(true);



    //toggler function
    const toggleButton = () =>{
        setToggle((prev)=>!prev);
    }

    //if true editor text wont be rendered for preview
    const isEmpty = obj => {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) return false;
        }
        return true;
      };


    const onEditorStateChange = (editorState) =>{  
        
        setEditorState(()=>editorState)
        var rawJson = convertToRaw(editorState.getCurrentContent());  
        setData(()=>draftToHtml(rawJson))

    }

      return (
        <>
        
        {toggle?(
            <div style={{width:"95%"}}>
            {/* <button onClick={toggleButton}>Preview</button> */}

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
                      editorState={editorState}
                      wrapperClassName="demo-wrapper"
                      onEditorStateChange={onEditorStateChange}
                      toolbar={toolbar}
                      toolbarOnFocus
                      defaultEditorState={content}
                    />
                </Card>


            </div>
            </div>
        ):(<div style={{width:"95%"}}   >
            {isEmpty(data) ? (
                        <EditOutlined 
                        style={{fontSize:30}}
                        onClick={toggleButton}/>
                       ) : (
                        <div>
                        <EditOutlined 
                        style={{fontSize:30}}
                        onClick={toggleButton}/>
                            <DisplayEditorContent value={data} />
                        </div>
                       )}
             </div>)}
        
        
       

        </>
      )
    
  }

  export default TextEditor
  