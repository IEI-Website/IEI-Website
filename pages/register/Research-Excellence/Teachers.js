import UploadFile from '../components/UploadFile.js';
export default function TeachersDocs(){
    return (
        <div>
        <UploadFile label={"Research Narration Document"} />
        <UploadFile label={"Power Point Presentation of Research Work concisely (Max of 10 slides)"} />
        <UploadFile label={"Publications (List of publications including Link and front page of journal papers)."} />
        <UploadFile label={"Photographs for innovative laboratory set-ups developed (Optional)"} />
        <UploadFile label={"Patents filed documents (Optional)"} />
        <UploadFile label={"Conference paper presentation certificates (Optional)"} />
        <UploadFile label={"Research and Consultancy Project (Optional)"} />
        <UploadFile label={"Any Other Achievement"} />
        <UploadFile label={"Research promotion activities if any (Endorsement letter by HOD)"} />
        </div>
        );
}
