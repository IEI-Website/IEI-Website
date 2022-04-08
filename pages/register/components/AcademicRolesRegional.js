import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import StudentDocs from "../Academic-Excellence/Students"
import TeacherDocs from "../Academic-Excellence/Teachers"


export default function AcademicRolesNational() {

    const onChange = (event) => {
        switch (event.target.value) {
            case "Student":
                ReactDOM.render(<StudentDocs />, document.getElementById("UploadDocs"));
                break;

            case "Teacher":
                ReactDOM.render(<TeacherDocs />, document.getElementById("UploadDocs"));
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
                </Select>
            </FormControl>
        </div>
    );
}