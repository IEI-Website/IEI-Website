import Head from 'next/head'
import Image from 'next/image'
import {Box, Center,Text} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>About- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <VideoBackground />
      <Header/>
      <Center  fontSize="5xl" fontWeight="bold" color="black">
        About IEI-BLC FCRIT 
      </Center>
      <br/>
      
      <br/><br/><br/>
      <Footer/>
    </div>
  )
}
