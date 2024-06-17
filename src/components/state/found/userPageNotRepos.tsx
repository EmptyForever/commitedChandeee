import React, { useState } from "react";
import "./userPage.css";
import UserInfo from "./userInfo";
import ReposNot from "./reposNot";

import { UserGitHub, UserEx , UserEx2 } from "../../../types/data";

function UserPageNotRepos(user: UserEx) {
  return (
    <>
      <div className="user center">
        <UserInfo user={user}/>
        <ReposNot />
      </div>
    </>
  );
}

export default UserPageNotRepos;
