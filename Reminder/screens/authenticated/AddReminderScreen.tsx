import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import TextButton from "../../components/UI/Buttons/TextButton";
import TextAreaInput from "../../components/UI/Inputs/TextAreaInput";
import { ReminderContext } from "../../store/reminder-context";
import { reminder } from "../../types";
import { Colors } from "../../util/global/Colors";

const AddReminderScreen = () => {
  const navigation = useNavigation();
  const reminderCtx = useContext(ReminderContext);

  const [reminders, setReminders] = useState<reminder[]>(
    reminderCtx?.reminders
  );
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const tileChangeHandler = (title: string) => {
    setTitle(title);
  };
  const descriptionChangeHandler = (title: string) => {
    setDescription(title);
  };

  const addReminder = () => {
    const reminderObj: reminder = {
      title: title,
      description: description,
    };
    setReminders((current: reminder[]) => [...current, reminderObj]);
    reminderCtx?.setReminders(reminders);
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.titleInputContainer}>
          <TextInput
            placeholder="Title"
            style={styles.input}
            placeholderTextColor={Colors.primary.primary400}
            onChangeText={tileChangeHandler}
            value={title}
          />
        </View>
        <TextAreaInput placeholder="Remind Me..." />
        <View style={styles.buttonContainer}>
          <TextButton
            title="CANCEL"
            style={styles.button}
            titleStyle={styles.buttonText}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <TextButton
            title="ADD"
            style={styles.button}
            titleStyle={styles.buttonText}
            onPress={addReminder}
          />
        </View>
      </View>
    </View>
  );
};

export default AddReminderScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.primary.primary100,
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 70,
    backgroundColor: Colors.primary.primary200,
    elevation: 2,
    borderRadius: 10,
  },
  titleInputContainer: {
    margin: 10,
    marginTop: 30,
    borderWidth: 1,
    borderColor: Colors.primary.primary900,
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 20,
  },
  button: {
    width: 120,
    backgroundColor: Colors.primary.primary700,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    color: Colors.primary.primary900,
    fontSize: 20,
  },
});
