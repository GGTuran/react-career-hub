/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";


const Login = () => {
    const { googleSignIn } = useContext(AuthContext);
    console.log(googleSignIn)
    return (
        <div>
            <h1>Just Login</h1>
        </div>
    );
};

export default Login;