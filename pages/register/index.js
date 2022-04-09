import Head from 'next/head'
import Image from 'next/image'
import {Center, FormControl, FormLabel, Input, VStack, Button} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Main } from 'next/document';
import Details from './UserInfo.js';
export default function Home() {
//   const handleSubmit = () => inputRef.current?.click()

//   return (
//       <InputGroup onClick={handleClick}>
//         <input
//           type={'file'}
//           multiple={multiple || false}
//           hidden
//           accept={accept}
//           {...rest}
//           ref={(e) => {
//             ref(e)
//             inputRef.current = e
//           }}
//         />
//         <>
//           {children}
//         </>
//       </InputGroup>
//   )
// }
  return (
    <div>
      <Head>
        <title>Registration- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      {/* <VideoBackground /> */}
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
      <form action='fileupload' method="post" encType="multipart/form-data">
      <FormControl >
          <Details />
          <Button type="submit" size="lg" w="full" >
            Submit
          </Button>
      </FormControl>
      </form>
      <Footer/>
    </div>
  )
}
