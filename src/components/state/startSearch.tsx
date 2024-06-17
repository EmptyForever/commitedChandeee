import React from "react";
import "./startSearch.css";

function StartSearch() {
  return (
    <>
      <div className="flexCenterCenter">
        <div className="startSearch">
          <img
            src="img/bigIconSearch.svg"
            alt="photo1 search"
            className="startSearch__icon"
          />
          <p className="startSearch__text">
            Start with searching a GitHub user
          </p>
        </div>
      </div>
    </>
  );
}

export default StartSearch;
