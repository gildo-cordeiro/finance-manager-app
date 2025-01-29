import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';

interface AuthContextType {
  accessToken: string | null;
  login: (accessToken: string) => void;
  logout: () => void;
  renewToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem('accessToken'));

  const login = (newAccessToken: string) => {
    setAccessToken(newAccessToken);
    localStorage.setItem('accessToken', newAccessToken);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem('accessToken');
  };

  const renewToken = useCallback(async () => {
    if (!accessToken) {
      logout();
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/auth/renew-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: accessToken }),
      });

      if (!response.ok) {
        throw new Error('Failed to renew token');
      }

      const data = await response.json();
      login(data.accessToken);
    } catch (error) {
      console.error('Failed to renew token:', error);
      logout();
    }
  }, [accessToken]);

  useEffect(() => {
    const interval = setInterval(() => {
      renewToken();
    }, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, [accessToken, renewToken]);

  return (
    <AuthContext.Provider value={{ accessToken, login, logout, renewToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};