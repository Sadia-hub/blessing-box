import style from '../../../../styles/table.module.css';
import { useTable, usePagination } from 'react-table';
import { useEffect, useMemo, useState } from 'react';
import apiCall from './apiCall';
import { useRouter } from 'next/router';
import { CustomButton } from '../buttons/buttons';
import { useSelector, useDispatch } from 'react-redux';
import { getPendingNgo } from '../../../redux/ngo/Action'; 

const BasicTable = () => {
 const router = useRouter();
 const dispatch = useDispatch();

 const userInfo = useSelector((state)=>state.userReducer)
 const[token, setToken] = useState('');
 //strore token
 useEffect(()=>{
  setToken(localStorage.getItem("token"))
 },[])
 console.log(token)
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
         {
          Header: 'Certificate',
          accessor: 'certificate',
         }
    ];

const GetPendingNgos = () => {
  apiCall('pendingngos',null, "GET", null, null)
        .then((res)=>{
          console.log("res in pending ngos",res)
          dispatch(getPendingNgo(res))
        })
        .catch((err)=>{
          console.log(err.message)
        })
}


    // const token = localStorage.getItem("token")
 
      const approveNgo = ( id, status) => {
        apiCall(`ngo/${id}/status/${status}`,null, "GET", null, null)
        .then((res)=>{
          console.log(res)
          GetPendingNgos();
        })
        .catch((err)=>{
          console.log(err.message)
        })   
       
      }

      const pendingNgo = useSelector((state)=> state.pendingNgosReducer);
      
    
      console.log("pendingNgo is",pendingNgo)
      var details =pendingNgo.map((ngo)=>{
        return {
          id: ngo.id,
          ngoName: ngo.name,
          approve:    <CustomButton  label="Approve" className={style.approve} onClick={()=>approveNgo(ngo.id, 1)} disabled={false} shape='round'/>,    
          disapprove: <CustomButton label="Disapprove" className={style.disApprove} onClick={()=>approveNgo( ngo.id, 0)} disabled={false} shape='round'/>,      
          view:      <CustomButton label="View NGO" className={style.view} onClick={()=>router.push(`viewngo/${ngo.id}`) } disabled={false} shape='round'/>,
          certificate: <CustomButton label="View Certificate" className={style.view} onClick={()=>window.open(ngo.certificate) } disabled={false} shape='round'/>
        }
      }) 

      console.log("details are",details)
      
        const columns = useMemo(()=> Columns, [])
        const data = useMemo(()=> details, [pendingNgo])

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