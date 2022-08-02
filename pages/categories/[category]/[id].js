import {useRouter} from 'next/router'
import { useSelector } from 'react-redux';
import NgoDetails from '../../../src/components/ui/support/NgoDetails';

const Id = () =>{
    const state = useSelector((state)=> state.userReducer);
    console.log(state.type)
    return<>
        {state.type=="Ngo"?<NgoDetails  editable={true}/>:<NgoDetails  editable={false}/>} 
    </>
}
export default Id;