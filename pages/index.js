import CustomLayout from '../src/components/layouts/customLayout'
import CustomCarousel from '../src/components/ui/support/CustomCarousel'
import InfoCard from '../src/components/ui/support/InfoCard'
import CustomCard from '../src/components/ui/CustomCard'

export default function Home() {
  return<CustomLayout>
    <CustomCarousel/>
    <InfoCard/>
    {/* <CustomCard title='Education'/> */}
  </CustomLayout>
}
