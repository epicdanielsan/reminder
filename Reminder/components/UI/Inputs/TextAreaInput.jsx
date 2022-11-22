import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../../../util/global/Colors";

// type inputProps = {
//   placeholder: string,
//   inputStyle: {},
//   inputContainerStyle: {},
//   placeholderTextColor: string,
//   onChangeHandler: () => {},
//   value: string,
// };

const TextAreaInput = (props) => {
  return (
    <View style={[styles.taskContainer, props.inputContainerStyle]}>
      <TextInput
        placeholder={props.placeholder}
        style={[styles.input, props.inputStyle]}
        placeholderTextColor={props.placeholderTextColor}
        multiline
        onChangeText={props.onChangeHandler}
        value={props.value}
      />
    </View>
  );
};

export default TextAreaInput;

const styles = StyleSheet.create({
  taskContainer: {
    margin: 10,
    borderWidth: 1,
    borderColor: Colors.primary.primary900,
    borderRadius: 5,
    minHeight: 300,
    padding: 10,
  },
  input: {
    color: Colors.primary.primary900,
    fontSize: 20,
  },
});
