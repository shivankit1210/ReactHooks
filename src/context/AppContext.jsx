import { createContext } from "react";

 export const AppContext = createContext();

 const  ContextProvider = (props)=>{

    const phone ="9675111916";
    const name ="Shivankit Agarwal";
    return (
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )
 }

 export default ContextProvider;