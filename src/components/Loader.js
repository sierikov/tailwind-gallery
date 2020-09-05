import React from "react";
import loader from "../assets/images/loader.gif";

const Loader = () => {
  return (
    <div className="flex content-center h-screen">
      <img className="my-auto mx-auto" src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
