import Head from 'next/head'
import Image from 'next/image'
import {Center,Text} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Categories- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <VideoBackground />
      <Header/>
      <Center  fontSize="6xl" fontWeight="bold" color="white">
      Award Categories
      </Center>
      <br/>
      <br/>
      <Text fontSize="3xl" fontWeight="bold" color="white" marginStart={"300"}>
     1. Research Excellence (National/Regional)
      </Text>
      <br/>
      <Text  fontSize="xl" color="white" marginStart={"350"}>
      <Text  fontSize="2xl" fontWeight="bold">
      (a)	Students <br/>
      </Text>
      <Text  fontSize="xl" color="white" marginStart={"50"}>
         -	Students (UG) <br/>
         -	Students (PG)<br/>
         -	Students (PhD)<br/>
         </Text>
         <br/>
      UG: Third Year and Final Year  in 2022 <br/>
      PG: Second year, ME in 2022 <br/>
      PhD: Registered scholars preferably on the verge of completion, exceptional PhD work in earlier stage is also welcome. <br/><br/>
      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      1. Research Narration document (Limit 200 words)<br/>
      2. A PPT comprising of Research work concisely ( Max of 10 slides)<br/>
      3. Endorsement letter from HOD<br/>
      4. Publications  <br/>
      (List of publications including Link and front page of journal papers).<br/>
      5. Photographs for innovative laboratory set-ups developed if any <br/>
      6. Patents filed documents if any <br/>
      7.Conference paper presentation certificates if any <br/>
      8.  Any other achievement <br/>
      9. Recommendation by Supervisor for PhD Scholar <br/>
      </Text>
      <br/>
      <br/>
      <br/>
      
      <Text  fontSize="2xl"color="white" marginStart={"350"} fontWeight="bold">
      (b)	Teaching Faculty <br/>
      </Text>
      <Text  fontSize="xl" color="white" marginStart={"350"}>
      Entry Level Criteria:<br/>
          ●	Faculty should be Doctorate in his/her discipline <br/>
          ●	The research carried out must be at the affiliated Institute and should not be the PhD research <br/>
          ●	This award is NOT for the overall career research but is for particular research that has been recently completed or on the verge of completion. <br/>
          (Please provide data for last three years)<br/> <br/>

      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      1. Research Narration document* (Limit 200 words)<br/>
      2. A PPT comprising of Research work concisely ( Max of 10 slides)<br/>
      3. Publications  <br/>
      (A pdf file consisting List of publications including Link and front page of journal papers).<br/>
      4. Photographs for innovative laboratory set-ups developed if any <br/>
      5. Patents filed documents if any <br/>
      6.Conference paper presentation certificates if any <br/>
      7. Research and consultancy project details if any <br/>
      8.  Any other achievement (prizes, award received) <br/>
      9. Research promotion activities if any (Endorsement letter by HOD) <br/>
      </Text>
      <br/>
      <br/>
      <br/>
      <Text  fontSize="xl" color="white" marginStart={"350"}>
      <Text  fontSize="2xl" fontWeight="bold">
      (c)	Researcher from Industry <br/>
      </Text>
      Entry Level Criteria<br/>
      The research should be the one conducted at the Organization currently affiliated with.<br/>
      Age limit: 40 years <br/>
      (Please provide data for last three years)<br/><br/>
      <Text fontWeight="bold">Note that the award is for a particular research and not researcher’s career. </Text>
      <br/>
      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      -One-page narrative on R&D contributions in the affiliated Industry/Organization<br/>
      -Research projects handled<br/>
      -Patents filed<br/>
      -Papers published in the Journals (give impact factor of the Journal)<br/>
      -Any other research-based achievements.<br/>
      Please provide supporting documents. <br/><br/>
      <Text fontWeight="bold">NOTE: In case of joint patent or publication, nominee should clearly mention his/her contribution in the narrative.<br/></Text>
      </Text>
      <br/>
      <br/>
      <br/>
      <Text  fontSize="xl" color="white" marginStart={"350"}>
      <Text  fontSize="2xl" fontWeight="bold">
      (d)	Researcher from Govt. Organization <br/>
      </Text><br/>
      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      <br/>
      Same as above
      </Text>
      <br/>
      <br/>
      <Text fontSize="3xl" fontWeight="bold" color="white" marginStart={"300"}>
     2. Academic Excellence (National/Regional)
      </Text>
      <br/>
      <Text  fontSize="xl" color="white" marginStart={"350"}>
      <Text  fontSize="2xl" fontWeight="bold">
      (a)	Students <br/>
      </Text>
      Entry Level criteria:<br/>
      -Students who are in final year in 2022 or passed out in A.Y 2020- 21<br/>
         <br/>
      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      -Results of all the semesters <br/>
      -Institute ranks <br/>
      -Scholarships received if any <br/>
      -Details of study circles/ talks/ presentations made on  technical topics and technical content delivered ,courses completed beyond academics<br/>
      -Any other academic achievements.<br/>

      </Text>
      <br/>
      <br/>
      <br/>
      <Text  fontSize="xl" color="white" marginStart={"350"}>
      <Text  fontSize="2xl" fontWeight="bold">
      (b)	Teaching Faculty <br/>
      </Text>
      Entry level:<br/>
    -Minimum 5 years of  teaching experience excluding probation<br/>

    (Please provide data for last three years)<br/><br/>

      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      -Span of your teaching experience, with domain  expertise <br/>
      -	Laboratory development <br/>
      -Content/course development on any platform <br/>
      -Courses conducted as a resource person, under STTP etc . <br/>
      -	Number of BE/ME/PhDs guided <br/>
      -Any other awards received previously<br/>
      -Well documented and supported effort for reaching out to students especially in pandemic period, and innovative content delivery during online teaching, will carry considerable weightage. <br/>
      -Any other achievement <br/>
      Kindly provide supporting documents for each point <br/>

      </Text>
      <br/>
      <br/>
      <br/>
      <Text  fontSize="xl" color="white" marginStart={"350"}>
      <Text  fontSize="2xl" fontWeight="bold">
      (c)	Head of the Department <br/>
      </Text>
      Entry Level criteria: <br/>
    -Should be currently serving as HOD  <br/>
    -Should be Professor <br/>
    (Please provide data for last three years)<br/>
