import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
 const counterobj = useSelector(store=>store.counter);
 const counter = counterobj.counterVal
  return (
    <div>
      <p className="lead mb-4">Display Counter Value: {counter}</p>
    </div>
  );
};

export default DisplayCounter;
