import { useParams } from "react-router-dom"
const DomainList = () => {
    const { siteID } = useParams()
    return ( 
        <h1>DomainList{siteID}</h1>
     );
}
 
export default DomainList;