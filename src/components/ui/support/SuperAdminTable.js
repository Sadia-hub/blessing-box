import { Row, Col, Divider, Button, Typography } from 'antd';
import style from '../../../../styles/table.module.css';
import { useTable, usePagination } from 'react-table';
import { useMemo, useEffect, useState } from 'react';
import apiCall from './apiCall';
import { useRouter } from 'next/router';
import { CustomButton } from '../buttons/buttons';

const BasicTable = () => {
 const [ngoData, setNgoData] = useState([]);
 const [ngoDetails, setNgoDetails] = useState({});
 const[count,setCount] = useState(0);
 const router = useRouter();
 const Columns = [
        {
          Header: 'NGO Id',
          accessor: 'id'
          },
          
          {
              Header: 'NGO Name',
              accessor: 'ngoName'
          },
          
          {
              Header: 'Diapprove',
              accessor: 'disapprove'          
          }, 
          
          {
            Header: 'Approve',
            accessor: 'approve'          
        }, 
        {
          Header: 'View',
          accessor: 'view'          
         },
        //  {
        //   Header: 'Report',
        //   accessor: '',
        //  }
    ];

    const details =[];
   
    
 
      useEffect(()=> {
        const token= localStorage.getItem("token");
        apiCall('pendingngos',null, "GET", null, token)
        .then((res)=>{
          console.log("res",res)
         
            
          details =res.map((ngo)=>{
            return {
              id: ngo.id,
              ngoName: ngo.name,
              approve:    <CustomButton label="Approve" className={style.approve} onClick={()=>approveNgo(ngo.id, 1)} disabled={false} shape='round'/>,    
              disapprove: <CustomButton label="Disapprove" className={style.disApprove} onClick={()=>approveNgo( ngo.id, 0)} disabled={false} shape='round'/>,      
              view:      <CustomButton label="View NGO" className={style.view} onClick={()=>router.push(`viewngo/${ngo.id}`)} disabled={false} shape='round'/>
            }
          }) 

        })
        .catch((err)=>{
          console.log(err.message)
        })
      })


    
      const approveNgo = ( id, status) => {
        apiCall(`ngo/${id}/status/${status}`,null, "GET", null, null)
        .then((res)=>{
          console.log(res)
        })
        .catch((err)=>{
          console.log(err.messae)
        })   
      }
     
     
        const columns = useMemo(()=> Columns, [])
        const data = useMemo(()=> details, [])

    const tableInstance = useTable({
        columns,
        data
      }, usePagination)
      const {getTableProps, getTableBodyProps, headerGroups, nextPage, previousPage, canNextPage, 
        pageOptions,
        state,
        canpreviousPage, prepareRow, page } = tableInstance;
        const {pageIndex } = state;
      return (
        <>
          <table className={style.table} {...getTableProps()}>
          <thead className={style.table_heading}>
            {
              headerGroups.map((headerGroup) => (
                <tr className={style.table_tr}{...headerGroup.getHeaderGroupProps()}>
                
                  {headerGroup.headers.map((column)=>(
                    <th {...column.getHeaderProps()}>{column.render('Header')} </th>
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
          <div className={style.text_center}>
            <span >
              Page{' '}
              <strong >
                {pageIndex +1} of {pageOptions.length}
              </strong>{' '}
            </span>
          <CustomButton label="Previous" className='' onClick={()=> previousPage()} disabled={!canNextPage} />   
          <CustomButton label="next" className='' onClick={()=> nextPage()} disabled={!canpreviousPage} />   
          </div>
          </>
      )
}
export default BasicTable;