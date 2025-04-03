import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../component/Navigation";

function MainPage() {
  return (
    <div>
      <Navigation />
      <div>
      <Link to="/pages/teamMatching">
        <img src="/badminton.png" alt="badminton" width="30%" />
      </Link>
      </div>
    </div>
  );
}

export default MainPage;
