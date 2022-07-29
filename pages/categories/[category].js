import NgoCard from "../../src/components/ui/support/NgoCard";
import CustomLayout from "../../src/components/layouts/customLayout";
import { Row, Col, Pagination } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router'

const ngos = [
    {   id:1,
        category:"education",
        title:"1Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        id:2,
        category:"education",
        title:"2Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        id:3,
        category:"education",
        title:"3Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        id:4,
        category:"education",
        title:"4Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        id:5,
        category:"food",
        title:"5Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        id:6,
        category:"food",
        title:"6Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        id:7,
        category:"food",
        title:"7Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        id:8,
        category:"food",
        title:"8Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },{
        id:9,
        category:"food",
        title:"9Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        id:10,
        category:"orphanage",
        title:"10Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        id:11,
        category:"orphanage",
        title:"11Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        id:12,
        category:"orphanage",
        title:"12Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        id:13,
        category:"orphanage",
        title:"13Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    }
];

const Categories = (xs=22, sm=11, md=8, lg=5) =>{
    const router = useRouter()
    const { category } = router.query
    const details = useSelector((state)=> state.detailsReducer);
    console.log("In details ", details);
    const ngos = details[category]
    console.log("food is",ngos);
    const [pageNo, setPageNo] = useState(0);
    const [pageSize,setPageSize] = useState(10);
    const [totalNgos, setTotalNgos] = useState(0);

    const handlePageChange = (page, size) =>{
        console.log("page ", page);
        console.log("page size ", size);

        let startIndex = page-1;
        setPageNo(()=>startIndex*size);
        setPageSize(()=>size*page);
    }
   
    return <CustomLayout>
                {/* <Row justify='center'>
                    <Title>Where You Can Donate?</Title>
                </Row> */}
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