import Reminder from '../models/Reminder'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

class ReminderService {
    async getReminders(): Promise<Reminder[]> {
        const response = await fetch(`${BASE_URL}/todos`);
        return response.json();
    }

    async addReminder(title: string): Promise<Reminder> {
        const response = await fetch(`${BASE_URL}/todos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title }),
        });
        return response.json();
    }

    async removeReminder(id: number): Promise<void> {
        await fetch(`${BASE_URL}/todos/${id}`, { method: 'DELETE' });
    }
}

const reminderService = new ReminderService();
export default reminderService;
