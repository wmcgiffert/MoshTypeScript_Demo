import { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/Reminder';
import RemindersService from './services/remindersService';



function App() {
  const [reminders, setRemidners] = useState<Reminder[]>([]);

  useEffect(() => { loadReminders(); }, [])

  const loadReminders = async () => {
    const data = RemindersService.getReminders();
    setRemidners(await data);
  }
  const removeReminder = async (id: number) => {
    setRemidners(reminders.filter(reminder => reminder.id !== id))
    RemindersService.removeReminder(id);
    console.log(id);
    console.log('Button Clicked')
  }

  return (
    <div className="App">
      <ReminderList
        items={reminders}
        onRemoveReminder={removeReminder}
      />
    </div>
  );
}

export default App;
