import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState([]);

  const fetchUser = useCallback(async () => {
    const response = await fetch(`https://api.github.com/user/${username}`);
    const data = await response.json();
    setUser(data);
  }, [username]);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="container">
      <Link to="/" className="links">
        back
      </Link>

      <div className="img">
        <img src={user.avatar_url} alt="" />
      </div>
      <div className="content">
        <div className="login">
          {user.name ? (
            <h3 className="name">{user.name}</h3>
          ) : (
            <h3 className="name">Not found</h3>
          )}
          <p className="at">@{user.login}</p>
        </div>
        <div className="follow">
          <div className="follower">
            <p>Followers</p>
            <h1>{user.followers}</h1>
          </div>
          <div className="following">
            <p> Following</p>
            <h1>{user.following}</h1>
          </div>
          <div className="repo">
            <p>repo</p>
            <h1>{user.public_repos}</h1>
          </div>
        </div>
        <div className="div-url">
          <a
            className="url"
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
          >
            go to profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
