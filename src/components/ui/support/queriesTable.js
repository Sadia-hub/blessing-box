import { Form, Input, Modal} from 'antd';
import { useTable, usePagination } from 'react-table';
import { useEffect, useMemo, useState } from 'react';
import apiCall from './apiCall';
import { CustomButton } from '../buttons/buttons';
import { useSelector, useDispatch } from 'react-redux';
import {setContactInfo } from '../../../redux/contact/Action';
import style from '../../../../styles/queriestable.module.css';
const QueriesTable = () => {
    
    const dispatch = useDispatch();
    const { TextArea } = Input;
    const[token, setToken] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const[reply, setReply] =useState('');
    const[email, setEmail] =useState('');
    const[id, setId] =useState('');
    
    //strore token
    // useEffect(()=>{
    //  setToken(localStorage.getItem(userInfo.id))
    // },[])

    const Columns = [  
             {
                 Header: 'Email',
                 accessor: 'email'
             },
             
             {
                 Header: 'Message',
                 accessor: 'message'          
             },    
             {
                Header: 'Reply',
                accessor: 'button'          
            },    
           
       ];

       const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleReturn = () => {
        setIsModalVisible(false);
      };

      const GetQueries = () => {
        apiCall('contact',null, "GET", null, null)
              .then((res)=>{
                console.log("res of contact is",res)
                dispatch(setContactInfo(res))
              })
              .catch((err)=>{
                console.log(err.message)
              })
      }
     
      const GetDetails =(id) =>{
        apiCall(`contact/${id}`, null, "GET", null, null)
        .then((res)=>{
          console.log("res of getDetails is",res)
          setEmail(res[0].email)
          setId(res[0].id)
        })
        .catch((err)=>{
          console.log(err.message)
        })
        showModal();
      }

const body={
  id: id,
  email: email,
  reply: reply
}
const PostReply = () => {
  apiCall('sendreply', JSON.stringify(body), "POST", null, null)
        .then((res)=>{
          console.log("res of contact is",res)
          setIsModalVisible(false)
          // {()=>setReply('')}
          GetQueries()
        })
        .catch((err)=>{
          console.log(err.message)
        })
      
}

   const contactInfo = useSelector((state)=>state.contactReducer)
   
        var details = contactInfo.map((user)=>{ 
           return {
             email: user.email,
             message:user.message,
             button: <CustomButton label="Reply" className={style.reply} onClick={()=>{GetDetails(user.id)}} disabled={false} shape='round'/>,            
           }
         })   

           const columns = useMemo(()=> Columns, [])
           const data = useMemo(()=> details, [contactInfo])
   
       const tableInstance = useTable({
           columns,
           data
         }, usePagination)
         const {getTableProps, getTableBodyProps, headerGroups, nextPage, previousPage, canNextPage, 
           pageOptions,
           state,
           canPreviousPage, prepareRow, page } = tableInstance;
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
             <CustomButton label="Previous" className='' onClick={()=> {previousPage()}} disabled={!canPreviousPage} />   
             <CustomButton label="next" className='' onClick={()=> nextPage()} disabled={!canNextPage} />   
             {/* canpreviousPage */}
             </div>

          <Modal title="Send Reply" visible={isModalVisible} onCancel={handleReturn} footer={[
          <CustomButton htmlType="submit" label="cancel" className={style.modalBtn} type="primary" onClick={handleReturn}  disabled={false} shape='round'></CustomButton>  , 
          <CustomButton htmlType="submit" label="Send" className={style.modalBtn} type="primary" onClick={PostReply}  disabled={false} shape='round'></CustomButton>   
          
       ]} >
        <Form.Item
        label="Reply"
        rules={[{ required: true,  message: 'Please input your username!' }]}
        >
        <TextArea rows={4} onChange={(e)=>setReply(e.target.value)} />
      </Form.Item>
     
      </Modal>
             </>
         )
   }
   export default QueriesTable;