import React from "react";
import "./userInfo.css";
import { UserGitHub, UserEx , UserEx2 } from "../../../types/data";

function UserInfo(user : UserEx2) {
  return (
    <>
      <div className="user__info">
        <div className="obertka-img">
          <img src={user.user?.user?.avatar_url} alt="user face" className="user__face" />
        </div>
        <div className="user__text">
          <h2 className="user__name">{user.user?.user?.name}</h2>
          <a href={user.user?.user?.html_url} className="user__linkRepositories">{user.user?.user?.name}</a>
          <div className="user__follow">
            <div className="user__follow_first">
              <img   src="img/userIconFollowers.png"   alt="two users"   className="twoUsers"
              />
              <p className="user__followers">{user.user?.user?.followers} followers</p>
            </div>
            <div className="user__follow_second">
              <img     src="img/userIconFollowing.png"     alt="one user"     className="twoUsers"
              />
              <p className="user__followers">{user.user?.user?.following} following</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
