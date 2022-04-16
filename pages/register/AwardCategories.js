import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import ResearchRolesNational from './ResearchRolesNational';
import ResearchRolesRegional from './ResearchRolesRegional';
import AcademicRolesNational from './AcademicRolesNational';
import AcademicRolesRegional from './AcademicRolesRegional';
// import StartupDocs from '../Startup-Excellence/Startup';
// import IndustryDocs from '../Industry-Excellance/Industry.js';

export default function AwardCategories() {

    // const onChange = (event) => {
    //     var optionsElement = document.getElementById("SelectOptions");
    //     var uploadElement = document.getElementById("UploadDocs");
    //     // uploadElement.style.visibility = "hidden";
    //     switch (event.target.value) {
    //         case "research-N":
    //             optionsElement.style.visibility = "visible";
    //             // uploadElement.style.visibility = "visible";
    //             ReactDOM.render(<ResearchRolesNational />, document.getElementById("SelectOptions"));
    //             break;

    //         case "research-R":
    //             optionsElement.style.visibility = "visible";
    //             // uploadElement.style.visibility = "visible";
    //             ReactDOM.render(<ResearchRolesRegional />, document.getElementById("SelectOptions"));
    //             break;

    //         case "academic-N":
    //             optionsElement.style.visibility = "visible";
    //             // uploadElement.style.visibility = "visible";
    //             ReactDOM.render(<AcademicRolesNational />, document.getElementById("SelectOptions"));
    //             break;

    //         case "academic-R":
    //             optionsElement.style.visibility = "visible";
    //             // uploadElement.style.visibility = "visible";
    //             ReactDOM.render(<AcademicRolesRegional />, document.getElementById("SelectOptions"));
    //             break;

    //     }
    // }

    return (
            <FormControl>
                <FormLabel>Select Award Category</FormLabel>
                <Select id="Category" onChange={onChange}>
                    <option value="research-N">Research Excellence National</option>
                    <option value="research-R">Research Excellence Regional</option>
                    <option value="academic-N">Academic Excellence National</option>
                    <option value="academic-R">Academic Excellence Regional</option>
                    <option value="industry">Industry Excellence</option>
                    <option value="startup">Startup Excellence</option>
                </Select>
            </FormControl>
    );
}

