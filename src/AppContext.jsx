import { createContext, useState } from 'react';

export const AppContext = createContext({ username: 'asdf', logIn: () => {}, logOut: () => {} });

export const AppContextProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const contextValue = {
    username,
    logIn: setUsername,
    logOut: () => {
      setUsername('');
    }
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
