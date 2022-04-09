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
import CommonDocs from './CommonDocs.js';
import AwardCategories from './components/AwardCategories.js';

const Details = () => {

  // const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondaryTextColor = 'black';
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" >
      <VStack spacing={3} alignItems="flex-start">
        <Heading textColor={secondaryTextColor} size="2xl">Your details</Heading>
        <Text textColor={secondaryTextColor}>Please make sure you upload all the necessary Documents before submitting the form.</Text>
      </VStack>
      <SimpleGrid columns={1} columnGap={3} rowGap={6} w="full">

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel textColor={secondaryTextColor}>Name</FormLabel>
            <Input placeholder="ABC" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel textColor={secondaryTextColor}>Department Name</FormLabel>
            <Input placeholder="Computer" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel textColor={secondaryTextColor}>Institute Name</FormLabel>
            <Input placeholder="FCRIT" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel textColor={secondaryTextColor}>Semester</FormLabel>
            <Input placeholder="6" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <CommonDocs/>
          <AwardCategories/>
        </GridItem>
        <br/>


        <GridItem id="SelectOptions" colSpan={2}>
        </GridItem>
        <br/>

        <GridItem id="UploadDocs" colSpan={2}>
        </GridItem>
        <br/>

        <GridItem colSpan={2}>
          <Checkbox defaultChecked>I have checked all the details. I confirm that the details are true and I have uploaded all the documents.</Checkbox>
        </GridItem>

        <GridItem colSpan={2}>
          
        </GridItem>

      </SimpleGrid>
    </VStack>
  );
};

export default Details;

