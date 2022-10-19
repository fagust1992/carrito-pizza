import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [dato, setData] = useState([]);
  const url = "/pizzas.json";
  const consultarPizzas = async (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })

      .catch((error) => console.log(error));
  };
  useEffect(() => {
    consultarPizzas(url);
  }, []);

  return <Context.Provider value={{ dato }}>{children}</Context.Provider>;
};
