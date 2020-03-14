import React, { createContext } from "react";
import { useLocalStorage } from "../../hooks/localStorageHooks";

// constants
import { LOCAL_STORAGE_AUTHENTICATED_KEY } from "../../constants/localStorageConstants";

export const AuthenticationContext = createContext();

export default ({ children }) => {
  const [authenticated, setAuthenticated] = useLocalStorage(LOCAL_STORAGE_AUTHENTICATED_KEY, false);

  const defaultContent = {
    authenticated,
    setAuthenticated
  }

  return (
    <AuthenticationContext.Provider value={defaultContent}>
      {children}
    </AuthenticationContext.Provider>
  )
}
