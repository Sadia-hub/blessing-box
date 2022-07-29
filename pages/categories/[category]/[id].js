
import {useRouter} from 'next/router'
import { useSelector } from 'react-redux';
import NgoDetails from '../../../src/components/ui/support/NgoDetails';

const Id = () =>{
    const state = useSelector((state)=> state.userReducer);
    console.log(state.type)
    const router = useRouter();
   
    return<>
        {state.type=="donor"?<NgoDetails  editable={false}/>:<NgoDetails  editable={true}/>}
        
    </>
}

export default Id;