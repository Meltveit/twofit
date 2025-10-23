import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  hasCompletedOnboarding: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  completeOnboarding: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    checkAuth();
  }, []);

  const checkAuth = async () => {
    // TODO: Check AsyncStorage for user session
    setLoading(false);
  };

  const signIn = async (email: string, password: string) => {
    // TODO: Firebase auth
    const mockUser = {
      id: '1',
      email,
      hasCompletedOnboarding: false,
    };
    setUser(mockUser);
  };

  const signUp = async (email: string, password: string) => {
    // TODO: Firebase auth
    const mockUser = {
      id: '1',
      email,
      hasCompletedOnboarding: false,
    };
    setUser(mockUser);
  };

  const signOut = async () => {
    setUser(null);
  };

  const completeOnboarding = () => {
    if (user) {
      setUser({ ...user, hasCompletedOnboarding: true });
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, completeOnboarding }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
