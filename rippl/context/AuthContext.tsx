import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fake login function (replace with Supabase later)
  const login = (fakeUser = { id: "123", name: "Test" }) => {
    setUser(fakeUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
