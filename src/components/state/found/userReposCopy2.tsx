import React, { useEffect, useState } from "react";
import "./userRepos.css";

import {
  UserGitHub,
  UserEx,
  UserEx2,
  UserGitHubRepositories,
  dataMojomboReposArray,
} from "../../../types/data";

function UserReposNew(user: UserEx2) {
  const [elementsSlider, setElementsSlider] = useState([
    <li className="repos__slider-list-item">
      <a href="#" className="repos__slider-link currentSlider">
        1
      </a>
    </li>,
  ]);
  const [elementsRepos, setElementsRepos] = useState([<></>]);

  // const [userRepositories, setUserRepositories] = useState<UserGitHubRepositories[]>([{}]);
  const [userRepositories, setUserRepositories] = useState<any>();
  const data = dataMojomboReposArray;
  setUserRepositories(data);

  // const [loading, setLoading] = useState(true);
  // const [errorL, setError] = useState<Error>();

  // раскоментить!!!!!!!!!!!!!!!!!!!!!
  const urlL = `https://api.github.com/users/${user.user?.user?.name}/repos`;
  useEffect(() => {
    const fetchUser = async (url: string) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          const data = [{ null: "empty" }];
          setUserRepositories(data);
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUserRepositories(data);

        console.log(data);
        console.log(data.repos_url);
      } catch (error) {
        // setError(error);
        console.log(error);
      } finally {
        // setLoading(false);
      }
    };

    fetchUser(urlL);
  });

  // }, [name]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (errorL) {
  //   return <div>Error: {errorL.message}</div>;
  // }

  // for (let i = 1; i < 5; i++) {
  //   const elem = <li className="repos__slider-list-item"><a href="#" className="repos__slider-link">{i + 1}</a></li>;
  //   elementsSlider.push(elem);
  // }
  // console.log(elementsSlider);
  // for (let i = 0; i < userRepositories.length; i++) {
  //   const elem = <div className="repos__item"><h3 className="repos__header"><a href={userRepositories[i].html_url}>{userRepositories[i].name}</a></h3><p className="repos__desc">{userRepositories[i].description}</p></div>
  //   elementsRepos.push(elem);
  // }
  // console.log(elementsRepos);

  // return <>{elements}</>;

  return (
    <>
      <div className="user__repos">
        <div className="repos">
          <p className="repos__oboznach">
            Repositories ({user.user?.user?.public_repos})
          </p>
          <div className="repos__list">{/* {elementsRepos} */}</div>
          <div className="repos__slider">
            <p className="repos__slider-text">5-8 of 249 items</p>
            <img src="img/icon_arrow_left-default.svg" alt="arrow left" />
            <ul className="repos__slider-list">{elementsSlider}</ul>
            <img src="img/icon_arrow_right-default.svg" alt="arrow left" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserReposNew;



