import { createContext, useState } from "react";
import { reminder } from "../types";

type Props = {
  reminders: reminder[];
  setReminders: (reminders: reminder[]) => void;
};

interface CtxProps {
  children?: React.ReactNode;
}

export const ReminderContext = createContext<Props>({
  reminders: [],
  setReminders: (reminders: reminder[]) => {},
});

const ReminderContextProvider: React.FC<CtxProps> = ({ children }) => {
  const [remindersContainer, setRemindersContainer] = useState<reminder[]>([]);

  const setReminders = (reminders: reminder[]) => {
    setRemindersContainer(reminders);
  };

  const value = {
    reminders: remindersContainer,
    setReminders: setReminders,
  };
  return (
    <ReminderContext.Provider value={value}>
      {children}
    </ReminderContext.Provider>
  );
};

export default ReminderContextProvider;
