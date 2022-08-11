import {useRouter} from 'next/router'
import { useSelector } from 'react-redux';
import NgoDesc from '../../../src/components/ui/support/NgoDesc';

const Id = () =>{
    const state = useSelector((state)=> state.userReducer);
    console.log(state.type)
    return<>

        <NgoDesc/> 

    </>
}
export default Id;