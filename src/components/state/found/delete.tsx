import React from "react";
import "./userInfo.css";

function UserInfo() {
  return (
    <>
      <div className="user__info">
        <div className="obertka-img">
          <img src="img/userFace.png" alt="user face" className="user__face" />
        </div>
        <div className="user__text">
          <h2 className="user__name">Dan Abramov</h2>
          <a href="#" className="user__linkRepositories">            gaeron          </a>
          <div className="user__follow">
            <div className="user__follow_first">
              <img                src="img/userIconFollowers.png"                alt="two users"                className="twoUsers"
              />
              <p className="user__followers">65k followers</p>
            </div>
            <div className="user__follow_second">
              <img                src="img/userIconFollowing.png"                alt="one user"                className="twoUsers"
              />
              <p className="user__followers">171 following</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
