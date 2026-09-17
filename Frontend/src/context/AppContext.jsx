// // import { useContext, createContext, useEffect } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import { useState } from "react";
// // import toast from "react-hot-toast";

// // axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// // const AppContext = createContext();

// // export const AppProvider = ({ children }) => {
// //   const navigate = useNavigate();

// //   const [token, setToken] = useState(null);
// //   const [input, setInput] = useState("");

 

// //   const value = {
// //     axios,
// //     navigate,
// //     token,
// //     setToken,
    
// //     input,
// //     setInput,
// //   };
// //   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// // };

// // export const useAppContext = () => {
// //   return useContext(AppContext);
// // };

// import { useContext, createContext, useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// // Backend URL
// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const navigate = useNavigate();

//   // Get token from localStorage when app starts
//   const [token, setToken] = useState(
//     localStorage.getItem("token") || null
//   );

//   const [input, setInput] = useState("");

//   // Attach token to every Axios request
//   useEffect(() => {
//     if (token) {
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     } else {
//       delete axios.defaults.headers.common["Authorization"];
//     }
//   }, [token]);

//   const value = {
//     axios,
//     navigate,
//     token,
//     setToken,
//     input,
//     setInput,
//   };

//   return (
//     <AppContext.Provider value={value}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => {
//   return useContext(AppContext);
// };

import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  const [input, setInput] = useState("");

  // Set Authorization header whenever token changes
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      console.log("Authorization header set:", true);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      console.log("Authorization header removed");
    }
  }, [token]);

  const value = {
    axios,
    navigate,
    token,
    setToken,
    input,
    setInput,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContext;
