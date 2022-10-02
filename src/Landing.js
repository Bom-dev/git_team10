import React from "react";
import { Link } from "react-router-dom";

function Randing() {
  return (
    <div>
        <h1 className="text-3xl font-semibold text-center text-slate-500">WELCOME!</h1>
        <h3 className="mt-10 text-xl text-slate-500">This quiz will be used to help you get paired with a mentor</h3>
        <Link to="/quiz" className="flex justify-between w-full mt-4 text-white">
            <button className="w-[99%] py-3 bg-blue-600 rounded-lg">Start the Quiz</button>
        </Link>
    </div>
  );
}

export default Randing;
