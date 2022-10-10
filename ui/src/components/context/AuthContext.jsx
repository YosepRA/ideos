import React, { useState, useMemo, createContext } from 'react';
import axios from 'axios';

const { VITE_API_ENDPOINT } = import.meta.env;

const AuthContext = createContext({
  authenticated: false,
  user: {},
  signin: () => {},
  signup: () => {},
  signout: () => {},
});

const AuthContextProvider = function AuthContextProviderComponent({
  children,
}) {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const signin = (payload) => {
    return axios
      .post(`${VITE_API_ENDPOINT}/api/user/signin`, payload)
      .then(({ data }) => {
        if (data.status === 'error') {
          throw new Error(data.message);
        }

        setAuthenticated(true);
        setUser({ username: data.user.username });
      });
  };

  const signup = (payload) => {};

  const signout = () => {
    return axios.get(`${VITE_API_ENDPOINT}/api/user/signout`).then((res) => {
      setAuthenticated(false);
      setUser({});
    });
  };

  const contextValue = useMemo(
    () => ({
      authenticated,
      user,
      signin,
      signup,
      signout,
    }),
    [authenticated],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
