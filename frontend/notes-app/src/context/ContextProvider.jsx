import { createContext, useContext, useState } from "react";

const authContext = createContext();
const ContextProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const login = (user)=> {
        setUser(user);
    }
    const logout = () =>{
        setUser(null);
        localStorage.removeItem("token");
    }
    return (
        <authContext.Provider value={{user,login,logout}}>
            {children}
        </authContext.Provider>
    )
}
export const useAuth = ()=>useContext(authContext);
export default ContextProvider;