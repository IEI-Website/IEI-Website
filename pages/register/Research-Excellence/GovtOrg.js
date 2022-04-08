 import UploadFile from '../components/UploadFile.js';
 export default function GovtOrgDocs(){
    return (
        <div>
        <UploadFile  label={"Narrative on R&D contributions in the affiliated Industry/Organization(1 page)"} />
        <UploadFile  label={"Research projects handled"} />
        <UploadFile  label={"Patents filed"} />
        <UploadFile  label={"Papers published in the Journals"} />
        <UploadFile  label={"Any other research-based achievements"} />
        </div>
        );
}
