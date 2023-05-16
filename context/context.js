import { createContext, useState, useEffect, useContext } from "react";
// import axios from "axios";

const AppContext = createContext();

// const url =
//   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=10&page=1&sparkline=false";

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // const fetchCoins = async () => {
  //   try {
  //     // setLoading(true);
  //     const res = await axios(url);
  //     const data = res.data;
  //     setLoading(false);

  //     setCoins(data);
  //     // console.log(coins);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCoins();
  // }, []);

  return (
    <AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
