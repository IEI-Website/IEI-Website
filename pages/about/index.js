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
      <Box alignContent={"center"}>
      <Text color="black" >
      <Center fontWeight="bold" color="black" fontSize="2xl">
      Information Required from the Nominees <br/></Center>
      <br/>
      <Center fontWeight="bold" color="black" fontSize="2xl">
      General Instructions <br/></Center>
      <br/>
      <Text marginStart={"300"}color="black">
      1.	Registrations for applying are open from… Please register on the link.<br/>
      2.	The Fees for processing the applications has to be paid at the time of registration. The amount is as follows. <br/>
      <Text marginStart={"50"}color="black">
            UG students: <br/>
            PG students: <br/>
            Research Scholars: <br/>
            Teaching Faculty: <br/>
            </Text>
      3.	All the proposals are to be uploaded on or before ……….. The website link for uploading proposal:<br/> 
      4.	National Category includes all Centrally funded Institutes ( IIT’s, NIT’s etc.), UGC approved Technical Universities, all AICTE approved Engineering Institutes outside Maharashtra.<br/>
      5.	Regional Category includes all Engineering Institutes in Maharashtra affiliated to Maharashtra Universities Act. <br/>
      6.	Proposals sent in hard copies will not be considered. <br/>
      7.	Please ensure and preserve the receipt of candidature and proposal number allotted to you for future communication. <br/>
      
      8.	Contact number:  022-27771000- Extn: 320 or 413  <br/>
      <Text marginStart={"50"}color="black">
       Office Hours : 10 am to 4.30 pm  <br/>
      Email id: ieifcritawards@fcrit.ac.in<br/></Text>
      9.	Scrutiny of applications will be in three stages: <br/>
      <Text marginStart={"50"}color="black">
      -	First Stage: Registration and Entry Level Criteria Proofs <br/>
      -	Second Stage: Document submission <br/>
      -	Third Stage: Resolving issues/concerns raised by the Jury <br/>
      </Text>
      Compulsory Documents for all Categories <br/>
           Essential documents to be submitted on the website with registration are : <br/>
            <Text marginStart={"50"}color="black">
      1.	Identity proof (Institute’s Identity Card) <br/>
      2.	Proof of affiliation <br/>
      3.	Passport size recent photograph not exceeding…. MB <br/>
      4.	A CV of the applicant not exceeding 6 pages PDF format. Please use clickable links for information that does not fit in the required number of pages. The link should be on official website. <br/> 
      5.	The detailed guidelines are provided in the table below. <br/>
      </Text>
</Text>
      </Text>
      </Box>
      <br/><br/><br/>
      <Footer/>
    </div>
  )
}
