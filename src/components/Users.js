import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Users = () => {
  const { users } = useGlobalContext();

  // if (users && users.length < 1) {
  //   return <h1>hhhh</h1>;
  // }

  return (
    <div className="container">
      {users &&
        users.map((user) => {
          return (
            <section key={user.id} className="users">
              <div className="img-container">
                <img src={user.avatar_url} alt="" />
              </div>
              <h3 className="title">{user.login}</h3>

              <Link to={`/users/${user.id}`} className="links">
                Details
              </Link>
            </section>
          );
        })}
    </div>
  );
};

export default Users;
