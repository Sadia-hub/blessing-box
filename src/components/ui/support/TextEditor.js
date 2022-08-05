import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import {useState} from 'react'
import { EditorState, convertToRaw} from 'draft-js';
import { EditOutlined} from '@ant-design/icons';

import DisplayEditorContent from './DisplayEDitorContent';


function TextEditor({data, setData})  {

    const[ editorState, setEditorState] = useState(EditorState.createEmpty())
  
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
        setData(()=>Object.assign({}, rawJson))
    }

      return (
        <>
        
        {toggle?(
            <div style={{width:"95%"}}>
            <button onClick={toggleButton}>Preview</button>
            <div style={{width:"95%"}}>
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={onEditorStateChange}
              
              toolbar={{
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
               
              }}
            />
            
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
  