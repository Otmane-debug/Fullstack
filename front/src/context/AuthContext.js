import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(
    JSON.parse(localStorage.getItem("authTokens")) || null
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("authTokens")
  );
  
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/users/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    const data = await response.json();

    console.log("data : ", data);
    console.log("Response : ", response);

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      setIsAuthenticated(true);
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/shop");
    } else {
      alert("Something went wrong !");
    }
  };

  const logout = () => {
    setAuthTokens(null);
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("authTokens");
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    console.log("user has changed to:", user);

    localStorage.setItem("authTokens", JSON.stringify(authTokens));
    localStorage.setItem("user", JSON.stringify(user));
  }, [authTokens, user]);

  const contextData = {
    isAuthenticated,
    user,
    loginUser,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};
