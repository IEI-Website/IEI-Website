import UploadFile from '../components/UploadFile.js';
export default function StudentDocs(){
    return (
        <div>
        <UploadFile label={"Results of all the semesters"} />
        <UploadFile label={"Institute ranks"} />
        <UploadFile label={"Scholarships received (if any)"} />
        <UploadFile label={"Details of study circles/ talks/ presentations made on  technical topics and technical content delivered ,courses completed beyond academics"} />
        <UploadFile label={"Any other academic achievements"} />
        </div>
        );
}
