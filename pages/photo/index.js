import Head from 'next/head'
import Image from 'next/image'
import {Center} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photo Gallery</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <VideoBackground />
      <Header/>
      <Center  fontSize="6xl" fontWeight="bold" color="white">
        Photo Gallery
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
