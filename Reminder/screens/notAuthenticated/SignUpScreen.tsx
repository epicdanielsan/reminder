import { useContext, useState } from "react";
import { Text, View } from "react-native";
import { AuthenticationContext } from "../../store/auth-context";

const SignUpScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  const authCtx = useContext(AuthenticationContext);

  return (
    <View>
      <Text>Sign Up Sreen</Text>
    </View>
  );
};

export default SignUpScreen;
