import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/notAuthenticated/LoginScreen";
import SignUpScreen from "../screens/notAuthenticated/SignUpScreen";

const Stack = createStackNavigator();

const NotAuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default NotAuthenticatedStack;
