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
      <Text fontSize="3xl" fontWeight="bold" color="black" marginStart={"300"}>
      IEI YOUNG ENGINEERS AWARD 2022-2023
      </Text>
      <br/>
      <Text>
      The Institution of Engineers (India) is a multi-disciplinary professional body of engineers with 15 engineering disciplines and over 9,00,000
members in India and abroad. The Institution was established in 1920 and was incorporated by Royal Charter in 1935. It has been in the forefront
of engineering profession addressing the socio engineering problems for progress of the country. IEI functions among professional engineers,
academicians, research workers to update their professional knowledge through continuous professional development. With its large international
linkages and a network of 125 Centres in India and Six Overseas Chapters, the Institution has built up wide reach and large infrastructure to meet
its objectives of promoting engineering in all aspects.
With a view to promote the pursuit of excellence in the field of engineering, IEI has instituted ‘IEI Young Engineers Award’. The Award consists of a
Plaque and a Certificate. The purpose of the Award is to recognize outstanding achievements/contributions made by young engineers in engineering
research, excellence in engineering technology development, technology transfer, etc. Any engineer citizen of India not older than 35 years of age
as on March 31, 2022 is eligible for the Award. The IEI Young Engineers Award is presented to awardees for all the 15 Engineering Divisions of the
IEI during the respective National Conventions. The awardees attending the National Convention will be provided with free accommodation & their
traveling expenses (AC-3 Tier train fare by shortest route) will be reimbursed on production of original documents.
The Application Proforma may be downloaded from the link https://www.ieindia.org/webui/IEI-Activities.aspx#young-engineering-awards.
Soft copy of the filled-in application proforma should be forwarded to award@ieindia.org by May 31, 2022. Further, six copies of the duly filled
application form, along with all supporting documents, endorsed by appropriate authority should be sent to the below mentioned address so as to
reach us latest by June 10, 2022:<br/>
Director (Technical)<br/>
The Institution of Engineers (India)<br/>
8 Gokhale Road, Kolkata 700020<br/>
      </Text>
      <br/><br/><br/>
      <Footer/>
    </div>
  )
}
