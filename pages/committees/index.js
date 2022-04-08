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
        <title>Committees- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <VideoBackground />
      <Header/>
      <Center  fontSize="6xl" fontWeight="bold" color="white">
        Committees
      </Center>
      <br/>
      <br/>
      
      <Center  fontSize="2xl" fontWeight="bold" color="white">
      Advisory Committee
      </Center>
       <br/>
      <Text marginStart={"200"}color="white">
      <Text fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Dr. M. B. Dagaonkar                         Rev. Fr. Saturnino Almeida          </pre></Text> 
      <pre>Past Council Member, IEI and Past Chairman IEI MSC                Regional Superior and Managing Director, ATEC, Vashi.                      </pre> 
      <br/>
      <Text fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Cdr. Dr. Bhaskar Bhandarkar                 Dr. S. M. Khot         </pre></Text> 
      <pre>IEI Council Member                                                Principal, FCRIT Vashi                      </pre> 
      <br/>
      <Text fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Er. Vijay C. Kamble                         Dr. Milind Shah           </pre></Text> 
      <pre>Hon. Secretary IEI MSC                                            Dean (Academics) and Head, EXTC Engg. Dept.<br/>                                                                  FCRIT Vashi.                     </pre> 
      <br/>
      <Text fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Dr. Kishanrao M. Godbole                    Dr. Lata Ragha           </pre></Text> 
      <pre>Chairman, IEI BLC                                                 Dean (P.G. Studies) and Head, Comp. Engg. Dept.,<br/>                                                                  FCRIT Vashi                     </pre> 
      <br/>
      <Text fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Er. Sanjay R. Bagul                         Dr. Bindu S.          </pre></Text> 
      <pre>Hon. Secretary, IEI BLC                                           Dean (Student Affairs) and Head, Elect. Engg. Dept.,<br/> FCRIT Vashi..                      </pre> 
      <br/>
      <Text fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Er. Keshav K. Verkhedkar                    Dr. Sushil Thale        </pre></Text> 
      <pre>Imm. Past Chairman, IEI BLC.                                      Dean (R &D), FCRIT Vashi.                       </pre> 
      <br/>
      <Text fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Dr. Samir C. Nimkar  </pre></Text> 
      <pre>Imm. Past Hon. Secretary, IEI BLC  </pre> 

      

      </Text>
      <br/>
      <br/>
      <Center  fontSize="2xl" fontWeight="bold" color="white">
      Faculty In-Charge
      </Center>
      <br/>
      <Center  fontSize="2xl" fontWeight="bold" color="white">
      Venue
      </Center>
      <br/>
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Dr. Mini .N (Elec)-Chair</Center>
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Mr. Abhishek (Elec)</Center> 
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Ms. Smitha R (IT)</Center> 
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Mr. Vipin Sawant (Elec)</Center> 
      <br/><br/><br/>
      <Center  fontSize="2xl" fontWeight="bold" color="white">
      Publicity
      </Center>
      <br/>
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Dr. Aqleem (Mech)-Chair</Center>
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Mr. Mritunjay (Comp)</Center> 
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Ms. Ruchi (Elec)</Center> 
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Mr. Sandeep (Mech)</Center> 
      <br/><br/><br/>
      <Center  fontSize="2xl" fontWeight="bold" color="white">
      Registration & finance
      </Center>
      <br/>
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Dr. Jyoti More(Comp)-Chair</Center>
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Ms. Rupali D (IT)</Center> 
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Ms. Anitha J (EXTC)</Center> 
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Mr. Pramod More (Comp)</Center> 
      <br/><br/><br/>
      <Center  fontSize="2xl" fontWeight="bold" color="white">
      Scrutiny (Internal and IEI members)
      </Center>
      <br/>
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Ms. Megha K (EXTC)-Chair</Center>
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Dr. Anant K (EXTC)</Center> 
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Dr. Sanjay R (Mech)</Center> 
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Dr. Pritha (HUM)</Center> 
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Mr. Prashant (EXTC)</Center> 
      <br/><br/><br/>
      <Center  fontSize="2xl" fontWeight="bold" color="white">
      Hospitality and media
      </Center>
      <br/>
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Ms. Archana (IT)-Chair</Center>
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Mr. Rahul J (Comp)</Center> 
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Mr. Kamlesh (Mech)</Center> 
      <Center color="white" fontWeight={"bold"} fontSize="2xl">Mr. Biony Alex (IT)</Center> 
      <br/>
      
      <br/><br/><br/>
      <Footer/>
    </div>
  )
}
