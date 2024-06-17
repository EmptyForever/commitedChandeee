import React, { useEffect, useState } from "react";
import StartSearch from "../startSearch";
import UserNotFound from "../userNotFound";
import UserPage from "./userPage";
import UserPageNotRepos from "./userPageNotRepos";

import { UserGitHub, UserEx , UserEx2, UserName } from "../../../types/data";

const GitHubUser = ({ name }: UserName) => {
  const [user, setUser] = useState<UserGitHub>({});
  const [loading, setLoading] = useState(true);
  const [errorL, setError] = useState<Error>();
  const urlL = `https://api.github.com/users/${name}`;
  console.log(urlL);

  useEffect(() => {
    const fetchUser = async (url: string) => {
      try {
        const response = await fetch(url);

        if (!response.ok) { 
          const data = {null: "empty"};
          setUser(data);
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        // setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser(urlL);
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorL) {
    return <div>Error: {errorL.message}</div>;
  }
  
  if (typeof name === 'undefined') {
    // return <StartSearch />;
    return (<UserNotFound />)
  }
  if (name.length === 0) {
    return <StartSearch />;
  }

  // console.log(user);
  if (!user.name) {
    return (<UserNotFound />)
  } else {
        // + repos
        if (user.public_repos === 0) {
          return (
          <div>
            <UserPageNotRepos />
          </div>
          )
        } else {
          // - repos
          return (
            <div>
              {/* <h1>{user.name}</h1>
              <p>{name.length}</p>
              <p>{user.bio}</p>
              <img src={user.avatar_url} alt={user.name} />
              <p>{user.public_repos}</p> */}
              <UserPage user={user}/>
            </div>
            )
        }
  }
};

export default GitHubUser;
