import React, { useEffect, useState } from "react";
import "./userRepos.css";

import { UserGitHub, UserEx , UserEx2, dataMojomboReposArray, UserGitHubRepositories } from "../../../types/data";

import ReactPaginate from 'react-paginate';
import './PaginatedList.css';

const itemsPerPage = 4;

function UserReposNew(user : UserEx2) {
  const [UserGitHubRepositoriesArray, setUserGitHubRepositories] = useState<UserGitHubRepositories[]>([]);
  const urlL = `https://api.github.com/users/${user.user?.user?.login}/repos`;
  console.log(urlL);

  useEffect(() => {
    const fetchUser = async (url: string) => {
      try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) { 
          // const data = [];
          setUserGitHubRepositories([]);
          // присваиваем пустой массив
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUserGitHubRepositories(data);

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

  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = UserGitHubRepositoriesArray.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(UserGitHubRepositoriesArray.length / itemsPerPage);

  return (
    <>
      <div className="user__repos">
        <div className="repos">
          <p className="repos__oboznach">Repositories ({user.user?.user?.public_repos})</p>
          <ul className="repos__list">
              {currentItems.map((item) => (
                <li className="repos__item"><h3 className="repos__header">
                    <a href={item.html_url}>{item.name}</a>
                  </h3>
                  <p className="repos__desc">{item.description}</p>
                </li>
              ))}
          </ul>
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            // subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </>
  );
}

export default UserReposNew;