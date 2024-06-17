import React from "react";
import "./reposNot.css";
import UserPage from "./userPage";

function ReposNot() {
  return (
    <>
      <div className="flexCenterCenter">
        <div className="notRepos">
          <img
            src="img/iconNotRepos.svg"
            alt="not search"
            className="notRepos__icon"
          />
          <p className="notRepos__text">
            Start with searching a GitHub user
          </p>
        </div>
      </div>
    </>
  );
}

export default ReposNot;
