import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react'


var uploadFile = (props) => {

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
          </FormControl>
        </div>
    );
}

export default uploadFile;