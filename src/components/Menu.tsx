import React, { useState } from "react";
import "./Menu.css";
import GitHubUser from "./state/found/userPageEx";
import { UserGitHub, UserEx , UserEx2, UserName } from "../types/data";

function MenuHeader() {

  const [usName, setUsName] = useState<UserName>({name: ""});

  function changeName(objName: UserName) {
    setUsName(objName);
  }
  
  return (
    <>
      <nav className="header blueBackground">
        <div className="center">
          <img src="img/gitIcon.svg" alt="photo1" className="header__logo blueBackground" />
          <div className="search-content">
              <img src="img/iconSearch.svg" alt="photo1" className="header__icon" />
              <input type="text" className="header__input" onChange={(e) => {changeName({name : e.target.value}); console.log(e.target.value, usName);}}></input>
          </div>
          <div>Имя изменчивое: {usName.name}</div>
        </div>
      </nav>
      <GitHubUser name= {usName.name}/>
    </>
  );
}

export { MenuHeader };
