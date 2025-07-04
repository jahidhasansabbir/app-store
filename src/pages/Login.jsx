import React, { use, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Login = () => {
  const {signIn, googleSignIn} = use(AuthContext)
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const location = useLocation()
  useEffect(() => {
        document.title = "Login | AppStore";
      }, []);
  const handleSignIn=(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
        if (! /[A-Z]/.test(password)) {
          return setError('Password must contain at least one uppercase letter.')
        }
        if (!/[a-z]/.test(password)) {
          return setError('Password must contain at least one lowercase letter.') 
        }
        if (password.length < 6) {

          return  setError('Password must be at least 6 characters long.') 
        }
        else{
          setError('')
          signIn(email, password)
          .then(() =>{
            navigate(location?.state || '/')
            Swal.fire({
              title: 'Welcome!',
              text: 'You have successfully logged in.',
              icon: 'success',
              confirmButtonText: 'Continue',
              confirmButtonColor: '#4CAF50',
            });
            
            
          })
          .catch((err)=>{
            Swal.fire({
              title: 'Error',
              text: `${err.message}`,
              icon: 'warning',
              confirmButtonText: 'Continue',
              confirmButtonColor: 'red',
            });
          })
        }
  }
  const handleGoogleSignIn = ()=>{
    googleSignIn()
    .then(()=>{
      navigate(location?.state || '/')
      Swal.fire({
        title: 'Welcome!',
        text: 'You have successfully logged in.',
        icon: 'success',
        confirmButtonText: 'Continue',
        confirmButtonColor: '#4CAF50',
      });
    })
    .catch(error=>toast.error(error.message))
  }
  return (
    <div className="flex justify-center items-center min-h-[70vh] mb-10">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-xl border border-[#8080803c]">
        <div className="card-body">
          <form onSubmit={handleSignIn} className="fieldset">
            <label className="label">Email</label>
            <input required type="email" name="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" required name="password" className="input" placeholder="Password" />
            <div>
              {error?<p className='text-red-500'>{error}</p>:<NavLink to="/forget-password" className="link link-hover">Forgot password?</NavLink>}
              
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p className="text-gray-400">
          Don't have an account?{" "}
            <NavLink to='/register' className="text-blue-500 hover:underline">
              Register
            </NavLink>
          </p>
          <p className="text-center text-gray-400 text-lg">Or,</p>
          <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
