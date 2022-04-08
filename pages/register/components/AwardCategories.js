import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import ResearchRolesNational from './ResearchRolesNational';
import AcademicRolesNational from './AcademicRolesNational';

export default function AwardCategories() {

    const onChange = (event) => {
        switch (event.target.value) {
            case "research-N":
                ReactDOM.render(<ResearchRolesNational />, document.getElementById("SelectOptions"));
                break;

            case "research-R":
                ReactDOM.render(<ResearchRolesNational />, document.getElementById("SelectOptions"));
                break;

            case "academic-N":
                ReactDOM.render(<AcademicRolesNational />, document.getElementById("SelectOptions"));
                break;

            case "academic-R":
                ReactDOM.render(<AcademicRolesNational />, document.getElementById("SelectOptions"));
                break;

            case "industry":
                ReactDOM.render(<AcademicRolesNational />, document.getElementById("SelectOptions"));
                break;

            case "startup":
                ReactDOM.render(<AcademicRolesNational />, document.getElementById("SelectOptions"));
                break;

        }
    }

    return (
        <div>
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
        </div>
    );
}
