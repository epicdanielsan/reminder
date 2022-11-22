import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  children?: React.ReactNode;
  title: string;
  style?: {};
  titleStyle?: {};
  onPress: () => void;
};

const TextButton: React.FC<ButtonProps> = (props) => {
  return (
    <Pressable
      style={[styles.rootContainer, props.style]}
      onPress={props.onPress}
    >
      <Text style={props.titleStyle}>{props.title}</Text>
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
