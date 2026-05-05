import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  // ✅ Token ko state me rakhna (initially localStorage se)
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || "";
  });

  // ✅ Token store karne ka function
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  // ✅ Check login status
  const isLoggedIn = !!token;

  // ✅ Logout function
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  // ✅ Helper function for authorized API calls
  const authFetch = async (url, options = {}) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    };

    const res = await fetch(url, { ...options, headers });
    return res;
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, LogoutUser, token, authFetch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom Hook
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
