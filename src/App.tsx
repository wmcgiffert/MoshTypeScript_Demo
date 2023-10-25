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

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
