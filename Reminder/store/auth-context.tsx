import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext } from "react";

interface CtxProps {
  children?: React.ReactNode;
}

type ctxType = {
  token: string | null;
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
};

export const AuthenticationContext = createContext<ctxType | null>({
  token: "",
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => {},
});

const AuthenticationContextProvider: React.FC<CtxProps> = ({ children }) => {
  const [authToken, setAuthToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) setAuthToken(storedToken);
    };

    fetchToken();
  }, []);

  const authenticate = (token: string) => {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  };

  const logout = () => {
    setAuthToken(null);
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
