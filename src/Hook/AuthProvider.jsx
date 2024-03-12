/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext } from "react";


export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    const googleSignIn = () =>{
        console.log("damnnn")
    }

    const authInfo = {
        googleSignIn,
    } ;

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;