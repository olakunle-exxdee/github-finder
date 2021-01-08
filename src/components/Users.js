import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [searchData, setSearchData] = useState("");
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.github.com/search/users?q=${input}`)
      .then((response) => setSearchData(response.data), setLoading(false))
      .catch((error) => console.log(error));
  }, [submitted]);

  const handleSumbit = (e) => {
    e.preventDefault();
    setSubmitted(!submitted);
    console.log(e.target.value);
  };

  return (
    <div className="">
      <div onSubmit={handleSumbit} className="form-wrapper">
        <form>
          <input
            className="form-control form-control-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>

      <div className="users-wrapper">
        {loading ? (
          <h1 className="loading">Loading......</h1>
        ) : searchData.total_count <= 0 ? (
          <h1 className="error">User not Found</h1>
        ) : searchData ? (
          searchData.items.map((item) => {
            console.log(item);
            return (
              <div className="users">
                <Link to={`/users/${item.login}`} className="link">
                  <img src={item.avatar_url} alt={item.login} />
                  <div className="detail">
                    <h4> {item.login}</h4>
                    <p>Full Profile</p>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Users;
