import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react';

export default function ResearchRolesNational() {

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