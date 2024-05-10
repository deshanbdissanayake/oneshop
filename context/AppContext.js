// AppContext.js
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [navType, setNavType] = useState('drawer');
  const [themeColor, setThemeColor] = useState('dark');

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, isLoading, setIsLoading, navType, setNavType, themeColor, setThemeColor }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
    return useContext(AppContext);
}
