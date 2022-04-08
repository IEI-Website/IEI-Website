import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import StudentDocs from "../Academic-Excellence/Students"
import TeacherDocs from "../Academic-Excellence/Teachers"
import PrincipalDocs from "../Academic-Excellence/Principal"
import HODDocs from "../Academic-Excellence/HOD"
import InstituteDocs from "../Academic-Excellence/Institute"


export default function AcademicRolesNational() {

    const onChange = (event) => {
        switch (event.target.value) {
            case "Student":
                ReactDOM.render(<StudentDocs />, document.getElementById("UploadDocs"));
                break;

            case "Teacher":
                ReactDOM.render(<TeacherDocs />, document.getElementById("UploadDocs"));
                break;

            case "Principal":
                ReactDOM.render(<PrincipalDocs />, document.getElementById("UploadDocs"));
                break;

            case "HOD":
                ReactDOM.render(<HODDocs />, document.getElementById("UploadDocs"));
                break;

            case "Institute":
                ReactDOM.render(<InstituteDocs />, document.getElementById("UploadDocs"));
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
                    <option value="HOD">Head of the Department</option>
                    <option value="Principal">Principal/Director</option>
                    <option value="Institute">Institute</option>
                </Select>
            </FormControl>
        </div>
    );
}