import React, { use, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const ForgetPassword = () => {
    const {resetPassword} = use(AuthContext)
    const navigate = useNavigate()
  useEffect(() => {
    document.title = "Login | AppStore";
  }, []);
  const handleResetPass =(e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    resetPassword(email)
    .then(()=>{console.log('forget');
        navigate('/')
         Swal.fire({
                      title: 'Reset password',
                      text: 'Email sent successfully.',
                      icon: 'success',
                      confirmButtonText: 'Continue',
                      confirmButtonColor: '#4CAF50',
                    });
    })

  }
  return ( 
    <div className="flex justify-center items-center card-body">
      <form onSubmit={handleResetPass} className="fieldset">
        <label className="label">Email</label>
        <input
          required
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />

        <button className="btn btn-neutral mt-4">Send reset mail</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
