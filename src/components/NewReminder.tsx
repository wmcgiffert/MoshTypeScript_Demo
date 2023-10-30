import React, { useState } from 'react';

interface NewReminderProps {
    onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
    const [title, setTitle] = useState('');

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(title);
        if (!title) return;
        onAddReminder(title);
        setTitle('');
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title"></label>
            <input value={title} onChange={e => setTitle(e.target.value)} id="title" type="text" className="form-control mb-2" />
            <button
                type="submit"
                className="btn btn-primary mb-4 rounded-pill"
            >Add Reminder</button>
        </form>
    );
}

export default NewReminder;