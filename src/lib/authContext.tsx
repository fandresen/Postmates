import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  auth: Record<string, unknown>;
  setAuth: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
}
interface AuthProviderProps {
  children: ReactNode;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<Record<string, unknown>>({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>

  )
}

export default AuthContext;
