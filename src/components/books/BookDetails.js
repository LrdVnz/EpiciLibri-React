import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { QueryContext } from "../../contexts/QueryContext";

const BookDetails = () => {
    
    const { query } = useContext(QueryContext)

    useEffect(( ) => {
        console.log(query)
    }, [query])

    const { asin } = useParams();
    
    return ( 
       <>
       
       
       </>
     );
}
 
export default BookDetails;