import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Checkbox,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';

import axios from 'axios'; 
import { Viewer, ProgressBar } from '@react-pdf-viewer/core';
import { ViewIcon } from '@chakra-ui/icons';

const Details = () => {
  // var pdf_file;
  const [pdfFile,setPdfFile] = useState(null);
  const [pdfUrl,setPdfUrl] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();
  const [checkVal, setCheckVal] = useState(false);

  function GeneratePdf() {
    var element = document.getElementById('form-print');
    html2pdf(element);
}
  
  const send = function(){
    var formData = new FormData();
      formData.append('userFile',pdfFile);
      console.log("file : "+pdfFile);
    
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
       }
           }
           for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + JSON.stringify(pair[1])); 
        }
        console.log("Check val ",checkVal)
    
    axios.post('http://localhost:3000/upload', formData, config)
    .then(res => {
      alert("Form submitted successfully !!!");
      console.log(JSON.stringify(res.data) + 'this is data after api call');
   })
   .catch(err => console.log(err));

  }
  const secondaryTextColor = 'black';

  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.files)
    var pdf_file = e.target.files[0];
    setPdfFile(pdf_file);
    setPdfUrl(URL.createObjectURL(pdf_file))
  }
  const checkBoxChange = (e) =>{
    e.preventDefault();
    console.log("check value",checkVal);
    setCheckVal(!checkVal);
  }


  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" >
      <VStack spacing={3} alignItems="flex-start">
        <Heading textColor={secondaryTextColor} size="2xl">Your details</Heading>
        <Text textColor={secondaryTextColor}>Please make sure you upload all the necessary Documents before submitting the form.</Text>
      </VStack>
      <form id='registration-form'>
      <SimpleGrid columns={1} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel textColor={secondaryTextColor}>Name</FormLabel>
            <Input id="name" placeholder="ABC" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel id='department' textColor={secondaryTextColor}>Department Name</FormLabel>
            <Input placeholder="Computer" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel textColor={secondaryTextColor}>Institute Name</FormLabel>
            <Input id='institute' placeholder="FCRIT" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel textColor={secondaryTextColor}>Semester</FormLabel>
            <Input id='sem' placeholder="6" />
          </FormControl>
        </GridItem>

         <GridItem colSpan={1}>
          <FormLabel>Upload all documents as a single pdf here</FormLabel>
          <input accept="application/pdf" type="file" id="userDoc" onChange={handleChange} />
          <br></br>
          <Button mt="5" mb="5" size="lg" onClick={() => {
            if(pdfUrl === null) {
              toast({
                title: 'PDF has not been uploaded yet!',
                description: "Please upload PDF for Preview",
                status: 'info',
                duration: 3000,
                isClosable: true,
              })
            } else {
              onOpen()
            }
            }} >
            Preview&nbsp;&nbsp;<ViewIcon />
          </Button>
          <br></br>
          <Modal isOpen={isOpen} onClose={onClose} size="2xl" scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>PDF Document Preview</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <iframe src={pdfUrl} width="500px" height="700px" />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

        <GridItem colSpan={2}>
          <Checkbox onChange={checkBoxChange} >I have checked all the details. I confirm that the details are true and I have uploaded all the documents.</Checkbox>
        </GridItem>

          <br></br>
          <Button mt="5" mb="5" bgColor="green.500"  onClick={send} type="submit"size="lg" >
            Submit
          </Button>
         </GridItem>
         <br/> 

      </SimpleGrid>
      </form>
    </VStack>
  );
};

export default Details;

