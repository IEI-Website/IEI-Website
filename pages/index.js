import Head from 'next/head'
import Image from 'next/image'
import {Center} from "@chakra-ui/react";
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
      <Center  fontSize="5xl" fontWeight="bold" color="black">
        Welcome To IEI-BLC FCRIT Awards
      </Center>
      <br/>
      <Center  fontSize="3xl" color="black">
        <Image src="/fcritlogo.png"width={200} height={200} />
        <Image src="/iei.png"width={200} height={200} />
      </Center>
      <br/>
      <Center fontSize="4xl" color="black">
        Awards for academic and research excellence
      </Center>
      <br/><br/><br/><br/>
      <Footer/>
    </div>
  )
}
