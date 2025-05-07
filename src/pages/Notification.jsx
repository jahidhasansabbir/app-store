import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import NotificationCard from '../components/NotificationCard/NotificationCard';

const Notification = () => {
    useEffect(() => {
          document.title = "Notifications | AppStore";
        }, []);
    const notifications = useLoaderData();
    return (
        <div>
            <h1 className='text-lg md:text-4xl font-bold'>Notifications</h1>
            {notifications.map(notification=><NotificationCard key={notification.id} notification={notification}></NotificationCard>)}
        </div>
    );
};

export default Notification;