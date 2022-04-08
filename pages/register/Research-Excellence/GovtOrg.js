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
    useColorModeValue,
  } from '@chakra-ui/react';
  import CommonDocs from '../CommonDocs.js';
import UploadFile from '../components/UploadFile.js';
  
  const GovtOrg = () => {
    // const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
    const secondaryTextColor = 'black';
    return (
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" >
        <VStack spacing={3} alignItems="flex-start">
          <Heading textColor={secondaryTextColor } size="2xl">Your details</Heading>
          <Text textColor={secondaryTextColor}>Please make sure you upload all the necessary Documents before submitting the form.</Text>
        </VStack>

        <SimpleGrid columns={1} columnGap={3} rowGap={6} w="full">

          <GridItem>
            <CommonDocs />
            <UploadFile  label={"Narrative on R&D contributions in the affiliated Industry/Organization(1 page)"} />
            <UploadFile  label={"Research projects handled"} />
            <UploadFile  label={"Patents filed"} />
            <UploadFile  label={"Papers published in the Journals"} />
            <UploadFile  label={"Any other research-based achievements"} />
          </GridItem>

          <GridItem colSpan={2}>
            <Checkbox defaultChecked>I have checked all the details. I confirm that the details are true and I have uploaded all the documents.</Checkbox>
          </GridItem>

          <GridItem colSpan={2}>
            <Button size="lg" w="full">
              Submit
            </Button>
          </GridItem>

        </SimpleGrid>
      </VStack>
    );
  };
  
  export default GovtOrg;
