import Head from 'next/head'
import Image from 'next/image'
import {Center} from "@chakra-ui/react";
import VideoBackground from "../pages/components/VideoBackground";
import Header from "../pages/components/Header";
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <Header/>
      <Center  fontSize="6xl" fontWeight="bold" color="white">
        Welcome To IEI-BLC FCRIT Awards
      </Center>
      <br/>
      <Center  fontSize="3xl" color="white">
        <Image src="/fcritlogo.png"width={200} height={200} />
        <Image src="/iei.png"width={200} height={200} />
      </Center>
      <br/>
      <Center fontSize="4xl" color="white">
        Awards for academic excellence
      </Center>
      <br/><br/><br/>
      <Footer/>
    </div>
  )
}
