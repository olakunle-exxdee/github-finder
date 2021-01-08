import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const { username } = useParams();
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => setSearchData(response.data))
      .catch((error) => console.log(error));
  }, [username]);

  return (
    <div className="userdetails">
      <Link to="/users">back</Link>
      <header className="header">
        <div className="userdetails-img">
          <img src={searchData.avatar_url} alt="" />
        </div>
        <div className="userdetails-content">
          <div className="login">
            {searchData.name ? (
              <h3 className="name">{searchData.name}</h3>
            ) : (
              <h3 className="name">Not found</h3>
            )}
            <p className="at">@{searchData.login}</p>
          </div>
          <div className="follow">
            <div className="follower">
              <p>Followers</p>
              <h1>{searchData.followers}</h1>
            </div>
            <div className="following">
              <p> Following</p>
              <h1>{searchData.following}</h1>
            </div>
            <div className="repo">
              <p>repo</p>
              <h1>{searchData.public_repos}</h1>
            </div>
          </div>
          <div className="div-url">
            <a
              className="url"
              href={searchData.html_url}
              target="_blank"
              rel="noreferrer"
            >
              go to profile
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default UserDetails;
