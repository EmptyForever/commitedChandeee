import React, { useState } from "react";
import "./App.css";
import { MenuHeader } from "./components/Menu";
import StartSearch from "./components/state/startSearch";
import UserNotFound from "./components/state/userNotFound";
import UserPage from "./components/state/found/userPage";
import UserPageNotRepos from "./components/state/found/userPageNotRepos";
import GitHubUser from "./components/state/found/userPageEx";

const App: React.FC = () => {

  return (
    <>
      <MenuHeader />
      {/* <StartSearch /> */}
      {/* <UserNotFound /> */}
      {/* <UserPageNotRepos /> */}
      {/* <UserPage /> */}
      {/* <GitHubUser name="mojombo"/> */}
    </>
  );
};

export default App;
