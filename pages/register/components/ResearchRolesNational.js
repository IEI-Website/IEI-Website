import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import StudentDocs from "../Research-Excellence/Students"
import GovtOrgDocs from "../Research-Excellence/GovtOrg"
import TeacherDocs from "../Research-Excellence/Teachers"
import IndustryDocs from "../Research-Excellence/Industry"


export default function ResearchRolesNational() {

    const onChange = (event) => {
        switch (event.target.value) {
            case "Student":
                ReactDOM.render(<StudentDocs />, document.getElementById("UploadDocs"));
                break;

            case "Teacher":
                ReactDOM.render(<TeacherDocs />, document.getElementById("UploadDocs"));
                break;

            case "ResearcherIn":
                ReactDOM.render(<IndustryDocs />, document.getElementById("UploadDocs"));
                break;

            case "ResearcherGov":
                ReactDOM.render(<GovtOrgDocs />, document.getElementById("UploadDocs"));
                break;

        }
    }

    return (
        <div>
            <FormControl>
                <FormLabel>Select your Role</FormLabel>
                <Select id="applicant-role" onChange={onChange}>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teaching Faculty</option>
                    <option value="ResearcherIn">Researcher from Industry</option>
                    <option value="ResearcherGov">Researcher from Govt. Organization</option>
                </Select>
            </FormControl>
        </div>
    );
}
