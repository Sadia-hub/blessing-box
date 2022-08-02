import CustomLayout from '../src/components/layouts/customLayout';
import RegisterNGO from '../src/components/ui/support/RegisterNGO'


const NGORegistration = () =>{
    const handleRegister = ()=>{
        alert("registered");
    }
    return<CustomLayout>
        <RegisterNGO  handleRegister={handleRegister}/>
    </CustomLayout>
}

export default NGORegistration;