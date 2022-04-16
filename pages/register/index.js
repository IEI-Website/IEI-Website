import Head from 'next/head'
import Image from 'next/image'
import {Center, FormControl, FormLabel, Input, VStack, Button} from "@chakra-ui/react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Main } from 'next/document';
import Details from './UserDetails.js';
import axios from 'axios';
export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Registration- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <Header/>
      <Center  fontSize="6xl" fontWeight="bold" color="white">
        Registration
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
      <FormControl >
          <Details id="details" />
      </FormControl>    
    <Footer/>
    </div>

  )
}
