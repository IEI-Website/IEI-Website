import UploadFile from '../components/UploadFile.js';
export default function StudentDocs(){
    return (
        <div>
        <UploadFile label={"Research Narration Document"} />
        <UploadFile label={"Power Point Presentation of Research Work concisely (Max of 10 slides)"} />
        <UploadFile label={"Endorsement letter from HOD"} />
        <UploadFile label={"Publications (List of publications including Link and front page of journal papers)."} />
        <UploadFile label={"Photographs for innovative laboratory set-ups developed (Optional)"} />
        <UploadFile label={"Patents filed documents (Optional)"} />
        <UploadFile label={"Conference paper presentation certificates (Optional)"} />
        <UploadFile label={"Any Other Achievement"} />
        <UploadFile label={"Recommendation by Supervisor for PhD Scholar"} />
        </div>
        );
}
