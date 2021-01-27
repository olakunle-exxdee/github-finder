import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("a");

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${search}`
      );
      const data = await response.json();

      if (data) {
        setUsers(data.items);
        console.log(data.items);
      } else {
        setUsers([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [search]);
  useEffect(() => {
    fetchUsers();
    return () => {};
  }, [fetchUsers]);

  return (
    <UsersContext.Provider value={{ users, setSearch, loading, search }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UsersContext);
};
