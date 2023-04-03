import { createContext, useContext ,useState, useEffect, useReducer} from "react";

const initialState = {theme: "", data: []}

const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchDataAsync() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const info = await response.json();
      dispatch({ type: 'SET_DATA', payload: info });
    }
    fetchDataAsync();
  }, []);

  const handleThemeChange = () => {
    dispatch({ type: 'SET_THEME', payload: state.theme === 'dark' ? '' : 'dark' });
  };

  return (
    <ContextGlobal.Provider value={{favs, setFavs, state, dispatch, handleThemeChange}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);

