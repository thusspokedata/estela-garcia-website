//import { PromiseProvider } from "mongoose";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const storeToken = (token) => {
    // store this token in local storage
    localStorage.setItem("authToken", token);
  };

  const verifyStoredToken = () => {
    // check if we have a token in local storage
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      return axios
        .get("/api/auth/verify", {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const user = response.data;
          // console.log(
          // `this is response.data: ${JSON.stringify(response.data)}`
          // );
          setUser(user);
          setIsLoggedIn(true);
          setIsLoading(false);
        })
        .catch((err) => {
          setUser(null);
          setIsLoggedIn(false);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    verifyStoredToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        isLoading,
        storeToken,
        verifyStoredToken,
        logoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
