import React,{useMemo, useState} from 'react'
import CustomLayout from '../../src/components/layouts/customLayout';
import { useSelector } from 'react-redux';
import LeftMenu from '../../src/components/layouts/NgosNavbar';
import style from '../../styles/queriestable.module.css';
import { useTable, usePagination } from 'react-table';
import { Button, Row, Typography } from 'antd';
import { useRouter } from 'next/router'

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
     accessor: 'document' 
   } 
  
];

function Id() {

    const router = useRouter()

    
    const projects = useSelector((state)=>state.detailsReducer.proofs.projects)
    console.log("details", projects)
        var details = projects.map(({id,ngoId, title, target, proof})=>{ 
          if(true){
            return {
              id,
              title,
              target,
              document:  <Button onClick={()=>{window.open(proof.document,'_blank')}}>View</Button>           
           }
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
    <CustomLayout>
    <div style={{paddingTop:"80px"}}>
    
    <LeftMenu />
    </div>

    <Row align="middle" justify="center">
                <Typography.Title ellipsis> Expenditure Reports </Typography.Title>
    </Row>

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

export default Id;