<br/><br/>
      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      -Positions held in professional bodies/ Officiating bodies -Whether department is NBA (National Board of Accreditation) accredited in your tenure as HOD. <br/>
 -Contribution/s in R&D,Research Funding , Lab development undertaken for the department <br/>
  -Special contribution/s in academics, how did the department function efficiently <br/>
-Any leadership programs attended/ presented and their implementation at the department level. <br/>
 -Any new schemes implemented in the department to motivate faculty as well as students to improve the quality of academics <br/>
  -Any other achievement as a HOD<br/>
</Text>
      <br/>
      <br/>
      <br/>
      <Text  fontSize="xl" color="white" marginStart={"350"}>
      <Text  fontSize="2xl" fontWeight="bold">
      (d)	Principal/Director <br/>
      </Text><br/>
      Entry Level criteria: <br/>
    -Principals of Engineering colleges affiliated to AICTE <br/>
    Institute should have minimum five branches and at least 300 students <br/>
    (Please provide data for last three years)<br/><br/>

      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      <br/>
      - Principal <br/>
      -Positions held currently apart from your affiliated Institute <br/> 
      -Contribution in process development at university level  <br/>
      -Contribution in academic curriculum development  <br/>
      -Innovative methods pioneered by you for keeping the research culture vibrant in your Institute <br/>
      -Any new schemes introduced by you in your Institute to motivate faculty growth  <br/>
      -Whether Institute  is NAAC accredited during your tenure as Principal. <br/>
      -Efforts to facilitate faculty during online teaching of pandemic period <br/>
      -Any new techniques adapted by you to keep the interaction with students fruitful  <br/>
      -Any other achievements. <br/>
  
      </Text>
      <br/>
      <br/>
      <br/>
      <Text  fontSize="xl" color="white" marginStart={"350"}>
      <Text  fontSize="2xl" fontWeight="bold">
      (e)	Institute <br/>
      </Text><br/>
      Entry level criteria<br/>
The nomination can be filed by Dean Academics or Principal of the AICTE affiliated Institute. <br/>
The Institute should have at least three graduated batches. <br/>
The Institute should have at least five branches with minimum 300 students on roll.<br/>
(Please provide data for last three years) 
<br/><br/>

      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      
      -Ranking under different schemes like NIRF<br/>  
      -NBA status  <br/>
      -NAAC status  <br/>
      -First year passing percentage  <br/>
      -Graduate passing percentage  <br/>
      -Placements status  <br/>
      -Social activities taken up by the Institute  <br/>
      -Contribution to governing offices through projects/ consultancy  <br/>
      -Faculty retention  <br/>
      -Percentage of PhD faculty members. <br/>
      -Alumni contribution towards the development of institute. <br/>
      -Any educational reforms at institute level. <br/>
      -How Library facility/ e-resources were extended to students during pandemic period.<br/>
      -Any faculty/student encouragement policy. <br/>
      -Any other achievements.<br/>

      </Text>
      <br/>
      <br/>
      <br/>
      <Text fontSize="3xl" fontWeight="bold" color="white" marginStart={"300"}>
     3. Industry Excellence 
      </Text>
      <br/>
      <Text  fontSize="xl" color="white" marginStart={"350"}>
      
        Contribution towards Education <br/>
        Contribution towards Technology development<br/>
        Contribution towards society<br/>
        (Please provide data for last three years)<br/>

       <br/><br/>
      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      -Any tie-up with any academic Institute in the form of academic guidance, project guidance, industry visit, or sponsorship<br/>
      -Laboratory development at any academic Institute<br/>
      Kindly provide detailed relevant information with adequate proofs which may be web-link or other references. Photos of the information printed in newspaper or magazine can be uploaded to support the text filled in the Nomination Form.<br/>


      </Text>
      <br/>
      <br/>
      <br/>
      <Text fontSize="3xl" fontWeight="bold" color="white" marginStart={"300"}>
     4. Start-up Excellence Award
      </Text>
      <br/>
      <Text  fontSize="xl" color="white" marginStart={"350"}>
      
      Contribution towards Technology development<br/>
      Contribution towards society<br/>
      (Please provide data for last three years)<br/>


       <br/><br/>
      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
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
      <br/><br/><br/>
      <Footer/>
    </div>
  )
}
