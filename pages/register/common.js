import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  ButtonGroup,
  FormHelperText,
} from '@chakra-ui/react'




var common = (props) => {

  const onSubmit = async (event) => {
    event.preventDefault();
    
}


    return(
        <div>
          <FormControl>

          <FormLabel>Identity proof (Institute Identity Card)</FormLabel>
          <Input type='file' />
          <Button colorScheme='blue'>Button</Button>
          <br/>

          <FormLabel>Proof of affiliation</FormLabel>
          <Input type='file' />
          <Button colorScheme='blue'>Button</Button>
          <br/>

          <FormLabel>Passport size recent photograph</FormLabel>
          <Input type='file' />
          <Button colorScheme='blue'>Button</Button>
          <br/>

          <FormLabel>Applicant CV</FormLabel>
          <Input type='file' />
          <Button colorScheme='blue'>Button</Button>
          <br/>

          </FormControl>
        </div>
    );
}

export default common;