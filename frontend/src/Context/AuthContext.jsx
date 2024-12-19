import { createContext, useContext, useState, useEffect } from "react";
import * as apiClient from '../api-client.js';
import { useQuery } from "react-query";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // To track loading state

  // Validate token only on page load or refresh
  const { data, isError, isLoading: queryLoading } = useQuery(
    "validateToken",
    apiClient.validateToken,
    {
      retry: false,
      onSuccess: () => setIsLoggedIn(true),
      onError: () => setIsLoggedIn(false),
    }
  );

  useEffect(() => {
    setIsLoading(queryLoading);
  }, [queryLoading]);

  const login = () => {
    setIsLoggedIn(true); // Set immediately when login happens
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 h-screen">
        <div className="loader"></div> 
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
