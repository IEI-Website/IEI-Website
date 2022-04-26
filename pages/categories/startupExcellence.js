import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import {Center,Text} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavBa from '../components/Navba';
const startupExcellence = () => {
    return (
        <div>
            <Header/><NavBa />
            <Text  fontSize="xl" color="black" marginStart={"350"}>
      <Text fontSize="3xl" fontWeight="bold" color="black" >
      Start-up Excellence Award
      </Text><br/>
      <Text color="black" fontSize="xl"  fontWeight="normal">
      Contribution towards Technology development<br/>
      Contribution towards society<br/>
      (Please provide data for last three years)<br/></Text>


       <br/>
      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      <Text color="black" fontSize="xl"  fontWeight="normal">
      -Year of Establishment<br/>
      -Names of Founders / Cofounders<br/>
      -Start-up - DPIIT Recognition<br/>
      -MSME Registration<br/>
      -Main Product or services offered<br/>
      -Key USP of the Product / services<br/>
      -Patent applied or received<br/>
      -Employment generated<br/>
      -Revenue Generated<br/>
      -Funding received till date (if any)<br/>
      -Any Awards won<br/>
      -Website URL<br/>

      Kindly provide detailed relevant information with adequate proofs which may be web-link or other references. Photos of the information printed in newspaper or magazine can be uploaded to support the text filled in the Nomination Form.<br/><br/>
      </Text>
      </Text>
      <Footer/>
        </div>
    );
};

export default startupExcellence;