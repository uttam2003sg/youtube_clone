import { useState,useContext, createContext } from "react";

const UtilsContext = createContext(null);

export const UtilsContextProvider = ({children}) =>{
    const [isSidebar,setIsSidebar]=useState(false);
    const [mobileShow,SetMobileShow]=useState(false);
return <UtilsContext.Provider value={{isSidebar,setIsSidebar,mobileShow,SetMobileShow}}>
    {children}
</UtilsContext.Provider>
}
export const useUtils = () =>{
    const utilsContext = useContext(UtilsContext);

    if(!utilsContext) return null;

    return utilsContext;
}