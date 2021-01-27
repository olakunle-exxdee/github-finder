import { useRef } from "react";
import { useGlobalContext } from "../context";

export const SearchUsers = () => {
  const { setSearch } = useGlobalContext();

  const searchValue = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = () => {
    if (!searchValue) {
      return setSearch("a");
    }
    setSearch(searchValue.current.value);
    console.log(searchValue.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Enter Username</label>
        <input
          type="text"
          id="search"
          ref={searchValue}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
