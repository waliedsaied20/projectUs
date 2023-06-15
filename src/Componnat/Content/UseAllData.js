import { useContext } from "react";
import  {GetData}  from "./AllData";


function UseAllData () {
    const {currentData , startLink} = useContext(GetData);
    return {currentData , startLink};

}


export default UseAllData;