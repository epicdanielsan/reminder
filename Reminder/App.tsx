import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import AuthenticatedNavigator from "./navigators/AuthenticatedNavigator";
import NotAuthenticatedStack from "./navigators/NotAuthenticatedStack";
import AuthenticationContextProvider, {
  AuthenticationContext,
} from "./store/auth-context";
import ReminderContextProvider from "./store/reminder-context";

const Navigation = () => {
  const authCtx = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {authCtx?.isAuthenticated ? (
        <NotAuthenticatedStack />
      ) : (
        <AuthenticatedNavigator />
      )}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AuthenticationContextProvider>
        <ReminderContextProvider>
          <NavigationContainer>
            <AuthenticatedNavigator />
          </NavigationContainer>
        </ReminderContextProvider>
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
