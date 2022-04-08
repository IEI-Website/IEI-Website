import React from 'react';
import {
  FormControl
} from '@chakra-ui/react'
import UploadFile from './components/UploadFile.js';



var common = (props) => {

  const onSubmit = async (event) => {
    event.preventDefault();
    
}


    return(
        <div>
          <FormControl>
          <UploadFile  label={"Identity proof (Institute Identity Card)"} />
          <UploadFile  label={"Proof of affiliation"} />
          <UploadFile  label={"Passport size recent photograph"} />
          <UploadFile  label={"Applicant CV"} />
          </FormControl>
          </div>
    );
}

export default common;