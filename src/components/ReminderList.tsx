import React from 'react';
import Reminder from '../models/Reminder';



interface ReminderListProps {
    items: Reminder[];
}

function ReminderList({ items }: ReminderListProps) {
    return (
        <ul className='list-group'>
            {items.map(item =>
                <li className='list-group-item d-flex justify-content-between' key={item.id}>
                    <span>
                        {item.title}
                    </span>
                    <span>
                        <button className="btn btn-danger">Delete</button>
                    </span>
                </li>)}
        </ul>
    );
}

export default ReminderList;