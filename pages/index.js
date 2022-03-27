import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CustomLayout from '../src/components/layouts/customLayout'
import CustomCarousel from '../src/components/ui/support/CustomCarousel'
import InfoCard from '../src/components/ui/support/InfoCard'
import Categories from '../src/components/ui/support/Categories'

export default function Home() {
  return<CustomLayout>
    <CustomCarousel/>
    <InfoCard/>
    <Categories />
  </CustomLayout>
}
