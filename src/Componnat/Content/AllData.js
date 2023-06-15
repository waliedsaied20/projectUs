import { useState , useEffect, createContext } from "react";

const GetData = createContext();

function AllData({children}) {
    
    const [currentData, setCurrentData] = useState(window.location.pathname)    
    
    useEffect(() => {
        const handleData = () => {
            setCurrentData(window.location.pathname)
        };
        window.addEventListener("popstate", handleData);
   
        return () => {
            window.removeEventListener("popstate", handleData);
        };
    }, [])

    const startLink = (to) => {
        window.history.pushState({} , '', to);
        setCurrentData(to)
    }
    
    return (
        <div>
            <GetData.Provider value={{currentData, startLink}}>
                {children}
            </GetData.Provider>
        </div>
    )
}

export {AllData as default , GetData};
