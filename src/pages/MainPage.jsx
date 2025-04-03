import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../component/Navigation";

function MainPage() {
  return (
    <div>
      <Navigation />
      <div className="flex justify-center">
      <Link to="/pages/teamMatching" className="inline-block w-[300px]">
        <img src="/badminton.png" alt="badminton" className="w-full" />
      </Link>
    </div>
    </div>
  );
}

export default MainPage;
