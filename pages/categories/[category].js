import NgoCard from "../../src/components/ui/support/NgoCard";
import CustomLayout from "../../src/components/layouts/customLayout";
import { Row, Col, Pagination } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router'

const Categories = (xs=22, sm=11, md=8, lg=5) =>{
    const router = useRouter()
    const { category } = router.query
    const details = useSelector((state)=> state.detailsReducer);
    console.log("In details ", details);
    const ngos = details[category]
    console.log("food is",ngos);
    const [pageNo, setPageNo] = useState(0);
    const [pageSize,setPageSize] = useState(10);
  

    const handlePageChange = (page, size) =>{
        console.log("page ", page);
        console.log("page size ", size);

        let startIndex = page-1;
        setPageNo(()=>startIndex*size);
        setPageSize(()=>size*page);
    }
   
    return <CustomLayout>
               
                <div>
                    <Row justify="center" style={{marginTop:"100px"}}>
                        {
                        ngos.slice(pageNo, pageSize).map((ngo)=>{
                         return <Col 
                                key={ngo.id}
                                xs={{ span: 22 }}  
                                sm={{span: 11}}  
                                md={{ span: 8 }} 
                                lg={{span:5}}> 
                                <div
                                onClick={()=>router.push(`${ngo.ngo.serviceType}/${ngo.ngo.id}`)}
                                >
                                    <NgoCard title={ngo.ngo.name}  desc={ngo.about_us} src={ngo.image}/>
                                </div>       
                                
                            </Col>
                            
                            })
                        }
                    </Row>

                    <Row justify="center">
                        <Pagination size="small" total={ngos.length} 
                        showSizeChanger 
                        showQuickJumper 
                        onChange={handlePageChange}/>
                    </Row>
                    <Row justify="center">
                        {` Total Pages : ${Math.ceil(ngos.length/pageSize)}`}
                    </Row>
                </div>        
                     
        </CustomLayout>
}
export default Categories;