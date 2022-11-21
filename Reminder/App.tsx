import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import NotAuthenticatedStack from "./navigators/NotAuthenticatedStack";
import AuthenticationContextProvider, {
  AuthenticationContext,
} from "./store/auth-context";

const Navigation = () => {
  const authCtx = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {authCtx?.isAuthenticated ? (
        <NotAuthenticatedStack />
      ) : (
        <NotAuthenticatedStack />
      )}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
