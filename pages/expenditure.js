import React, {useState, useMemo} from 'react'
import CustomLayout from '../src/components/layouts/customLayout';
import { useSelector } from 'react-redux';
import style from '../../../../styles/queriestable.module.css';
import { useTable, usePagination } from 'react-table';

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
     Header: 'View Report',
     accessor: 'anchor' 
   } 
  
];
const projects = useSelector((state)=>state.detailsReducer.ngo.projects)
   
        var details = projects.map(({id, title, target})=>{ 
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
          

function Expenditure() {
  return (
    <CustomLayout>
    <div>Expenditure</div>
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
    </CustomLayout>
  )
}

export default Expenditure