
import {useRouter} from 'next/router'
import { useSelector } from 'react-redux';
import NgoDetails from '../../../src/components/ui/support/NgoDetails';

const Id = () =>{
    const type = useSelector((state)=> state.userTypeReducer);
    console.log("In register "+type);
    const router = useRouter();
    const {id} = router.query;
    return<>
        {type=="Donor"?<NgoDetails id={id} editable={true}/>:<NgoDetails id={id} editable={false}/>}
        
    </>
}

export default Id;