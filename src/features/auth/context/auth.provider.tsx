import React, { createContext, useContext } from "react";

import { useAuth, User, Token } from "../hooks/useAuth";

interface AuthContextState {
  user: User | null
  token: Token | null
  login: (user: User, token: Token) => void
  logout: () => void
}

const initState: AuthContextState = {
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
}

const AuthContext = createContext<AuthContextState>(initState);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContextProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { user, token, login, logout } = useAuth();

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };
