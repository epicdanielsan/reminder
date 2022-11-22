import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ButtonProps = {
  children?: React.ReactNode;
  title: string;
  style?: {};
  titleStyle?: {};
  iconName: any;
  iconSize: number;
  iconColor: string;
};

const IconButton: React.FC<ButtonProps> = (props) => {
  return (
    <Pressable style={[styles.rootContainer, props.style]}>
      <View style={styles.buttonContainer}>
        <Ionicons
          name={props.iconName}
          size={props.iconSize}
          color={props.iconColor}
        />
        <Text style={props.titleStyle}>{props.title}</Text>
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
  },
});
