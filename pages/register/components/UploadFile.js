import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react'


var UploadFile = (props) => {

    return(
          <FormControl>
          <FormLabel>{props.label}</FormLabel>
          <Input type='file' />
          <br/>
          <br/>
          </FormControl>
    );
}

export default UploadFile;