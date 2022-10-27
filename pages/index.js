import CustomLayout from '../src/components/layouts/customLayout'
import CustomCarousel from '../src/components/ui/support/CustomCarousel'
import InfoCard from '../src/components/ui/support/InfoCard'
import Categories from '../src/components/ui/support/Categories'
import DefineStep from '../src/components/ui/support/DefineStep'
import WhyChooseUs from '../src/components/ui/support/WhyChooseUs';
import ProvideServices from '../src/components/ui/support/ProvideServices';
import ContactUS from '../src/components/ui/support/ContactUs'

export default function Home() {
  return<CustomLayout>
    <CustomCarousel/>
    {/* <InfoCard/> */}
    <WhyChooseUs/>
    <ProvideServices/>
    <Categories />
    <DefineStep/>
    <ContactUS/>
  </CustomLayout>
}
