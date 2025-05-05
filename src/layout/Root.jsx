import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
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
    </div>
  );
};

export default Root;
