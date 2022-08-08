import NgoDetails from "../src/components/ui/support/NgoDetails";
import { useSelector } from "react-redux";
const ngodetails = () =>{

    const state = useSelector((state)=> state.userReducer);
    
    console.log(state.type)
    const {id} = router.query;
   return<>
    {state.type=="Ngo"?<NgoDetails  editable={true}/>:<NgoDetails  editable={false}/>}
        {/* <NgoDetails editable={true}/> */}
    </>
}

export default ngodetails;