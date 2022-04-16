import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Select,
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
import { jsPDF } from "jspdf";
import $, { merge } from "jquery";
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';


const Details = () => {
  // var pdf_file;
  const [pdfFile,setPdfFile] = useState(null);
  const [fieldsPdf, setFieldsPdf] = useState(null);
  const [pdfUrl,setPdfUrl] = useState(null);
  const [fieldsUrl, setFieldsUrl] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();
  const [checkVal, setCheckVal] = useState(Boolean(false));
  const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

async function mergePDF(urls) {
  
  const doc1 = await fetch(urls[0]).then(res => res.arrayBuffer())

  const doc2 = await fetch(urls[1]).then(res => res.arrayBuffer())

  // Load a PDFDocument from each of the existing PDFs
  const pdf1 = await PDFDocument.load(doc1)
  const pdf2 = await PDFDocument.load(doc2)

  // Create a new PDFDocument
  const mergedPdf = await PDFDocument.create();

  const copiedPagesA = await mergedPdf.copyPages(pdf1, pdf1.getPageIndices());
  copiedPagesA.forEach((page) => mergedPdf.addPage(page));

  const copiedPagesB = await mergedPdf.copyPages(pdf2, pdf2.getPageIndices());
  copiedPagesB.forEach((page) => mergedPdf.addPage(page));

  // const mergedPdfFile = await mergedPdf.save();
  // var mergedBlob = mergedPdf.saveAsBlob();
  console.log(typeof mergedPdf);
  window.open(URL.createObjectURL(mergedPdf), '_blank');
  console.log('merged pdf inside mergePDF ',typeof mergedPdf);
  return mergedPdf;
  // Trigger the browser to download the PDF document
  // download(mergedPdfFile, "pdf-lib_page_copying_example.pdf", "application/pdf");
}

async function modifyPdf(url) {
  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

  const pages = pdfDoc.getPages()
  const firstPage = pages[0]
  const { width, height } = firstPage.getSize()
  firstPage.drawText('This text was added with JavaScript!', {
    x: 5,
    y: height / 2 + 300,
    size: 50,
    font: helveticaFont,
    color: rgb(0.95, 0.1, 0.1),
    rotate: degrees(-45),
  })

  const pdfBytes = await pdfDoc.save('pdfBytes.pdf')
  return pdfBytes;
}
  async function send(){
    
    // var pdfDoc = await mergeAllPDFs([pdfUrl,fieldsUrl])
    var formData = new FormData();
    // setPdfFile(pdfDoc);
    // var mergedURL = URL.createObjectURL(pdfDoc);
    // setPdfUrl(mergedURL);
    formData.append('userDoc',pdfFile);
    formData.append('userDoc', fieldsPdf);
    // console.log(pdfDoc);
    // console.log("pdf Doc ",typeof pdfDoc);
    // if (checkVal==false){
    //   alert("please tick the check box !");
    // }
      // formData.append('userDetails',fieldsPdf);
      // setFieldsPdf(blobPDF);
      // formData.append('userDetails', blobPDF);
      // console.log("file : ",blobPDF);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
       }
           }
        //    for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + JSON.stringify(pair[1])); 
        // }
    
    axios.post('http://localhost:3000/mergepdf', formData, config)
    .then(res => {
      alert("Form submitted successfully !!!");
      console.log(JSON.stringify(res.data) + 'this is data after api call');
   })
   .catch(err => console.log(err));
  }
  const secondaryTextColor = 'black';

  const handleChange = async (e) => {
    e.preventDefault()
    var pdf_file = e.target.files[0];
    setPdfFile(pdf_file);
    setPdfUrl(URL.createObjectURL(pdf_file))
    var doc =  jsPDF();
    var name = $('#name').val();
    var sem = $('#sem').val();
    var dept = $('#department').val();
    var insti = $('#institute').val();
    doc.text(20,20, 'Name : '+name);
    doc.text(20,30,'Semester : '+sem);
    doc.text(20,40,'Department : '+dept);
    doc.text(20,50,'Institute : '+insti);
    // doc.save('blob.pdf');
    // doc.output('dataurlnewwindow');
    var blobPDF =  new Blob([ doc.output('blob',{filename:'userDetails.pdf'}) ], { type : 'application/pdf'});
    var blobUrl = URL.createObjectURL(blobPDF);
    setFieldsPdf(blobPDF);
    setFieldsUrl(blobUrl);
    
  }
  const checkBoxChange = (e) =>{
    e.preventDefault();
    setCheckVal(!checkVal);
    // if (checkVal == 0){
    //   setCheckVal(1);
    // }
    // else if (checkVal==1){
    //   setCheckVal(0);
    // }
    console.log("check value : ",checkVal);
  }


  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="center" >
      <VStack spacing={3} alignItems="flex-start">
        <Heading textColor={secondaryTextColor} size="2xl">Nomination Form</Heading>
        <Text textColor={secondaryTextColor}>Please make sure you upload all the necessary Documents before submitting the form.</Text>
      </VStack>
      <form id='registration-form'>
      <SimpleGrid columns={1} rowGap={6} w="full">
        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel textColor={secondaryTextColor}>Name</FormLabel>
            <Input id="name" placeholder="ABC" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel textColor={secondaryTextColor}>Department Name</FormLabel>
            <Input id='department' placeholder="Computer" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel textColor={secondaryTextColor} >Institute Name</FormLabel>
            <Input id='institute' placeholder="FCRIT"/>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl >
            <FormLabel textColor={secondaryTextColor} >Semester</FormLabel>
            <Input id='sem' placeholder="6" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormLabel>Select Award</FormLabel>
        </GridItem>
        
        <GridItem colSpan={2}>
          <FormLabel>Select Role</FormLabel>
        </GridItem>
        
         <GridItem colSpan={1}>
           <FormControl isRequired>
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
          </FormControl>
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
          <FormControl isRequired>
          <Checkbox onChange={checkBoxChange} >I have checked all the details. I confirm that the details are true and I have uploaded all the documents.</Checkbox>
          </FormControl>
        </GridItem>

          <br></br>
          <Button mt="5" mb="5" bgColor="green.500"  onClick={send} size="lg" >
            Submit
          </Button>
         </GridItem>
         <br/> 
      </SimpleGrid>
      </form>
      <script src='https://cdn.jsdelivr.net/npm/pdf-lib/dist/pdf-lib.js'></script>
      <script src='https://cdn.jsdelivr.net/npm/pdf-lib/dist/pdf-lib.min.js'></script>
    </VStack>
  );
};

export default Details;
