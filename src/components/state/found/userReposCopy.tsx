import React, { useState } from "react";
import "./userRepos.css";

import { UserGitHub, UserEx , UserEx2 } from "../../../types/data";

function UserRepos(user : UserEx2) {
  const [num, setNum] = useState(5);
  const [elements, setElements] = useState([<li className="repos__slider-list-item"><a href="#" className="repos__slider-link currentSlider">1</a></li>]);

  // const
  // const addItems = () => {
    // const elements = [<li className="repos__slider-list-item"><a href="#" className="repos__slider-link currentSlider">1</a></li>];
    
    for (let i = 1; i < num; i++) {
      const elem = <li className="repos__slider-list-item"><a href="#" className="repos__slider-link">{i + 1}</a></li>;
      elements.push(elem);
    }
    console.log(elements);

  //   // return <>{elements}</>;
  // };

  return (
    <>
      <div className="user__repos">
        <div className="repos">
          <p className="repos__oboznach">Repositories ({user.user?.user?.public_repos})</p>
          <div className="repos__list">
            <div className="repos__item">
              <h3 className="repos__header">react</h3>
              <p className="repos__desc">
                про реакт тут написано про реакт тут написано про реакт тут
                написано про реакт тут написано про реакт тут написано про реакт
                тут написано про реакт тут написано про реакт тут написано про
                реакт тут написано про реакт тут написано
              </p>
            </div>
            <div className="repos__item">
              <h3 className="repos__header">react</h3>
              <p className="repos__desc">про реакт тут написано</p>
            </div>
            <div className="repos__item">
              <h3 className="repos__header">react</h3>
              <p className="repos__desc">про реакт тут написано</p>
            </div>
            <div className="repos__item">
              <h3 className="repos__header">react</h3>
              <p className="repos__desc">про реакт тут написано</p>
            </div>
          </div>
          <div className="repos__slider">
            <p className="repos__slider-text">5-8 of 249 items</p>
            <img src="img/icon_arrow_left-default.svg" alt="arrow left" />
            <ul className="repos__slider-list">{elements}</ul>
            <img src="img/icon_arrow_right-default.svg" alt="arrow left" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRepos;
