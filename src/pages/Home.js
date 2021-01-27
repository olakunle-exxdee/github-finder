import React from "react";
import { SearchUsers } from "../components/SearchUsers";
import Users from "../components/Users";
import { useGlobalContext } from "../context";

const Home = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return <h1>loading....</h1>;
  }
  return (
    <div className="section">
      <SearchUsers />
      <Users />
    </div>
  );
};

export default Home;
