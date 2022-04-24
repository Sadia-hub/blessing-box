import CustomLayout from '../src/components/layouts/customLayout'
import CustomCarousel from '../src/components/ui/support/CustomCarousel'
import InfoCard from '../src/components/ui/support/InfoCard'
import Categories from '../src/components/ui/support/Categories'
import DefineStep from "../src/components/ui/support/DefineStep"
import ContactUs from "../src/components/ui/support/ContactUs"

export default function Home() {
  return<CustomLayout>
        <CustomCarousel/>
        <InfoCard/>

        <Categories />

        <DefineStep />

        <ContactUs />

  </CustomLayout>
}
