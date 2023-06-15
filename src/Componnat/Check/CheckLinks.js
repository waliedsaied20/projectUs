import UseAllData from "../Content/UseAllData";
import classNames from 'classnames';


function CheckLinks({to, children, gClassName, activeClassName}) {
    
    const {startLink , currentData} = UseAllData();
    const forClass = classNames('text-white', gClassName, currentData === to && activeClassName);
    
    const handlePath = (even) => {
        if(even.metaKey || even.ctrKey){
            return ;
        }
        even.preventDefault();
        startLink(to)
    }
    return (

        <div> 
            <a href={to} className={forClass} onClick={handlePath}>
                {children}
            </a>
            
        </div>
    )
}


export default CheckLinks;
