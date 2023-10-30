import React from 'react';
import Reminder from '../models/Reminder';



interface ReminderListProps {
    items: Reminder[];
    onRemoveReminder: (id: number) => void;
}

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
    return (
        <ul className='list-group'>
            {items.map(item =>
                <li className='list-group-item d-flex justify-content-between' key={item.id}>
                    <span>
                        {item.title}
                    </span>
                    <span>
                        <button
                            className="btn btn-danger rounded-pill"
                            onClick={() => onRemoveReminder(item.id)}
                        >Delete</button>
                    </span>
                </li>)}
        </ul>
    );
}

export default ReminderList;