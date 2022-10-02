import React from "react";
import { Link } from "react-router-dom";

function Randing() {
  return (
    <div>
        <h1 className="text-3xl font-semibold text-center text-white">WELCOME!</h1>
        <h3 className="mt-10 text-xl text-white/60">What skill do you want to learn?<br />Step1: Taks this skill matching quiz to get started!</h3>
        <Link to="/quiz" className="flex justify-between w-full mt-4 text-white">
            <button className="w-[49%] py-3 bg-indigo-600 rounded-lg">Go to the Quiz</button>
        </Link>
    </div>
  );
}

export default Randing;