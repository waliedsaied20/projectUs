import  UseAllData  from "../Content/UseAllData";

function Routing( {path, children}) {
   
   const { currentData } = UseAllData();
   console.log(path);

   if (path === currentData){
        return children;
    }
    return null;
}

export default Routing;
