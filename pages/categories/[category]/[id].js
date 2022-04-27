
import {useRouter} from 'next/router'
import NgoDetails from '../../../src/components/ui/support/NgoDetails';

const Id = () =>{
    const router = useRouter();
    const {id} = router.query;
    return<>
        <NgoDetails id={id} editable={false}/>
    </>
}

export default Id;