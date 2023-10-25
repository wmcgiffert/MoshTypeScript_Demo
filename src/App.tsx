import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/Reminder';

const reminders: Reminder[] = [
  {
    id: 1,
    title: 'Follow up with Price'
  },
  {
    id: 2,
    title: 'Follow up with Dad'
  },
  {
    id: 3,
    title: 'Follow up with Elizabeth'
  },
]

function App() {
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
