import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
  const {user, logOut} = use(AuthContext)
  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(err=>console.log(err.message))
  }
  const links = (
    <>
      <li>
        <NavLink className={({ isActive }) =>
          isActive ? "border-b-2" : '' } to="/">Apps</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
          isActive ? "border-b-2" : ''} to="/my-profile">My Profile</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
          isActive ? "border-b-2" : ''} to="/notification">Notification</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn pl-0 btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <NavLink to='/' className="btn btn-ghost text-xl md:text-2xl pl-0"><span className="">App</span><span className="-ml-1.5 text-blue-400">Store</span></NavLink>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end gap-3">
       {
        user? <div title={user.displayName} className="w-10">
        <img
          src={user.photoURL} className="rounded-full" />
      </div>: ''
       }
        <div>
        {
          user? <NavLink to='/login' onClick={handleLogOut} className="btn bg-black text-white">Log out</NavLink>: <NavLink to='/login' className="btn bg-black text-white">Login</NavLink>
        }
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
