import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AddReminderScreen from "../screens/authenticated/AddReminderScreen";
import MyRemindersScreen from "../screens/authenticated/MyRemindersScreen";
import ProfileScreen from "../screens/authenticated/ProfileScreen";
import SettingsScreen from "../screens/authenticated/SettingsScreen";
import { Colors } from "../util/global/Colors";

const Drawer = createDrawerNavigator();

const AuthenticatedNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary.primary100 },
        headerTintColor: Colors.primary.primary900,
        // sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: Colors.primary.primary100 },
        drawerInactiveTintColor: Colors.primary.primary400,
        drawerActiveTintColor: Colors.primary.primary900,
        drawerActiveBackgroundColor: Colors.primary.primary500,
      }}
    >
      <Drawer.Screen
        name="AddReminder"
        component={AddReminderScreen}
        options={{
          headerTitleAlign: "center",
          title: "New Reminder",
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="document-text-outline" />
          ),
        }}
      />
      <Drawer.Screen
        name="MyReminders"
        component={MyRemindersScreen}
        options={{
          headerTitleAlign: "center",
          title: "My Reminders",
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="documents" />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitleAlign: "center",
          title: "Profile",
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="person" />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitleAlign: "center",
          title: "Settings",
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="settings" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthenticatedNavigator;
