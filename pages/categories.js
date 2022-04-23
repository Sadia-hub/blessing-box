import NgoCard from "../src/components/ui/support/NgoCard";
import CustomLayout from "../src/components/layouts/customLayout";
import { Row, Col } from "antd";
const ngos = [
    {   
        title:"Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        title:"Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        title:"Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        title:"Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        title:"Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        title:"Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        title:"Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        title:"Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },{
        title:"Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        title:"Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        title:"Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        title:"Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    },
    {
        title:"Chippa Welfare Association",
        description:"CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without any discrimination.",
        cover:"https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/"
    }
];

const Categories = (xs=22, sm=11, md=8, lg=5) =>{
    return <CustomLayout>
                {/* <Row justify='center'>
                    <Title>Where You Can Donate?</Title>
                </Row> */}
            
                <Row justify="center">
                    {
                        ngos.map((ngo)=>{
                            return <Col 
                            xs={{ span: 22 }}  
                            sm={{span: 11}}  
                            md={{ span: 8 }} 
                            lg={{span:5}}>        
                            <NgoCard title={ngo.title}  desc={ngo.description} src="/c1.svg"/>
                        </Col>
                        })
                    }
                </Row>
                
                
                     
        </CustomLayout>
}
export default Categories;