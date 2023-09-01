import { useParams } from "react-router-dom";

const DnsRecords = () => {
    const { id } = useParams()
    return ( 
        <>
        <h1>DNS records</h1>
        <p>sitename - {id}</p>
        </>  
     );
}
 
export default DnsRecords;