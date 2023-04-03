import { createContext, useContext ,useState, useEffect } from "react";

const initialState = {theme: "", data: []}

const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [favs, setFavs] = useState([]);
  const [theme , setTheme] = useState(initialState);

  useEffect(() => {
    async function fetchDataAsync() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const info = await response.json();
      setTheme({...theme,data:info});
    }
    fetchDataAsync();
  }, []);

  console.log(theme);

  return (
    <ContextGlobal.Provider value={{favs, setFavs, theme, setTheme} }>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
