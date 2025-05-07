import React, { use } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading/Loading";

const Root = () => {
  const {loading} = use(AuthContext)
  if(!loading){
  return (
    <div className="max-w-[1440px] mx-auto">
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <main className="min-h-[60vh] w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer />
    </div>
  );}
  else return <Loading></Loading>
};

export default Root;
