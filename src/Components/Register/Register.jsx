/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";


const Register = () => {


  const { signUp } = useContext(AuthContext);

  const {email, setEmail} = useState(" ");
  const {password, setPassword} = useState("");
  const {error ,setError} = useState("");
  const handleEmail = (text) =>{
    setEmail(text.target.value);
    console.log(email);
  }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> 
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input onChange={(e) => handleEmail(e)} name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Register</button>
              </div>
            </form>
            {/* <button>Google Login</button> */}
          </div>
        </div>
      </div>
    );
};

export default Register;