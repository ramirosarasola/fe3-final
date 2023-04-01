import { createContext, useContext ,useState } from "react";

const initialState = {theme: "", data: []}

const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [favs, setFavs] = useState([]);
  const [theme , setTheme] = useState(initialState);

  return (
    <ContextGlobal.Provider value={{favs, setFavs, theme, setTheme} }>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
