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
import ResearchRolesNational from './components/ResearchRolesNational.js';
import StudentDocs from './Research-Excellence/Students.js';
import TeacherDocs from './Research-Excellence/Teachers.js';

const Details = () => {

  function selectRole() {
    var role = document.getElementById("applicant-role").value;
    var award = document.getElementById("award-category").value;
    if (role === "student") {
      <StudentDocs />
    }
  }

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
          <FormControl>
            <FormLabel textColor={secondaryTextColor} >Select Award Category</FormLabel>
            <Select id="award-category">
              <option value="research-N">Research Excellence National</option>
              <option value="research-R">Research Excellence Regional</option>
              <option value="academic-N">Academic Excellence National</option>
              <option value="academic-R">Academic Excellence Regional</option>
              <option value="industry">Industry Excellence</option>
              <option value="startup">Startup Excellence</option>
            </Select>
          </FormControl>
          <ResearchRolesNational />
        </GridItem>

        <GridItem id="UploadDocs">
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

export default Details;

