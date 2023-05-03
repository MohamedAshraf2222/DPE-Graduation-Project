import React from "react";
import Navbar from "../components/Navbar";

const Notfound = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex j-center i-center h-75">
        <h2 className="notfound-text">404 NotFound</h2>
      </div>
    </>
  );
};

export default Notfound;
