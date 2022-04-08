import UploadFile from '../components/UploadFile.js';
export default function StartupDocs(){
    return (
        <div>
        <UploadFile label={"Year of Establishment"} />
        <UploadFile label={"Names of Founders / Cofounders"} />
        <UploadFile label={"Start-up - DPIIT Recognition"} />
        <UploadFile label={"MSME Registration"} />
        <UploadFile label={"Main Product or services offered"} />
        <UploadFile label={"Key USP of the Product / services"} />
        <UploadFile label={"Patent applied or received"} />
        <UploadFile label={"Employment generated"} />
        <UploadFile label={"Revenue Generated"} />
        <UploadFile label={"Funding received till date (if any)"} />
        <UploadFile label={"Any Awards won"} />
        <UploadFile label={"Website URL"} />
        </div>
        );
}
