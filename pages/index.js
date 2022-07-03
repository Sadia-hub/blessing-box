import CustomLayout from '../src/components/layouts/customLayout'
import CustomCarousel from '../src/components/ui/support/CustomCarousel'
import InfoCard from '../src/components/ui/support/InfoCard'
import Categories from '../src/components/ui/support/Categories'
import DefineStep from '../src/components/ui/support/DefineStep'
import WhyChooseUs from '../src/components/ui/support/WhyChooseUs';
import ProvideServices from '../src/components/ui/support/ProvideServices';
import ContactUS from '../src/components/ui/support/ContactUs'

import Roll from 'react-reveal/Roll';
import Jump from 'react-reveal/Jump';
export default function Home() {
  return<CustomLayout>
    <CustomCarousel/>
    <Roll top>
      <InfoCard/> 
    </Roll>
    <Roll left>
      <WhyChooseUs/>
    </Roll>
   
   <Roll right>
   <ProvideServices/>
   </Roll>
    
   <Roll left>
    <Categories />
    </Roll>

    <Roll right>
    <DefineStep/>
    </Roll>

    <Roll left>
    <ContactUS/>
    </Roll>

  </CustomLayout>
}
