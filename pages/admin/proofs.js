import React, { useState, useMemo } from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import NgoAdminLayout from '../../src/components/layouts/NgoAdminLayout'
import { Button, Modal} from 'antd'
import { useTable, usePagination } from 'react-table';
import style from '../../styles/queriestable.module.css';
import {useSelector} from 'react-redux'
import apiCall from '../../src/components/ui/support/apiCall';


function Proofs() {

  const { confirm } = Modal;
    
  /**when report not uploaded button title is Upload. Once report has been uploaded into the database
   * Button's title changes to Uploaded 
   * */ 
  const [btn, setBtn] = useState("Upload")
  const [disabled, setDisabled] = useState(false)
  const [reportData, setReportData] = useState(new FormData());

  const Columns = [  
    {
        Header: 'Project Id',
        accessor: 'id'
    }, 
    {
        Header: 'Title',
        accessor: 'title'          
    },    
    {
       Header: 'Fund Collected',
       accessor: 'target'          
   },   
   {
     Header: 'Upload Expenditure Report',
     accessor: 'input' 
   } 
  
];

const uploadFile =(e) =>{

  const files = e.target.files;
 

  console.log(files[0])
  const formData = new FormData();
  formData.append('file', files[0]);
  formData.append('upload_preset', 'my-uploads');

  setReportData(()=>formData)

}

const showConfirm = (projectId) => {
  confirm({
    title: 'Are you sure, you want to upload this report?',
    icon: <ExclamationCircleOutlined />,
   

    async onOk() {
      try{
        const res = await fetch('https://api.cloudinary.com/v1_1/blessing-box/image/upload', {
        method: 'POST',
        body: reportData
      })

      const file = await res.json();

        if(file.secure_url){
          console.log("doc",file.secure_url)

          const body = {
            document:file.secure_url,
            projectId
          }

          console.log("body", body)

          apiCall(`proof`,JSON.stringify(body), "POST", null, null)
          .then((res)=>{

            Modal.success({
              title: 'This is a notification message',
              content: `Done Uploading.`,
            });
              setReportData(()=> new FormData())
              
          })
          .catch((err)=>{
             console.log(error)
          })
        }
        else{
          Modal.error({
            title: 'This is an error message',
            content: "Something went wrong!",
        });
        }
        
        
      }
      catch(err){
        console.log(err )
        Modal.error({
          title: 'This is an error message',
          content: err.message,
      });
      }
      
    },

    onCancel() {},
  });
};



<Button disabled={disabled} onClick={()=>uploadReport()}>Upload</Button>

const projects = useSelector((state)=>state.detailsReducer.ngo.projects)
const updatedProject = projects.filter((project)=>project.amountRecieved >= 100);
console.log("projects", projects)
   
        var details = updatedProject.map(({id, title, target})=>{ 
           return {
              id,
              title,
              target,
             input:  <div><input type="file" name="file" onChange={uploadFile} style={{marginLeft: 30}}/><Button onClick={()=>showConfirm(id)}>Upload</Button></div>,            
           }
         })   

           const columns = useMemo(()=> Columns, [])
           const data = useMemo(()=> details, [projects])

           const tableInstance = useTable({
            columns,
            data
          }, usePagination)
          const {getTableProps, getTableBodyProps, headerGroups,
          state, prepareRow, page } = tableInstance;
          




  return (
    <NgoAdminLayout>

   

            
        
             <table className={style.table} {...getTableProps()}>
             <thead className={style.table_heading}>
               {
                 headerGroups.map((headerGroup) => (
                   <tr  className={style.table_tr}{...headerGroup.getHeaderGroupProps()}>
                   
                     {headerGroup.headers.map((column)=>(
                       <th  {...column.getHeaderProps()}>{column.render('Header')} </th>
                     ))}
                  
                    </tr>
                     ))}
             
             </thead>
             <tbody {...getTableBodyProps()}>
               {
                 page.map(row =>{
                   prepareRow(row)
                   return(
                     <tr className={style.table_tr} {...row.getRowProps()}>{
                       row.cells.map((cell) =>{
                         return <td className={style.table_td} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                       })
                     }                 
                     </tr>
                   )
                 }) }    
             </tbody>
             
             </table>

    </NgoAdminLayout>
  )
}

export default Proofs;